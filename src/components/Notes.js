//individual note

import { MdDeleteForever } from 'react-icons/md';
const Notes = ({ id, text, date, handleDeleteNote }) => {
	return (

		<div className="note">
			<span> {text } </span>
			<div className="note-footer">
				<small> {date} </small>
				<MdDeleteForever
					className="delete-icon"
					onClick={() => handleDeleteNote(id)}
					size="1.3em"
				/>
			</div>
		</div>
	);
};

export default Notes;