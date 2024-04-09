export const formatPhoneInput = (value: string) => {
	if (!value) return value;

	if (value[0] !== '+') {
	return value.replace(/[^\d\s()-]/g, '');
	}

	const rest = value.slice(1).replace(/[^\d\s()-]/g, '');
	return `+${rest}`;
  };


export function keepOnlyNumbers(value: string) {
	return value.replace(/[^\d]/g, '');
}

export function splitCamelCaseToString(input: string) {
	const spacedString = input.replace(/([A-Z])/g, ' $1').trim();
	return spacedString.charAt(0).toUpperCase() + spacedString.slice(1);
}