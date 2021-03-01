import { useContext } from "react";
import { RecordsContext } from "../contexts/RecordsContext";
import { RecordsListItem } from "./RecordsListItem";

import iconBlock from '../assets/images/icons/block.svg';

export function RecordsList() {
	const { records, deleteAllRecords } = useContext(RecordsContext);
	const list = records.map(({ id, name, file }) => {
		return <RecordsListItem 
			key={id}
			id={id}
			name={name}
			file={file}
		/>;
	});

	return (
		<div className="py-4 px-5 bg-white dark:bg-text rounded-custom shadow-lg h-full relative">
			<h3 className="uppercase text-text dark:text-gray-50 mb-6 text-xl font-bold tracking-wider font-serif">Gravações</h3>

			<div className="lg:max-h-60 max-h-72 overflow-y-auto overflow-x-hidden">
				{ list.length > 0 ? list : <p className="text-text dark:text-gray-50 font-mono text-sm italic">Nada gravado ainda...</p> }
			</div>

			{ list.length > 0 && (
				<button 
					type="button"
					className="bg-button-red rounded-custom p-1 absolute right-5 bottom-4 transition-opacity duration-300 hover:opacity-75"
					title="Deletar todas gravações"
					onClick={deleteAllRecords}
				>
					<img src={iconBlock} alt="Delete all"/>
				</button>
			) }
		</div>
	);
}