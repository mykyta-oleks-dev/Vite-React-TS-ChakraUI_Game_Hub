import PlatformsService from '@/services/http/PlatformsService';
import useData from './useData';

const usePlatforms = () => useData(PlatformsService, []);

export default usePlatforms;
