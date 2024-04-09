import React, { FormEvent, useEffect, useState } from 'react';
import { FormDataType } from '../../types';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import Results from './Results';
import ProgressBar from './ProgressBar';

const MultiStepForm: React.FC = () => {
	const TOTAL_STEPS = 4;
	const initialData = {
		firstName: "",
		lastName: "",
		age: "",
		phone: "",
		email: "",
		seat: "",
		food: "",
		allergies: ""
	};

	const [currentStep, setCurrentStep] = useState<number>(1);
	const [formData, setFormData] = useState<FormDataType>(initialData);

	useEffect(() => {
		const storedData = localStorage.getItem('formData');
		if (storedData) {
			setFormData(JSON.parse(storedData));
		}
	}, []);

	function handleClickBack() {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	}

	function handleClickNext() {
		if (currentStep < TOTAL_STEPS) {
			setCurrentStep(currentStep + 1);
		}
	}

	function updateFormData(fields: Partial<FormDataType>) {
		setFormData(prev => ({ ...prev, ...fields }));
	}

	function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		handleClickNext();
		localStorage.setItem('formData', JSON.stringify(formData));
	}

	function renderFormSteps() {
		switch (currentStep) {
			case 1:
				return <FormStep1 formData={formData} updateFormData={updateFormData}/>;
			case 2:
				return <FormStep2 formData={formData} updateFormData={updateFormData}/>;
			case 3:
				return <FormStep3 formData={formData} updateFormData={updateFormData}/>;
			case 4:
				return <Results formData={formData}/>;
			default:
				return <FormStep1 formData={formData} updateFormData={updateFormData}/>;
		}
	}

	function renderTitle() {
		if(currentStep === TOTAL_STEPS) {
			return "Result"
		} else {
			return `Step ${currentStep}`
		}
	}

	const isFirst = currentStep !== 1
	const isNotLast = currentStep < TOTAL_STEPS

	return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col lg={6} xs={12} className="multistep-form-bg p-5 rounded d-flex flex-column form-height">
                    <h2 data-testid="title" className='text-center mb-4'>{renderTitle()}</h2>
                    <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS}/>
                    
                    <Form onSubmit={handleFormSubmit} className="d-flex flex-column flex-grow-1">
                        <div className="flex-grow-1">
                            {renderFormSteps()}
                        </div>
                        
                        <div className="mt-3 d-flex justify-content-between">
                            {isFirst
                                ? <Button 
									onClick={handleClickBack}
									data-testid="back"
									variant='outline-info'
								>
                                        Back
                                  </Button>
                                : <div/> // just for spacing
                            }
                            {isNotLast && (
                                <Button 
									type="submit" 
									data-testid="submit" 
									variant="info"
								>
                                    Next
                                </Button>
                            )}
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default MultiStepForm;
