import GamesService, {
	type GetGamesRequest,
} from '@/services/http/GamesService';
import useQueryObject from './useQueryObject';
import { calculateTime } from './useQueryData';
import type { Game, GameDetails } from '@/entities/Games';

const useGameDetails = (slug: string) =>
	useQueryObject<GameDetails, Game, GetGamesRequest>(
		slug,
		GamesService,
		['games', slug],
		calculateTime(0, 7, 57),
		calculateTime(0, 0, 3)
	);

export default useGameDetails;
