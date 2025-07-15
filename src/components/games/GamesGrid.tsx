import useGames from '@/hooks/useGames';
import GameCard from './Card/GameCard';
import { SimpleGrid, Text } from '@chakra-ui/react';
import CardSkeleton from './Card/CardSkeleton';
import GamesService from '@/services/http/GamesService';

function GamesGrid() {
	const { data, error, loading } = useGames(GamesService);

	return (
		<SimpleGrid columns={{ base: 1, sm: 2, md: 3, '2xl': 4 }} gap={4}>
			{error && <Text color="red.500">{error}</Text>}
			{loading
				? [...Array(6)].map((skeleton) => (
						<CardSkeleton key={skeleton} />
					))
				: data.map((game) => <GameCard key={game.id} game={game} />)}
		</SimpleGrid>
	);
}

export default GamesGrid;
