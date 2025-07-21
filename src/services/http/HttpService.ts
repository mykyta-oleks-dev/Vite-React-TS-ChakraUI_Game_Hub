import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import apiClient from './api-client';

export interface Query {
	page: number;
	page_size: number;
}

class HttpService<T, R extends { results: T[] }> {
	url: string;
	constructor(url: string) {
		this.url = url;
	}

	getAll(config: AxiosRequestConfig): {
		request: Promise<AxiosResponse<R>>;
		cancel: () => void;
	};
	getAll(
		config: AxiosRequestConfig,
		signal: AbortSignal
	): Promise<AxiosResponse<R>>;
	getAll(config: AxiosRequestConfig = {}, signal?: AbortSignal) {
		const controller = new AbortController();

		if (typeof config.params.page != 'number' || config.params.page <= 0) {
			config.params.page = undefined;
		}
		if (
			typeof config.params.page_size != 'number' ||
			config.params.pageSize <= 0
		) {
			config.params.pageSize = undefined;
		}

		const request = apiClient.get<R>(this.url, {
			...config,
			signal: signal ?? controller.signal,
		});

		if (signal) return request;
		return { request, cancel: () => controller.abort() };
	}

	getById(id: number): {
		request: Promise<AxiosResponse<T>>;
		cancel: () => void;
	};
	getById(id: number, signal: AbortSignal): Promise<AxiosResponse<T>>;
	getById(id: number, signal?: AbortSignal) {
		const controller = new AbortController();
		const request = apiClient.get<T>(`${this.url}/${id}`, {
			signal: signal ?? controller.signal,
		});

		if (signal) return request;
		return { request, cancel: () => controller.abort() };
	}

	getBySlug<E extends T>(
		slug: string
	): {
		request: Promise<AxiosResponse<E>>;
		cancel: () => void;
	};
	getBySlug<E extends T>(
		slug: string,
		signal: AbortSignal
	): Promise<AxiosResponse<E>>;
	getBySlug<E extends T>(slug: string, signal?: AbortSignal) {
		const controller = new AbortController();
		const request = apiClient.get<E>(`${this.url}/${slug}`, {
			signal: signal ?? controller.signal,
		});

		if (signal) return request;
		return { request, cancel: () => controller.abort() };
	}
}

export default HttpService;
