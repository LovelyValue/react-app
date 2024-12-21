import Logo from '../Logo/Logo';
import SelectUser from '../SelectUser/SelectUser';

const logos = ['/logo.svg', '/vite.svg'];

function Header() {
	return (
		<>
			<Logo image={logos[0]} />
			<SelectUser />
		</>
	);
}

export default Header;
