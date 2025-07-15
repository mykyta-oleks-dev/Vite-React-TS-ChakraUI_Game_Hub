import HttpService from '@/services/http/HttpService';
import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';

const useData = <T, R extends { results: T[] }>(service: HttpService<T, R>, page = 1, pageSize = 12) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setError('');
		const { request, cancel } = service.getAll(page, pageSize);
		setLoading(true);

		(async () => {
			try {
				const data = (await request).data;
				setData(data.results);
				setLoading(false);
			} catch (err: unknown) {
				if (err instanceof CanceledError) return;

				if (err instanceof Error) {
					setError(err.message);
				} else {
					setError('An unexpected error occurred');
				}
			} finally {
				setLoading(false);
			}
		})();

		return () => {
			cancel();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { data, error, loading };
};

export default useData;
