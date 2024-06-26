import React from 'react';
import { ProgressBar } from 'react-bootstrap';

interface Props {
	currentStepIndex: number,
	totalSteps: number
}

const MultiStepProgressBar: React.FC <Props> = ({ totalSteps, currentStepIndex }) => {
const startingStep = currentStepIndex + 1

  const progressPercentage = (startingStep  / totalSteps) * 100;

	return (
		<div className="my-4">
			<ProgressBar now={progressPercentage} variant='info'/>
		</div>
	);
};

export default MultiStepProgressBar;