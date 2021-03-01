import { useContext } from 'react';
import { RecordsContext } from '../contexts/RecordsContext';

import iconX from '../assets/images/icons/close-red.svg';

export function PlayRecordModal() {
	const { currentPlaying, stopTheRecord } = useContext(RecordsContext);

	return (
		<div className="fixed left-0 top-0 bottom-0 right-0 flex justify-center items-center z-10 bg-text bg-opacity-60 dark:bg-black dark:bg-opacity-50">
			<div className="w-full max-w-md py-10 px-5 bg-white dark:bg-text rounded-custom shadow-lg relative lg:mx-0 mx-4">
				<header>
					<h3 className="uppercase text-text dark:text-gray-50 mb-16 text-2xl font-bold tracking-wider font-serif text-left">Reproduzir</h3>

					<button
						type="button"
						className="absolute right-4 top-4 transition-opacity duration-300 hover:opacity-75"
						onClick={ stopTheRecord }
					>
						<img src={ iconX } alt="Close"/>
					</button>
				</header>

				<main className="flex justify-center items-center">
					<audio
						controls
						src={ currentPlaying }
					></audio>
				</main>
			</div>
		</div>
	);
}