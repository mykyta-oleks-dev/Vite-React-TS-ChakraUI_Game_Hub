import useData from './useData';
import GenresService from '@/services/http/GenresService';

const useGenres = () => useData(GenresService, []);

export default useGenres;
