import HttpService from './HttpService';

export interface Platform {
	id: number;
	name: string;
	slug: string;
	games_count: number;
	image_background: string;
	image: string | null;
	year_start: number | null;
	year_end: number | null;
}

export interface GetPlatformsRequest {
	count: number;
	results: Platform[];
}

class PlatformsService extends HttpService<Platform, GetPlatformsRequest> {
	constructor() {
		super('/platforms');
	}
}

export default new PlatformsService();
