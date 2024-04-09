import React from 'react';
import { FormDataType } from '../../types';
import { Form, FormGroup } from 'react-bootstrap';

interface Props {
	formData: FormDataType
	updateFormData: (fields: Partial<FormDataType>) => void

}

const FormStep3: React.FC<Props> = ({formData, updateFormData}) => {
	return (
		<>			
			<FormGroup controlId="seatInput">
				<Form.Label>Seat</Form.Label>
				<Form.Control
					data-testid="seat"
					placeholder="Seat"
					aria-label="seat"
					aria-describedby="basic-addon1"
					min={1}
					value={formData.seat} // Assuming formData.seat is the correct field.
					required
					onChange={e => updateFormData({ seat: e.target.value })} // Make sure to convert to Number if needed outside this handler.
				/>
			</FormGroup>

			<FormGroup controlId="foodInput">
				<Form.Label>Food</Form.Label>
				<Form.Control
					data-testid="food"
					placeholder="Food"
					aria-label="Food"
					aria-describedby="basic-addon1"
					value={formData.food}
					required
					onChange={e => updateFormData({ food: e.target.value })}
				/>
			</FormGroup>
			
			<FormGroup controlId="allergiesInput">
				<Form.Label>Allergies</Form.Label>
				<Form.Control
					data-testid="allergies"
					placeholder="Allergies"
					aria-label="Allergies"
					aria-describedby="basic-addon1"
					value={formData.allergies}
					required
					onChange={e => updateFormData({ allergies: e.target.value })}
				/>
			</FormGroup>
		</>
	  );
};

export default FormStep3;