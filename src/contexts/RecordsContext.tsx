import { createContext, ReactNode, useEffect, useState } from "react";

import slugify from 'slugify';

type Record = {
	id: number;
	name: string;
	file: any;
}

interface RecordsContextData {
	isRecordingAuthorized: boolean;
	isRecording: boolean;
	isRecordingFinished: boolean;
	records: Record[];
	hours: number;
	minutes: number;
	seconds: number;
	currentRecord: Record;
	lastId: number;
	isPlaying: boolean;
	currentPlaying: string;
	startRecording: () => void;
	stopRecording: () => void;
	deleteRecord: (toDeleteId: number) => void;
	deleteAllRecords: () => void;
	cancelSaveRecord: () => void;
	setCurrentRecordName: (name: string) => void;
	saveRecord: () => void;
	playTheRecord: (src: string) => void;
	stopTheRecord: () => void;
}

interface RecordsProviderProps {
	children: ReactNode;
}

export const RecordsContext = createContext({} as RecordsContextData);

let recorder: MediaRecorder;
let recordingChunks: BlobPart[] = [];
let timerTimeout: NodeJS.Timeout;

export function RecordsProvider({ children }: RecordsProviderProps) {
	const [isRecordingAuthorized, setIsRecordingAuthorized] = useState(true);
	const [isRecording, setIsRecording] = useState(false);
	const [isRecordingFinished, setIsRecordingFinished] = useState(false);
	const [records, setRecords] = useState<Record[]>([]);
	const [timer, setTimer] = useState(0);
	const [currentRecord, setCurrentRecord] = useState<Record>({
		id: -1,
		name: '',
		file: null
	});
	const [lastId, setLastId] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentPlaying, setCurrentPlaying] = useState('');

	const hours = Math.floor(timer / 3600);
	const minutes = Math.floor(timer / 60);
	const seconds = timer % 60;

	function startRecording() {
		if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices.getUserMedia({
				audio: true
			})
			.then(stream => {
				setIsRecording(true);

				recorder = new MediaRecorder(stream);

				recorder.start();

				recorder.ondataavailable = e => {
					recordingChunks.push(e.data);
				}
			})
			.catch(error => {
				console.error(error);

				setIsRecordingAuthorized(false);
			});
		}
	}

	function stopRecording() {
		recorder.onstop = () => {
			const recordBlob = new Blob(recordingChunks, {
				type: 'audio/ogg; codecs=opus'
			});
	
			setCurrentRecord({
				...currentRecord,
				file: window.URL.createObjectURL(recordBlob)
			});
	
			recordingChunks = [];
		}

		recorder.stop();

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

	function cancelSaveRecord() {
		setIsRecordingFinished(false);
		setCurrentRecord({
			id: -1,
			name: '',
			file: null
		});
	}

	function setCurrentRecordName(name: string) {
		setCurrentRecord({
			...currentRecord,
			name: name ? `${slugify(name, '_')}.mp3` : ''
		});
	}

	function saveRecord() {
		setRecords([...records, {...currentRecord, id: lastId + 1}]);
		setCurrentRecord({
			id: -1,
			name: '',
			file: null
		});
		setLastId(lastId + 1);
		setIsRecordingFinished(false);
	}

	function playTheRecord(src: string) {
		setIsPlaying(true);
		setCurrentPlaying(src);
	}

	function stopTheRecord() {
		setIsPlaying(false);
		setCurrentPlaying('');
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
				isRecordingAuthorized,
				isRecording,
				isRecordingFinished,
				records,
				hours,
				minutes,
				seconds,
				currentRecord,
				lastId,
				isPlaying,
				currentPlaying,
				startRecording,
				stopRecording,
				deleteRecord,
				deleteAllRecords,
				setCurrentRecordName,
				saveRecord,
				cancelSaveRecord,
				playTheRecord,
				stopTheRecord,
			}}
		>
			{ children }
		</RecordsContext.Provider>
	);
}