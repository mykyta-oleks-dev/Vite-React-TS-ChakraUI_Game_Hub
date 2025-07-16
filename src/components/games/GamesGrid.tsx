import useGames from '@/hooks/useGames';
import GameCard from './Card/GameCard';
import { SimpleGrid, Text, VStack } from '@chakra-ui/react';
import CardSkeleton from './Card/CardSkeleton';
import type { GameQuery } from '@/services/http/GamesService';
import GamesPagination from './GamesPagination';

type GamesGridProps = Readonly<{
	query: GameQuery;
	page: number;
	pageSize: number;
	onPageChange: (page: number) => void;
	onPageSizeChange: (pageSize: number) => void;
}>;

function GamesGrid({
	query,
	page,
	pageSize,
	onPageChange,
	onPageSizeChange,
}: GamesGridProps) {
	const { data, count, error, loading } = useGames(query);

	if (error) return <Text color="red.500">{error}</Text>;

	return (
		<VStack alignItems="center">
			<GamesPagination
				page={page}
				pageSize={pageSize}
				count={count}
				onPageChange={onPageChange}
				onPageSizeChange={onPageSizeChange}
			/>
			<SimpleGrid
				columns={{ base: 1, sm: 2, md: 3, '2xl': 4 }}
				gap={4}
				w="100%"
			>
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
			<GamesPagination
				page={page}
				pageSize={pageSize}
				count={count}
				onPageChange={onPageChange}
				onPageSizeChange={onPageSizeChange}
			/>
		</VStack>
	);
}

export default GamesGrid;
