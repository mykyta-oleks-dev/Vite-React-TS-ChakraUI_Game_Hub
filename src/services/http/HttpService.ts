import type { AxiosRequestConfig } from 'axios';
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

	getAll(config: AxiosRequestConfig = {}) {
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
			signal: controller.signal,
		});
		return { request, cancel: () => controller.abort() };
	}

	getById(id: number) {
		const controller = new AbortController();
		const request = apiClient.get<T>(`${this.url}/${id}`, {
			signal: controller.signal,
		});
		return { request, cancel: () => controller.abort() };
	}
}

export default HttpService;
