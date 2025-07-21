import type { Genre } from '@/entities/Genres';
import HttpService from './HttpService';

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
