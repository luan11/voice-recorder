import { useContext } from "react";
import { RecordsContext } from "../contexts/RecordsContext";
import { RecordsListItem } from "./RecordsListItem";

export function RecordsList() {
	const { records } = useContext(RecordsContext);
	const list = records.map(({ id, name, file }) => {
		return <RecordsListItem 
			id={id}
			name={name}
			file={file}
		/>;
	});

	return (
		<div className="py-4 px-5 bg-white rounded-lg shadow-lg h-full">
			<h3 className="uppercase text-text mb-6 text-xl font-bold tracking-wider font-serif">Gravações</h3>

			<div className="max-h-64 overflow-y-auto">
				{ list.length > 0 ? list : <p className="text-text font-mono text-sm italic">Nada gravado ainda...</p> }
			</div>
		</div>
	);
}