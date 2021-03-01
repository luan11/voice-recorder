import { useContext } from "react";
import { RecordsContext } from "../contexts/RecordsContext";

export function RecordTimer() {
	const { hours, minutes, seconds } = useContext(RecordsContext);
	
	const [hourLeft, hourRight] = String(hours).padStart(2, '0').split('');
	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

	return (
		<div className="font-mono font-medium text-text dark:text-gray-50 mb-10 text-4xl">
			<span className="px-2 py-0.5 shadow-inner rounded-custom mr-1 dark:bg-bg-dark">{ hourLeft }</span>
			<span className="px-2 py-0.5 shadow-inner rounded-custom mr-1 dark:bg-bg-dark">{ hourRight }</span>
			<span className="mr-1">:</span>
			<span className="px-2 py-0.5 shadow-inner rounded-custom mr-1 dark:bg-bg-dark">{ minuteLeft }</span>
			<span className="px-2 py-0.5 shadow-inner rounded-custom mr-1 dark:bg-bg-dark">{ minuteRight }</span>
			<span className="mr-1">:</span>
			<span className="px-2 py-0.5 shadow-inner rounded-custom mr-1 dark:bg-bg-dark">{ secondLeft }</span>
			<span className="px-2 py-0.5 shadow-inner rounded-custom mr-1 dark:bg-bg-dark">{ secondRight }</span>
		</div>
	);
}