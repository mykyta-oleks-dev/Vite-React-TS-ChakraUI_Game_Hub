import { Container, Grid, GridItem, Heading, HStack } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GamesGrid from './components/games/GamesGrid';
import GenresList from './components/games/GenresList';
import type { Genre } from './services/http/GenresService';
import type { Platform } from './services/http/PlatformsService';
import PlatformSelect from './components/games/PlatformSelect';
import SortSelect from './components/games/SortSelect';
import useQueryStore from './stores/queryStore';
import { useShallow } from 'zustand/react/shallow';

function App() {
	const { platforms, genre } = useQueryStore(
		useShallow((s) => ({
			platforms: s.platforms,
			genre: s.genre,
		}))
	);

	const heading = headingHelper(platforms, genre);

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
				<GridItem
					area="main"
					as="main"
					display="flex"
					flexDirection="column"
					gap={4}
					marginBottom={10}
				>
					<Heading as="h1" size="4xl">
						{heading}
					</Heading>
					<HStack gap={4} w="100%" alignItems="end">
						<PlatformSelect />
						<SortSelect />
					</HStack>
					<GamesGrid />
				</GridItem>
			</Grid>
		</Container>
	);
}

function headingHelper(platforms: Platform[], genre: Genre | null) {
	let heading = '';

	if (platforms.length > 0) {
		platforms.forEach((p, i) => {
			heading += p.name;
			if (i < platforms.length - 2) heading += ',';
			else if (i == platforms.length - 2) heading += ' and';
			heading += ' ';
		});
	}
	if (genre) {
		heading += genre.name + ' ';
	}

	heading += 'Games';

	return heading;
}

export default App;
