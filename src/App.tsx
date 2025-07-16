import { Container, Grid, GridItem, HStack } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GamesGrid from './components/games/GamesGrid';
import GenresList from './components/games/GenresList';
import { useState } from 'react';
import type { Genre } from './services/http/GenresService';
import type { Platform } from './services/http/PlatformsService';
import PlatformSelect from './components/games/PlatformSelect';
import type { GameQuery } from './services/http/GamesService';
import SortSelect from './components/games/SortSelect';

function App() {
	const [query, setQuery] = useState<GameQuery>({
		genre: null,
		platforms: [],
		sort: '',
		page: 1,
		page_size: 12,
		search: '',
	});

	const handleGenreSelect = (genre: Genre | null) =>
		setQuery({
			...query,
			genre,
		});

	const handlePlatformSelect = (platforms: Platform[]) =>
		setQuery({
			...query,
			platforms,
		});

	const handleSortSelect = (sort: string) =>
		setQuery({
			...query,
			sort,
		});

	const handleSearchChange = (search: string) =>
		setQuery({
			...query,
			search,
		});

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
					<NavBar onSearchChange={handleSearchChange} />
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
					<HStack gap={4} w="100%" alignItems="end">
						<PlatformSelect
							selectedPlatforms={query.platforms}
							onPlatformSelect={handlePlatformSelect}
						/>
						<SortSelect
							sort={query.sort}
							onSortSelect={handleSortSelect}
						/>
					</HStack>
					<GamesGrid query={query} />
				</GridItem>
			</Grid>
		</Container>
	);
}

export default App;
