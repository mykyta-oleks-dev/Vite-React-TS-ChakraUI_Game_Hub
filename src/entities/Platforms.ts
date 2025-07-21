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
