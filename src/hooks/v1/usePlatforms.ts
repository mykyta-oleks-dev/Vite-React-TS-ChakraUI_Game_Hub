import PlatformsService, {
	type Platform,
	type GetPlatformsRequest,
} from '@/services/http/PlatformsService';
import useData from './useData';

const usePlatforms = () =>
	useData<Platform, GetPlatformsRequest>(PlatformsService, []);

export default usePlatforms;
