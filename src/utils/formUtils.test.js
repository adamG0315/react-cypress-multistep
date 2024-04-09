import { formatPhoneInput, keepOnlyNumbers, splitCamelCaseToString } from "./formUtils";


describe('formatPhoneInput', () => {
	test('allows + at the start', () => {
		expect(formatPhoneInput('+123')).toBe('+123');
	});

	test('removes illegal characters but keeps allowed formatting', () => {
		expect(formatPhoneInput('+1 (23) 456-78a90')).toBe('+1 (23) 456-7890');
	});

	test('handles an empty string', () => {
		expect(formatPhoneInput('')).toBe('');
	});

	test('handles null', () => {
		expect(formatPhoneInput(null)).toBe(null);
	});

	test('formats without plus correctly', () => {
		expect(formatPhoneInput('1234567890')).toBe('1234567890');
	});

	test('removes illegal characters when no leading plus', () => {
		expect(formatPhoneInput('12-34-56a7890')).toBe('12-34-567890');
	});
});

describe('keepOnlyNumbers', () => {
	test('removes non-numeric characters', () => {
	  expect(keepOnlyNumbers('a1b2c3')).toBe('123');
	});
  
	test('handles strings special characters', () => {
	  expect(keepOnlyNumbers('#C---1$"\.$đ')).toBe('1');
	});
  
	test('returns an empty string if no numbers are present', () => {
	  expect(keepOnlyNumbers('ASDFASDF')).toBe('');
	});
  
	test('handles an empty string', () => {
	  expect(keepOnlyNumbers('')).toBe('');
	});
  
	test('works with numbers only', () => {
	  expect(keepOnlyNumbers('123456')).toBe('123456');
	});
});

describe('splitCamelCaseToString', () => {
	test('splits camelCase words into separate words', () => {
		expect(splitCamelCaseToString('camelCase')).toBe('Camel Case');
	});

	test('handles strings with multiple camelCase words', () => {
		expect(splitCamelCaseToString('multipleCamelCaseWords')).toBe('Multiple Camel Case Words');
	});

	test('returns the original string when no camelCase is present', () => {
		expect(splitCamelCaseToString('noCamel')).toBe('No Camel');
	});

	test('handles single-word strings correctly', () => {
		expect(splitCamelCaseToString('Word')).toBe('Word');
	});

	test('handles strings that start with a lowercase letter', () => {
		expect(splitCamelCaseToString('startsWithLowercase')).toBe('Starts With Lowercase');
	});

	test('processes empty strings correctly', () => {
		expect(splitCamelCaseToString('')).toBe('');
	});
});