import HttpService from '@/services/http/HttpService';
import { useQuery } from '@tanstack/react-query';

const useQueryData = <T, R extends { results: T[]; count: number }>(
	service: HttpService<T, R>,
	key: string[],
	params: Record<string, unknown> = {},
	showPlaceholderData = false,
	dataCallback?: (data: R) => void,
	staleTime = 120_000,
	gcTime = 180_000
) =>
	useQuery({
		queryKey:
			Object.keys(params).length > 0
				? [...key, filterParams(params)]
				: key,
		queryFn: async ({ signal }) => {
			const data = (await service.getAll({ params }, signal)).data;
			dataCallback?.(data);
			return data;
		},

		placeholderData: !showPlaceholderData ? (prev) => prev : undefined,
		staleTime,
		gcTime,
	});

const filterParams = (params: Record<string, unknown>) => {
	const filteredEntries = Object.entries(params).filter(([, value]) => {
		if (!value) {
			return false;
		}
		if (typeof value === 'string' && value.trim() === '') {
			return false;
		}
		if (Array.isArray(value) && value.length === 0) {
			return false;
		}

		return true;
	});

	return Object.fromEntries(filteredEntries);
};

export default useQueryData;

export const calculateTime = (
	days: number = 0,
	hours: number = 0,
	minutes: number = 0,
	seconds: number = 0
) => {
	let timeSec = 0;

	timeSec += days > 0 ? days * 24 * 60 * 60 : 0;
	timeSec += hours > 0 ? Math.min(hours, 24) * 60 * 60 : 0;
	timeSec += minutes > 0 ? Math.min(minutes, 60) * 60 : 0;
	timeSec += seconds > 0 ? Math.min(seconds, 60) : timeSec > 0 ? 0 : 5;

	return timeSec * 1000;
};
