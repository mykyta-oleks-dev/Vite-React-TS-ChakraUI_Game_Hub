import type { Platform } from '@/entities/Platforms';
import HttpService from './HttpService';

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
