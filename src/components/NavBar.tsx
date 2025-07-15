import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import { ColorModeButton } from './ui/color-mode';

const NavBar = () => {
	return (
		<HStack as="nav">
			<Image src={logo} boxSize="60px" />
			<ColorModeButton marginStart="auto" />
		</HStack>
	);
};

export default NavBar;
