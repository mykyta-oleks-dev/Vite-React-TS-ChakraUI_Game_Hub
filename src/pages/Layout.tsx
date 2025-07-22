import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { Container, VStack } from '@chakra-ui/react';
import { Outlet } from 'react-router';

const Layout = () => {
	return (
		<VStack height="100%">
			<Container
				maxW="container.xl"
				flexGrow={1}
				as={VStack}
				gap={4}
				alignItems="stretch"
			>
				<NavBar />
				<Outlet />
			</Container>
			<Footer />
		</VStack>
	);
};

export default Layout;
