import { useContext } from 'react';
import { RecordsContext } from '../contexts/RecordsContext';

import iconX from '../assets/images/icons/close-white.svg';
import iconCheck from '../assets/images/icons/check.svg';

export function SaveRecordModal() {
	const { currentRecord, setCurrentRecordName, saveRecord, cancelSaveRecord } = useContext(RecordsContext);

	function handleSetCurrentRecordName(event: React.FormEvent<HTMLInputElement>) {
		setCurrentRecordName(event.currentTarget.value);
	}

	return (
		<div className="fixed left-0 top-0 bottom-0 right-0 flex justify-center items-center z-10 bg-text bg-opacity-60 dark:bg-black dark:bg-opacity-50">
			<div className="w-full max-w-md py-10 px-5 bg-white dark:bg-text rounded-custom shadow-lg lg:mx-0 mx-4">
				<header>
					<h3 className="uppercase text-text dark:text-gray-50 mb-9 text-2xl font-bold tracking-wider font-serif text-left">Salvar</h3>
				</header>

				<main className="mb-11">
					<div className="w-full relative flex font-mono">
						<input 
							className="bg-bg w-10/12 shadow-inner rounded-custom rounded-r-none py-3 pl-6 placeholder-gray-300 text-text focus:placeholder-transparent"
							type="text"
							placeholder="Nome da gravação"
							onInput={handleSetCurrentRecordName}
						/>

						<span className="w-2/12 bg-text dark:bg-gray-400 text-white text-center flex items-center justify-center rounded-custom rounded-l-none">.mp3</span>
					</div>
				</main>

				<footer className="flex justify-center items-center">
					{ currentRecord.name ? (
						<button 
							type="button"
							className="bg-button-green rounded-custom p-2 transition-opacity duration-300 hover:opacity-75 mr-6"
							onClick={saveRecord}
						>
							<img src={iconCheck} alt="Save"/>
						</button>
					) : (
						<button 
							disabled
							type="button"
							className="bg-gray-300 rounded-custom p-2 mr-6 cursor-not-allowed"
						>
							<img src={iconCheck} alt="Save"/>
						</button>
					) }

					<button 
						type="button"
						className="bg-button-red rounded-custom p-2 transition-opacity duration-300 hover:opacity-75"
						onClick={cancelSaveRecord}
					>
						<img src={iconX} alt="Cancel"/>
					</button>
				</footer>
			</div>
		</div>
	)
}