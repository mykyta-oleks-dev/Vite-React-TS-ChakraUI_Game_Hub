import { Container, Grid, GridItem, Heading, HStack } from '@chakra-ui/react';
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

	const handlePageChange = (page: number) =>
		setQuery({
			...query,
			page,
		});

	const handlePageSizeChange = (pageSize: number) =>
		setQuery({
			...query,
			page_size: pageSize,
		});

	const heading = headingHelper(query);

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
					marginBottom={10}
				>
					<Heading as="h1" size="4xl">
						{heading}
					</Heading>
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
					<GamesGrid
						query={query}
						page={query.page}
						pageSize={query.page_size}
						onPageChange={handlePageChange}
						onPageSizeChange={handlePageSizeChange}
					/>
				</GridItem>
			</Grid>
		</Container>
	);
}

function headingHelper(query: GameQuery) {
	let heading = '';

	if (query.platforms.length > 0) {
		query.platforms.forEach((p, i) => {
			heading += p.name;
			if (i < query.platforms.length - 2) heading += ',';
			else if (i == query.platforms.length - 2) heading += ' and';
			heading += ' ';
		});
	}
	if (query.genre) {
		heading += query.genre.name + ' ';
	}

	heading += 'Games';

	return heading;
}

export default App;
