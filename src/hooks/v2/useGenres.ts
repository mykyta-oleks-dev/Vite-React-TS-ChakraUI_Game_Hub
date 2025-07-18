import useQueryData, { calculateTime } from './useQueryData';
import GenresService from '@/services/http/GenresService';

const useGenres = () =>
	useQueryData(
		GenresService,
		['genres'],
		{},
		false,
		undefined,
		calculateTime(0, 23, 57),
		calculateTime(0, 0, 3)
	);

export default useGenres;
