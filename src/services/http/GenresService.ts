import HttpService from './HttpService';

export interface Genre {
	id: number;
	name: string;
	slug: string;
	games_count: number;
	image_background: string;
}

export interface GenreDetails extends Genre {
	description: string;
}

export interface GetGenresRequest {
	count: number;
	results: Genre[];
}

class GenresService extends HttpService<Genre, GetGenresRequest> {
	constructor() {
		super('/genres');
	}
}

export default new GenresService();
