import type { Genre, GetGenresRequest } from '@/services/http/GenresService';
import useData from './useData';

export default useData<Genre, GetGenresRequest>;
