import React from 'react';
import { FormDataType } from '../../types';
import { Form, FormGroup } from 'react-bootstrap';

interface Props {
	formData: FormDataType,
	updateFormData: (fields: Partial<FormDataType>) => void

}

const FormStep1: React.FC<Props> = ({formData, updateFormData}) => {
	return (
		<>
			<FormGroup controlId="firstNameInput">
				<Form.Label>First Name</Form.Label>
				<Form.Control
					data-testid="firstName" 
					aria-label="First Name"
					aria-describedby="basic-addon1"
					value={formData.firstName}
					required
					onChange={e => updateFormData({firstName: e.target.value})}
				/>
			</FormGroup>
			
			<FormGroup controlId="lastNameInput">
				<Form.Label>Last Name</Form.Label>
				<Form.Control
					data-testid="lastName"
					aria-label="Last Name"
					aria-describedby="basic-addon1"
					value={formData.lastName}
					required
					onChange={e => updateFormData({lastName: e.target.value})}
				/>
			</FormGroup>
			
			<FormGroup controlId="ageInput">
				<Form.Label>Age</Form.Label>
				<Form.Control
					data-testid="age"
					aria-label="Age"
					aria-describedby="basic-addon1"
					value={formData.age}
					required
					onChange={e => updateFormData({age: e.target.value})}
				/>
			</FormGroup>
		</>
	  );
};

export default FormStep1;