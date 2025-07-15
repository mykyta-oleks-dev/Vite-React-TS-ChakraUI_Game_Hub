import GamesService from '@/services/GamesService';
import type { Game } from '@/services/GamesService';
import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';

const useGames = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setError('');
		const { request, cancel } = GamesService.getAll();
		setLoading(true);

		(async () => {
			try {
				setGames((await request).data.results);
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
	}, []);

	return { games, error, loading };
};

export default useGames;
