import HttpService from './HttpService';

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
	metacritic: number | null;
	rating: number;
	rating_top: number;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	platforms: { platform: Platform }[];
}

export interface GameDetails extends Game {
	name_original: string;
	description: string;
}

export interface GetGamesRequest {
	count: number;
	results: Game[];
}

class GamesService extends HttpService<Game, GetGamesRequest> {
	constructor() {
		super('/games');
	}
}

export default new GamesService();
