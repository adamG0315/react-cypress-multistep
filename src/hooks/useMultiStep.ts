import React, {useState} from 'react'

export default function useMultiStep(steps: React.ReactElement[]) {
	const [currentStepIndex, setcurrentStepIndexIndex] = useState(0)
	const isFirst = currentStepIndex === 0
	const isNotLast = currentStepIndex < steps.length - 1

	function handleClickBack() {
		if (currentStepIndex > 0) {
			setcurrentStepIndexIndex(currentStepIndex - 1);
		}
	}

	function handleClickNext() {
		if (currentStepIndex < steps.length - 1) {
			setcurrentStepIndexIndex(currentStepIndex + 1);
		}
	}

	return {
		currentStepIndex,
		step: steps[currentStepIndex],
		handleClickBack,
		handleClickNext,
		isFirst,
		isNotLast,
		totalSteps: steps.length
	}
}


