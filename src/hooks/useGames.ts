import type { Game, GetGamesRequest } from '@/services/http/GamesService';
import useData from './useData';

export default useData<Game, GetGamesRequest>;
