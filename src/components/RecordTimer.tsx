import { useContext } from "react";
import { RecordsContext } from "../contexts/RecordsContext";

export function RecordTimer() {
	const { hours, minutes, seconds } = useContext(RecordsContext);
	
	const [hourLeft, hourRight] = String(hours).padStart(2, '0').split('');
	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

	return (
		<div className="font-mono font-medium text-text mb-10 text-4xl">
			<span className="px-2 py-0.5 shadow-inner rounded-custom mr-1">{ hourLeft }</span>
			<span className="px-2 py-0.5 shadow-inner rounded-custom mr-1">{ hourRight }</span>
			<span className="mr-1">:</span>
			<span className="px-2 py-0.5 shadow-inner rounded-custom mr-1">{ minuteLeft }</span>
			<span className="px-2 py-0.5 shadow-inner rounded-custom mr-1">{ minuteRight }</span>
			<span className="mr-1">:</span>
			<span className="px-2 py-0.5 shadow-inner rounded-custom mr-1">{ secondLeft }</span>
			<span className="px-2 py-0.5 shadow-inner rounded-custom mr-1">{ secondRight }</span>
		</div>
	);
}