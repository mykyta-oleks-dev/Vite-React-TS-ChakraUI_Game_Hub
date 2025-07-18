import GamesService, { type GameQuery } from '@/services/http/GamesService';
import useQueryData from './useQueryData';

const useGames = (query: GameQuery, setCount: (count: number) => void) => {
	return useQueryData(
		GamesService,
		['games'],
		{
			genres: query.genre ? query.genre.id : undefined,
			platforms:
				query.platforms.length > 0
					? query.platforms.map((platform) => platform.id).join(',')
					: undefined,
			page: query.page,
			page_size: query.page_size,
			ordering: query.sort,
			search: query.search,
		},
		true,
		({ count }) => setCount(count ?? 1)
	);
};

export default useGames;
