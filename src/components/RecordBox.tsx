import { useContext } from 'react';

import { RecordsContext } from '../contexts/RecordsContext';

import { RecordTimer } from './RecordTimer';
import { SaveRecordModal } from './SaveRecordModal';

import iconPlay from '../assets/images/icons/play-circle.svg';
import iconStop from '../assets/images/icons/stop.svg';

export function RecordBox() {
	const { 
		isRecordingAuthorized, 
		isRecording, 
		isRecordingFinished, 
		startRecording, 
		stopRecording 
	} = useContext(RecordsContext);

	return (
		<div className="flex flex-col justify-center items-center p-16 bg-white dark:bg-text rounded-custom shadow-lg text-center">
			<h1 className="uppercase text-text dark:text-gray-50 mb-10 text-4xl font-bold tracking-wider font-serif">
				{ isRecording ? 'Gravando' : 'Gravar' }
			</h1>

			{ isRecordingAuthorized ? (
				<>
					{ isRecording ? (
						<>
							<RecordTimer />
		
							<button
								type="button"
								className="bg-button-red text-white uppercase py-3.5 px-12 flex items-center justify-center rounded-custom text-center font-mono transition-opacity duration-300 hover:opacity-75"
								onClick={stopRecording}
							>
								Parar
								<img src={iconStop} alt="Play" className="ml-2.5"/>
							</button>
						</>
					) : (
						<>
							<p className="text-text dark:text-gray-50 mb-12">Aperte o botão abaixo e inicie uma nova<br/>gravação.</p>
							
							<button 
								type="button"
								className="bg-button-green text-white uppercase py-3.5 px-12 flex items-center justify-center rounded-custom text-center font-mono transition-opacity duration-300 hover:opacity-75"
								onClick={startRecording}
							>
								Iniciar
								<img src={iconPlay} alt="Play" className="ml-2.5"/>
							</button>
						</>
					) }
				</>
			) : (
				<p className="text-text dark:text-gray-50 mb-12">O uso do microfone não foi autorizado, por favor autorize.</p>
			) }
			
			

			{ isRecordingFinished && <SaveRecordModal /> }
		</div>
	);
}