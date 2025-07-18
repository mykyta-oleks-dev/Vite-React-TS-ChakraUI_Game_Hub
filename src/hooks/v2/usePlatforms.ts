import PlatformsService from '@/services/http/PlatformsService';
import useQueryData, { calculateTime } from './useQueryData';

const usePlatforms = () =>
	useQueryData(
		PlatformsService,
		['platforms'],
		{},
		false,
		undefined,
		calculateTime(0, 23, 57),
		calculateTime(0, 0, 3)
	);

export default usePlatforms;
