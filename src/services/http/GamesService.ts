import type { Game, Movie } from '@/entities/Games';
import HttpService, { type Query } from './HttpService';
import type { Genre } from '@/entities/Genres';
import type { Platform } from '@/entities/Platforms';
import type { AxiosResponse } from 'axios';
import apiClient from './api-client';
import type { Image } from '@/entities/Image';

export interface GetGamesRequest {
	count: number;
	results: Game[];
}

export interface GameQuery extends Query {
	genre: Genre | null;
	platforms: Platform[];
	sort: string;
	search: string;
}

export interface GetMoviesRequest {
	count: number;
	results: Movie[];
}

export interface GetScreenshotsRequest {
	count: number;
	results: Image[];
}

class GamesService extends HttpService<Game, GetGamesRequest> {
	constructor() {
		super('/games');
	}

	getMovies(slug: string): {
		request: Promise<AxiosResponse<GetMoviesRequest>>;
		cancel: () => void;
	};
	getMovies(
		slug: string,
		signal: AbortSignal
	): Promise<AxiosResponse<GetMoviesRequest>>;
	getMovies(slug: string, signal?: AbortSignal) {
		const controller = new AbortController();
		const request = apiClient.get<GetMoviesRequest>(
			`${this.url}/${slug}/movies`,
			{
				signal: signal ?? controller.signal,
			}
		);

		if (signal) return request;
		return { request, cancel: () => controller.abort() };
	}

	getScreenshots(slug: string): {
		request: Promise<AxiosResponse<GetScreenshotsRequest>>;
		cancel: () => void;
	};
	getScreenshots(
		slug: string,
		signal: AbortSignal
	): Promise<AxiosResponse<GetScreenshotsRequest>>;
	getScreenshots(slug: string, signal?: AbortSignal) {
		const controller = new AbortController();
		const request = apiClient.get<GetScreenshotsRequest>(
			`${this.url}/${slug}/screenshots`,
			{
				signal: signal ?? controller.signal,
			}
		);

		if (signal) return request;
		return { request, cancel: () => controller.abort() };
	}
}

export default new GamesService();
