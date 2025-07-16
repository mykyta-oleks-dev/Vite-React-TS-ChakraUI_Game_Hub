import { Container, Grid, GridItem } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GamesGrid from './components/games/GamesGrid';
import GenresList from './components/genres/GenresList';
import { useState } from 'react';
import type { Genre } from './services/http/GenresService';
import type { Platform } from './services/http/PlatformsService';
import PlatformSelect from './components/platforms/PlatformSelect';
import type { GameQuery } from './services/http/GamesService';

function App() {
	const [query, setQuery] = useState<GameQuery>({
		genre: null,
		platforms: [],
	});

	const handleGenreSelect = (genre: Genre | null) => {
		setQuery({
			...query,
			genre,
		});
	};

	const handlePlatformSelect = (platforms: Platform[]) => {
		setQuery({
			...query,
			platforms,
		});
	};

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
					<GenresList
						onGenreSelect={handleGenreSelect}
						selectedGenre={query.genre}
					/>
				</GridItem>
				<GridItem
					area="main"
					as="main"
					display="flex"
					flexDirection="column"
					gap={4}
				>
					<PlatformSelect
						selectedPlatforms={query.platforms}
						onPlatformSelect={handlePlatformSelect}
					/>
					<GamesGrid query={query} />
				</GridItem>
			</Grid>
		</Container>
	);
}

export default App;
