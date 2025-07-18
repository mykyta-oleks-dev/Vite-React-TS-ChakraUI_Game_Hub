import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import type { Genre } from '@/services/http/GenresService';
import type { Platform } from '@/services/http/PlatformsService';

interface QueryStore {
	genre: Genre | null;
	platforms: Platform[];
	sort: string;
	search: string;
	page: number;
	page_size: number;

	setGenre(genre: Genre | null): void;
	setPlatforms(platforms: Platform[]): void;
	setSort(sort: string): void;
	setSearch(search: string): void;
	setPage(page: number): void;
}

const useQueryStore = create<QueryStore>((set) => ({
	genre: null,
	platforms: [],
	sort: '',
	search: '',
	page: 1,
	page_size: 12,

	setGenre(genre) {
		set(() => ({
			genre,
		}));
	},
	setPlatforms(platforms) {
		set(() => ({ platforms }));
	},
	setSort(sort) {
		set(() => ({
			sort,
		}));
	},
	setSearch(search) {
		set(() => ({ search }));
	},
	setPage(page) {
		set(() => ({ page }));
	},
}));

if (process.env.NODE_ENV === 'development') {
	mountStoreDevtool('Counter Store', useQueryStore);
}

export default useQueryStore;
