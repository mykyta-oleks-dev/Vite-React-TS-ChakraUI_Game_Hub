import HttpService from '@/services/http/HttpService';
import { useQuery } from '@tanstack/react-query';

const useQueryObject = <
	E extends T,
	T,
	R extends { results: T[]; count: number },
>(
	slug: string,
	service: HttpService<T, R>,
	key: string[],
	staleTime = 120_000,
	gcTime = 180_000
) =>
	useQuery({
		queryKey: key,
		queryFn: async ({ signal }) =>
			(await service.getBySlug<E>(slug, signal)).data,

		placeholderData: (prev) => prev,
		staleTime,
		gcTime,
	});

export default useQueryObject;
