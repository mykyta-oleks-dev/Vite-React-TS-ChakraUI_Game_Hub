import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import { ColorModeButton } from './ui/color-mode';
import SearchInput from './games/SearchInput';

const NavBar = ({
	onSearchChange,
}: Readonly<{
	onSearchChange: (search: string) => void;
}>) => {
	return (
		<HStack as="nav">
			<Image src={logo} boxSize="60px" />
			<SearchInput onSearchChange={onSearchChange} />
			<ColorModeButton marginStart="auto" />
		</HStack>
	);
};

export default NavBar;
