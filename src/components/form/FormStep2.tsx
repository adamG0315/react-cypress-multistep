import React from 'react';
import { FormDataType } from '../../types';
import { Form, FormGroup } from 'react-bootstrap';
import { formatPhoneInput } from '../../utils/formUtils';

interface Props {
	formData: FormDataType
	updateFormData: (fields: Partial<FormDataType>) => void

}

const FormStep2: React.FC<Props> = ({formData, updateFormData}) => {
	return (
		<>
		  <FormGroup controlId="phoneInput">
			<Form.Label>Phone</Form.Label>
			<Form.Control
			  data-testid="phone"
			  placeholder="Phone"
			  aria-label="phone"
			  aria-describedby="basic-addon1"
			  value={formData.phone}
			  type="phone"
			  required
			  onChange={e => updateFormData({ phone: formatPhoneInput( e.target.value) })}
			/>
		  </FormGroup>
		  
		  <FormGroup controlId="emailInput">
			<Form.Label>Email</Form.Label>
			<Form.Control
			  data-testid="email"
			  placeholder="Email"
			  aria-label="Email"
			  aria-describedby="basic-addon1"
			  type="email"
			  value={formData.email}
			  required
			  onChange={e => updateFormData({ email: e.target.value })}
			/>
		  </FormGroup>
		</>
	  );
};

export default FormStep2;