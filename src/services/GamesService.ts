import HttpService from './HttpService';
import apiClient from './api-client';

export interface Game {
	id: number;
	name: string;
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
