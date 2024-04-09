import React from 'react';
import { ProgressBar } from 'react-bootstrap';

interface Props {
	currentStep: number,
	totalSteps: number
}

const MultiStepProgressBar: React.FC <Props> = ({ totalSteps, currentStep }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

	return (
		<div className="my-4">
			<ProgressBar now={progressPercentage} variant='info'/>
		</div>
	);
};

export default MultiStepProgressBar;