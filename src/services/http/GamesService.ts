import HttpService, { type Query } from './HttpService';
import type { Genre } from './GenresService';
import type { Platform } from './PlatformsService';

export interface Game {
	id: number;
	name: string;
	slug: string;
	metacritic: number | null;
	rating: number;
	rating_top: number;
	background_image?: string;
	parent_platforms?: { platform: Platform }[];
	platforms?: { platform: Platform }[];
}

export interface GameDetails extends Game {
	name_original: string;
	description: string;
}

export interface GetGamesRequest {
	count: number;
	results: Game[];
}

export interface GameQuery extends Query {
	genre: Genre | null;
	platforms: Platform[];
	sort: string;
	search: string;
}

class GamesService extends HttpService<Game, GetGamesRequest> {
	constructor() {
		super('/games');
	}
}

export default new GamesService();
