import useGames from '@/hooks/useGames';
import GameCard from './Card/GameCard';
import { SimpleGrid, Text } from '@chakra-ui/react';
import CardSkeleton from './Card/CardSkeleton';
import type { GameQuery } from '@/services/http/GamesService';

type GamesGridProps = Readonly<{
	query: GameQuery;
}>;

function GamesGrid({ query }: GamesGridProps) {
	const { data, error, loading } = useGames(query);
	console.log({ data });

	return (
		<SimpleGrid columns={{ base: 1, sm: 2, md: 3, '2xl': 4 }} gap={4}>
			{error && <Text color="red.500">{error}</Text>}
			{loading ? (
				[...Array(query.page_size)].map((_, index) => (
					<CardSkeleton key={index} />
				))
			) : data.length > 0 ? (
				data.map((game) => <GameCard key={game.id} game={game} />)
			) : (
				<Text>No games found</Text>
			)}
		</SimpleGrid>
	);
}

export default GamesGrid;
