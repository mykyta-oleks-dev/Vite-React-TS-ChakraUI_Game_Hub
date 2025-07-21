import GamesService from '@/services/http/GamesService';
import { useQuery } from '@tanstack/react-query';
import { calculateTime } from './useQueryData';

const useTrailers = (slug: string) =>
	useQuery({
		queryKey: ['games', slug, 'movies'],
		queryFn: async ({ signal }) =>
			(await GamesService.getMovies(slug, signal)).data,
		staleTime: calculateTime(3),
	});

export default useTrailers;
