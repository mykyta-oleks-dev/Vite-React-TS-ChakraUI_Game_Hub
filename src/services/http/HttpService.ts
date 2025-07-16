import type { AxiosRequestConfig } from 'axios';
import apiClient from './api-client';

class HttpService<T, R extends { results: T[] }> {
	url: string;
	constructor(url: string) {
		this.url = url;
	}

	getAll(page = 1, pageSize = 12, config: AxiosRequestConfig = {}) {
		const controller = new AbortController();

		const request = apiClient.get<R>(this.url, {
			...config,
			signal: controller.signal,
			params: {
				...config.params,
				page: page > 0 ? page : undefined,
				page_size: pageSize > 0 ? pageSize : undefined,
			},
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
