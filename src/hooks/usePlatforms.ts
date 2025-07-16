import PlatformsService, {
	type Platform,
	type GetPlatformsRequest,
} from '@/services/http/PlatformsService';
import useData from './useData';

const usePlatforms = () =>
	useData<Platform, GetPlatformsRequest>(PlatformsService, -1, -1, [], {});

export default usePlatforms;
