import { Container, Grid, GridItem } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GamesGrid from './components/games/GamesGrid';
import GenresList from './components/genres/GenresList';

function App() {
	return (
		<Container maxW="container.xl">
			<Grid
				templateAreas={{
					base: '"nav" "main"',
					lg: '"nav nav" "aside main"',
				}}
				templateColumns={{
					base: '1fr',
					lg: '1fr 3fr',
					'2xl': '200px 4fr',
				}}
				gap={4}
			>
				<GridItem area="nav" as="header">
					<NavBar />
				</GridItem>
				<GridItem
					area="aside"
					display={{ base: 'none', lg: 'block' }}
					as="aside"
				>
					<GenresList />
				</GridItem>
				<GridItem area="main" as="main">
					<GamesGrid />
				</GridItem>
			</Grid>
		</Container>
	);
}

export default App;
