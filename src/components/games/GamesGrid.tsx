import useGames from '@/hooks/v2/useGames';
import GameCard from './Card/GameCard';
import { SimpleGrid, Text, VStack } from '@chakra-ui/react';
import CardSkeleton from './Card/CardSkeleton';
import type { GameQuery } from '@/services/http/GamesService';
import GamesPagination from './GamesPagination';
import { useState } from 'react';

type GamesGridProps = Readonly<{
	query: GameQuery;
	onPageChange: (page: number) => void;
	onPageSizeChange: (pageSize: number) => void;
}>;

function GamesGrid({ query, onPageChange, onPageSizeChange }: GamesGridProps) {
	const [count, setCount] = useState(1);
	const { data, error, isPending: loading } = useGames(query, setCount);

	if (error) return <Text color="red.500">{error.message}</Text>;

	return (
		<VStack alignItems="center">
			{(data?.count || loading) && (
				<GamesPagination
					page={query.page ?? 1}
					pageSize={query.page_size}
					count={count}
					onPageChange={onPageChange}
					onPageSizeChange={onPageSizeChange}
				/>
			)}
			<SimpleGrid
				columns={{ base: 1, sm: 2, md: 3, '2xl': 4 }}
				gap={4}
				w="100%"
			>
				{loading ? (
					[...Array(query.page_size)].map((_, index) => (
						<CardSkeleton key={index} />
					))
				) : data.results && data.results.length > 0 ? (
					data.results.map((game) => (
						<GameCard key={game.id} game={game} />
					))
				) : (
					<Text>No games found</Text>
				)}
			</SimpleGrid>
			{(data?.count || loading) && (
				<GamesPagination
					page={query.page ?? 1}
					pageSize={query.page_size}
					count={count}
					onPageChange={onPageChange}
					onPageSizeChange={onPageSizeChange}
				/>
			)}
		</VStack>
	);
}

export default GamesGrid;
