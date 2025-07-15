import GamesService from '@/services/GamesService';
import type { Game } from '@/services/GamesService';
import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';

const useGames = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState('');

	useEffect(() => {
		setError('');
		const { request, cancel } = GamesService.getAll();

		(async () => {
			try {
				setGames((await request).data.results);
			} catch (err: unknown) {
				if (err instanceof CanceledError) return;

				if (err instanceof Error) {
					setError(err.message);
				} else {
					setError('An unexpected error occurred');
				}
			}
		})();

		return () => {
			cancel();
		};
	}, []);

	return { games, error };
};

export default useGames;
