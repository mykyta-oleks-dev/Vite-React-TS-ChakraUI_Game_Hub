import type { Tag } from './Tags';
import type { Company } from './Companies';
import type { Genre } from './Genres';
import type { Platform } from './Platforms';

export interface Game {
	id: number;
	name: string;
	slug: string;
	metacritic: number | null;
	rating: number;
	rating_top: number;
	background_image?: string;
	parent_platforms: { platform: Platform }[];
	platforms: { platform: Platform }[];
	genres: Genre[];
	tags: Tag[];
	esrb_rating: {
		id: number;
		name: string;
		slug: string;
	};
}

export interface GameDetails extends Game {
	name_original: string;
	description: string;
	description_raw: string;
	developers: Company[];
	publishers: Company[];
}

export interface Movie {
	id: number;
	name: string;
	preview: string;
	data: {
		[key: number | string]: string;
		max: string;
	};
}
