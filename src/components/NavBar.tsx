import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import { ColorModeButton } from './ui/color-mode';
import SearchInput from './games/SearchInput';
import { Link } from 'react-router';

const NavBar = () => {
	return (
		<HStack as="nav">
			<Link to="/">
				<Image src={logo} boxSize="60px" />
			</Link>
			<SearchInput />
			<ColorModeButton marginStart="auto" />
		</HStack>
	);
};

export default NavBar;
