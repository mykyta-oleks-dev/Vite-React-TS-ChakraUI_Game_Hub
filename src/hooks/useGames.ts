import GamesService, {
	type Game,
	type GetGamesRequest,
} from '@/services/http/GamesService';
import useData from './useData';
import type { Genre } from '@/services/http/GenresService';
import type { Platform } from '@/services/http/PlatformsService';

const useGames = (
	genre: Genre | null,
	platforms: Platform[],
	page = 1,
	pageSize = 12
) =>
	useData<Game, GetGamesRequest>(
		GamesService,
		page,
		pageSize,
		[genre, platforms],
		{
			genres: genre ? genre.id : undefined,
			platforms:
				platforms.length > 0
					? platforms.map((platform) => platform.id).join(',')
					: undefined,
		}
	);

export default useGames;
