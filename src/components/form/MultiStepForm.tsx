import React, { FormEvent, useEffect, useState } from 'react';
import { FormDataType } from '../../types';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import Results from './Results';
import ProgressBar from './ProgressBar';
import useMultiStep from '../../hooks/useMultiStep';

const MultiStepForm: React.FC = () => {

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

	const [formData, setFormData] = useState<FormDataType>(initialData);
	const {step, currentStepIndex, handleClickBack, handleClickNext, isFirst, isNotLast, totalSteps} = useMultiStep([
		<FormStep1 formData={formData} updateFormData={updateFormData}/>,
		<FormStep2 formData={formData} updateFormData={updateFormData}/>,
		<FormStep3 formData={formData} updateFormData={updateFormData}/>,
		<Results formData={formData}/>
	])

	useEffect(() => {
		const storedData = localStorage.getItem('formData');
		if (storedData) {
			setFormData(JSON.parse(storedData));
		}
	}, []);


	function updateFormData(fields: Partial<FormDataType>) {
		setFormData(prev => ({ ...prev, ...fields }));
	}

	function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		handleClickNext();
		localStorage.setItem('formData', JSON.stringify(formData));
	}

	function renderTitle() {
		if(currentStepIndex === totalSteps - 1) {
			return "Result"
		} else {
			return `Step ${currentStepIndex + 1}`
		}
	}

	return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col lg={6} xs={12} className="multistep-form-bg p-5 rounded d-flex flex-column form-height">
                    <h2 data-testid="title" className='text-center mb-4'>{renderTitle()}</h2>
                    <ProgressBar currentStepIndex={currentStepIndex} totalSteps={totalSteps}/>
                    
                    <Form onSubmit={handleFormSubmit} className="d-flex flex-column flex-grow-1">
                        <div className="flex-grow-1">
                            {step}
                        </div>
                        
                        <div className="mt-3 d-flex justify-content-between">
                            {!isFirst
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
