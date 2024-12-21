import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';

function JournalAddButton({ clearForm }) {
	return (
		<CardButton className='journal-add' onClick={clearForm}>
			<img src='/add.svg' alt='add' />
			Новое воспоминание
		</CardButton>
	);
}

export default JournalAddButton;
