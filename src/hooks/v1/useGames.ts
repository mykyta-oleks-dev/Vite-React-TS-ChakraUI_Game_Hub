import GamesService, { type GameQuery } from '@/services/http/GamesService';
import useData from './useData';

const useGames = (query: GameQuery) =>
	useData(GamesService, [query], {
		genres: query.genre ? query.genre.id : undefined,
		platforms:
			query.platforms.length > 0
				? query.platforms.map((platform) => platform.id).join(',')
				: undefined,
		page: query.page,
		page_size: query.page_size,
		ordering: query.sort,
		search: query.search,
	});

export default useGames;
