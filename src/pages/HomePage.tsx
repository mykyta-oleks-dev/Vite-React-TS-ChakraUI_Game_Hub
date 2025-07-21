import { Grid, GridItem, Heading, HStack } from '@chakra-ui/react';
import { useShallow } from 'zustand/react/shallow';
import GamesGrid from '../components/games/Grid/GamesGrid';
import GenresList from '../components/games/Grid/GenresList';
import PlatformSelect from '../components/games/Grid/PlatformSelect';
import SortSelect from '../components/games/Grid/SortSelect';
import useQueryStore from '../stores/queryStore';
import type { Platform } from '@/entities/Platforms';
import type { Genre } from '@/entities/Genres';

function HomePage() {
	const { platforms, genre } = useQueryStore(
		useShallow((s) => ({
			platforms: s.platforms,
			genre: s.genre,
		}))
	);

	const heading = headingHelper(platforms, genre);

	return (
		<Grid
			templateAreas={{
				base: '"main"',
				lg: '"aside main"',
			}}
			templateColumns={{
				base: '1fr',
				lg: '1fr 3fr',
				'2xl': '200px 4fr',
			}}
			gap={4}
		>
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

export default HomePage;
