export interface Company {
	id: number;
	name: string;
	slug: string;
	games_count: number;
	image_background: string;
}

export interface CompanyDetails extends Company {
	description: string;
}
