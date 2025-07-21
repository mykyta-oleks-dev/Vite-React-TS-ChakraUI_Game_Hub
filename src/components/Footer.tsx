import { Container, HStack, Icon, Link, Text } from '@chakra-ui/react';
import { SiGithub } from 'react-icons/si';

const Footer = () => {
	return (
		<Container as="footer" p={10} bg="accent" mt={10}>
			<HStack justify="space-between">
				<Text>© 2025, Mykyta Oleksiichuk</Text>
				<Link
					href="https://github.com/mykyta-oleks-dev/Vite-React-TS-ChakraUI_Game_Hub"
					colorPalette="gray"
				>
					<Icon size="md">
						<SiGithub />
					</Icon>
				</Link>
			</HStack>
		</Container>
	);
};

export default Footer;
