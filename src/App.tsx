import { Container, Grid, GridItem } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/games/GamesGrid';

function App() {
	return (
		<Container maxW="container.xl">
			<Grid
				templateAreas={{
					base: '"nav" "main"',
					lg: '"nav nav" "aside main"',
				}}
				templateColumns={{ base: '1fr', lg: '1fr 3fr' }}
				gap={4}
			>
				<GridItem area="nav" as="header">
					<NavBar />
				</GridItem>
				<GridItem
					area="aside"
					bg="green.500"
					display={{ base: 'none', lg: 'block' }}
					as="aside"
				>
					Sidebar
				</GridItem>
				<GridItem area="main" as="main">
					<GameGrid />
				</GridItem>
			</Grid>
		</Container>
	);
}

export default App;
