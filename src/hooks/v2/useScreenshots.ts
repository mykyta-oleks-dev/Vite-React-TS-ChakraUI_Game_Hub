import GamesService from '@/services/http/GamesService';
import { useQuery } from '@tanstack/react-query';
import { calculateTime } from './useQueryData';

const useScreenshots = (slug: string) =>
	useQuery({
		queryKey: ['games', slug, 'screenshots'],
		queryFn: async ({ signal }) =>
			(await GamesService.getScreenshots(slug, signal)).data,
		staleTime: calculateTime(3),
	});

export default useScreenshots;
