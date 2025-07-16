import type { Genre, GetGenresRequest } from '@/services/http/GenresService';
import useData from './useData';
import GenresService from '@/services/http/GenresService';

const useGenres = () =>
	useData<Genre, GetGenresRequest>(GenresService, -1, -1, []);

export default useGenres;
