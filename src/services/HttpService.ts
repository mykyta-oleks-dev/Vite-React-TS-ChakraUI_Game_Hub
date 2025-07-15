import apiClient from './api-client';

class HttpService<T, R> {
	url: string;
	constructor(url: string) {
		this.url = url;
	}

	getAll(page = 1, pageSize = 10) {
		const pageParam = page > 0 ? page : 1;
		const pageSizeParam = pageSize > 0 ? pageSize : 10;

		const controller = new AbortController();
		const request = apiClient.get<R>(this.url, {
			signal: controller.signal,
			params: { page: pageParam, page_size: pageSizeParam },
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
