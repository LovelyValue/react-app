import cn from 'classnames';
import { useEffect, useReducer } from 'react';
import Button from '../Button/Button';
import styles from './JournalForm.module.css';
import { formReducer, INITIAL_STATE } from './JournalForm.state';

function JournalForm({ onSubmit }) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, isFormReadyToSubmit, values } = formState;

	useEffect(() => {
		let timerId;
		if (!isValid.title || !isValid.date || !isValid.post) {
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY' });
			}, 2000);
		}
		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(values);
			dispatchForm({ type: 'CLEAR' });
		}
	}, [isFormReadyToSubmit]);

	const onChange = e => {
		dispatchForm({
			type: 'SET_VALUE',
			payload: { [e.target.name]: e.target.value },
		});
	};

	const addJournalItem = e => {
		e.preventDefault();

		dispatchForm({ type: 'SUBMIT' });
	};

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			<input
				type='text'
				value={values.title}
				onChange={onChange}
				name='title'
				className={cn(styles['input-title'], {
					[styles['invalid']]: !isValid.title,
				})}
			/>
			<div className={styles['form-row']}>
				<label htmlFor='date' className={styles['form-label']}>
					<img src='/calendar.svg' alt='Иконка календаря' />
					<span>Дата</span>
				</label>
				<input
					type='date'
					name='date'
					onChange={onChange}
					value={values.date}
					id='date'
					className={cn(styles['input'], {
						[styles['invalid']]: !isValid.date,
					})}
				/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor='tag' className={styles['form-label']}>
					<img src='/folder.svg' alt='Иконка папки' />
					<span>Метки</span>
				</label>
				<input
					type='text'
					name='tag'
					onChange={onChange}
					value={values.tag}
					id='tag'
					className={styles['input']}
				/>
			</div>
			<textarea
				name='post'
				onChange={onChange}
				value={values.post}
				id=''
				cols='30'
				rows='10'
				className={cn(styles['input'], {
					[styles['invalid']]: !isValid.post,
				})}
			></textarea>
			<Button text='Сохранить' />
		</form>
	);
}

export default JournalForm;
