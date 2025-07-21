import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { Box, Container, VStack } from '@chakra-ui/react';
import { Outlet } from 'react-router';

const Layout = () => {
	return (
		<Box>
			<Container
				maxW="container.xl"
				as={VStack}
				gap={4}
				alignItems="stretch"
			>
				<NavBar />
				<Outlet />
			</Container>
			<Footer />
		</Box>
	);
};

export default Layout;
