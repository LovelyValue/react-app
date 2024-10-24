import { useState } from 'react';
import './Button.css';

function Button() {
	// let text = 'Сохранить';
	const [text, setText] = useState('Сохранить');
	const clicked = () => {
		setText(t => t + '!');
		console.log('Hello');
	};
	return (
		<button onClick={clicked} className='button accent'>
			{text}
		</button>
	);
}

export default Button;
