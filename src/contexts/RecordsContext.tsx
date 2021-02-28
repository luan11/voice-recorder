import { createContext, ReactNode, useState } from "react";

type Record = {
	id: number;
	name: string;
	file: any;
}

interface RecordsContextData {
	isRecording: boolean;
	isRecordingFinished: boolean;
	records: Record[];
	startRecording: () => void;
	stopRecording: () => void;
	deleteRecord: (toDeleteId: number) => void;
	deleteAllRecords: (toDeleteId: number) => void;
}

interface RecordsProviderProps {
	children: ReactNode;
}

export const RecordsContext = createContext({} as RecordsContextData);

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

	function startRecording() {
		setIsRecording(true);
	}

	function stopRecording() {
		setIsRecording(false);
		setIsRecordingFinished(true);
	}

	function deleteRecord(toDeleteId: number) {		
		const filteredRecords = records.filter(({ id }) => id !== toDeleteId );

		setRecords(filteredRecords);
	}

	function deleteAllRecords() {
		setRecords([]);
	}

	return (
		<RecordsContext.Provider
			value={{
				isRecording,
				isRecordingFinished,
				records,
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