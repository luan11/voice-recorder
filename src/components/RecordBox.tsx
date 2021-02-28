import { useContext } from 'react';
import { RecordsContext } from '../contexts/RecordsContext';

import iconPlay from '../assets/images/icons/play-circle.svg';

export function RecordBox() {
	const { isRecording } = useContext(RecordsContext);

	return (
		<div className="flex flex-col justify-center items-center p-16 bg-white rounded-lg shadow-lg text-center">
			<h1 className="uppercase text-text mb-10 text-4xl font-bold tracking-wider font-serif">
				{ isRecording ? 'Gravando' : 'Gravar' }
			</h1>
			
			<p className="text-text mb-12">Aperte o botão abaixo e inicie uma nova<br/>gravação.</p>
			
			<button 
				type="button"
				className="bg-button-green text-white uppercase py-3.5 px-12 flex items-center justify-center rounded-lg text-center font-mono transition-opacity duration-300 hover:opacity-75"
			>
				Iniciar
				<img src={iconPlay} alt="Play" className="ml-2.5"/>
			</button>
		</div>
	);
}