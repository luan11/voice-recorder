import { RecordsListItem } from "./RecordsListItem";

export function RecordsList() {
	return (
		<div className="py-4 px-5 bg-white rounded-lg shadow-lg h-full">
			<h3 className="uppercase text-text mb-6 text-xl font-bold tracking-wider font-serif">Gravações</h3>

			<div className="max-h-64 overflow-y-auto">
				<RecordsListItem
					id={1}
					name="record.mp3"
				/>
				<RecordsListItem
					id={1}
					name="record.mp3"
				/>
				<RecordsListItem
					id={1}
					name="record.mp3"
				/>
				<RecordsListItem
					id={1}
					name="record.mp3"
				/>
				<RecordsListItem
					id={1}
					name="record.mp3"
				/>
			</div>
		</div>
	);
}