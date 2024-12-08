import SelectUser from '../SelectUser/SelectUser';
import styles from './Header.module.css';

function Header({ changedUser }) {
	const changeUser = e => {
		changedUser(e.target.value);
	};
	return (
		<>
			<img className={styles.logo} src='/logo.svg' alt='Логотип' />
			<SelectUser changeUser={changeUser} />
		</>
	);
}

export default Header;
