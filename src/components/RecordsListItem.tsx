import iconPlay from '../assets/images/icons/play.svg';
import iconSave from '../assets/images/icons/save.svg';
import iconX from '../assets/images/icons/close.svg';

interface RecordsListItemProps {
	id: number;
	name: string;
	file?: any;
}

export function RecordsListItem({ id, name }: RecordsListItemProps) {
	return (
		<div className="bg-bg rounded-lg shadow-sm w-full mb-4 relative py-3 flex justify-between items-center pl-20 overflow-hidden">
			<div className="absolute left-0 top-0 bg-text text-white font-serif text-lg font-bold px-5 h-full flex justify-center items-center">
				.{ id }
			</div>

			<p className="font-mono text-sm text-text">{ name }</p>

			<div className="mr-5">
				<button 
					type="button"
					className="mr-3 transition-transform duration-300 transform hover:scale-125"
				>
					<img src={ iconPlay } alt="Play"/>
				</button>

				<button 
					type="button"
					className="mr-3 transition-transform duration-300 transform hover:scale-125"
				>
					<img src={ iconSave } alt="Save"/>
				</button>

				<button 
					type="button"
					className="transition-transform duration-300 transform hover:scale-125"
				>
					<img src={ iconX } alt="Delete"/>
				</button>
			</div>
		</div>
	);
}