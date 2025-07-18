import useGames from '@/hooks/v2/useGames';
import GameCard from './Card/GameCard';
import { SimpleGrid, Text, VStack } from '@chakra-ui/react';
import CardSkeleton from './Card/CardSkeleton';
import GamesPagination from './GamesPagination';
import { useState } from 'react';
import useQueryStore from '@/stores/queryStore';

function GamesGrid() {
	const [count, setCount] = useState(1);
	const query = useQueryStore();
	const { data, error, isPending: loading } = useGames(query, setCount);

	if (error) return <Text color="red.500">{error.message}</Text>;

	return (
		<VStack alignItems="center">
			{(data?.count || loading) && <GamesPagination count={count} />}
			<SimpleGrid
				columns={{ base: 1, sm: 2, md: 3, '2xl': 4 }}
				gap={4}
				w="100%"
			>
				{loading ? (
					[...Array(query.page_size)].map((_, index) => (
						<CardSkeleton key={'card-skeleton-' + index} />
					))
				) : data.results && data.results.length > 0 ? (
					data.results.map((game) => (
						<GameCard key={game.id} game={game} />
					))
				) : (
					<Text>No games found</Text>
				)}
			</SimpleGrid>
			{(data?.count || loading) && <GamesPagination count={count} />}
		</VStack>
	);
}

export default GamesGrid;
