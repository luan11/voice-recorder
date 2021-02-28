import { createContext, ReactNode, useEffect, useState } from "react";

type Record = {
	id: number;
	name: string;
	file: any;
}

interface RecordsContextData {
	isRecording: boolean;
	isRecordingFinished: boolean;
	records: Record[];
	hours: number;
	minutes: number;
	seconds: number;
	startRecording: () => void;
	stopRecording: () => void;
	deleteRecord: (toDeleteId: number) => void;
	deleteAllRecords: (toDeleteId: number) => void;
}

interface RecordsProviderProps {
	children: ReactNode;
}

export const RecordsContext = createContext({} as RecordsContextData);

let timerTimeout: NodeJS.Timeout;

export function RecordsProvider({ children }: RecordsProviderProps) {
	const [isRecording, setIsRecording] = useState(false);
	const [isRecordingFinished, setIsRecordingFinished] = useState(false);
	const [records, setRecords] = useState([
		{
			id: 1,
			name: 'record.mp3',
			file: null
		},
		{
			id: 2,
			name: 'record.mp3',
			file: null
		},
		{
			id: 3,
			name: 'record.mp3',
			file: null
		}
	]);
	const [timer, setTimer] = useState(0);

	const hours = Math.floor(timer / 3600);
	const minutes = Math.floor(timer / 60);
	const seconds = timer % 60;

	function startRecording() {
		setIsRecording(true);
	}

	function stopRecording() {
		setIsRecording(false);
		setIsRecordingFinished(true);
		setTimer(0);
		clearTimeout(timerTimeout);
	}

	function deleteRecord(toDeleteId: number) {		
		const filteredRecords = records.filter(({ id }) => id !== toDeleteId );

		setRecords(filteredRecords);
	}

	function deleteAllRecords() {
		setRecords([]);
	}

	useEffect(() => {
		if(isRecording) {
			timerTimeout = setTimeout(() => {
				setTimer(timer + 1);
			}, 1000);
		}
	}, [isRecording, timer]);

	return (
		<RecordsContext.Provider
			value={{
				isRecording,
				isRecordingFinished,
				records,
				hours,
				minutes,
				seconds,
				startRecording,
				stopRecording,
				deleteRecord,
				deleteAllRecords,
			}}
		>
			{ children }
		</RecordsContext.Provider>
	);
}