import { Tooltip } from '@/components/ui/tooltip';
import type { Platform } from '@/services/http/PlatformsService';
import { getIcon } from '@/services/platform-icon';
import { HStack, Icon } from '@chakra-ui/react';

type Props = Readonly<{
	parent_platforms: Platform[];
	platforms: Platform[];
}>;
const PlatformIconsList = ({ parent_platforms, platforms }: Props) => {
	console.log({ parent_platforms, platforms });
	return (
		<HStack gap={2} flexWrap="wrap">
			{parent_platforms.map((p) => {
				const tooltipPlatforms: string[] = [];
				platforms.forEach((device) => {
					if (device.slug.includes(p.slug)) {
						tooltipPlatforms.push(device.name);
					}
				});
				if (tooltipPlatforms.length == 0) tooltipPlatforms.push(p.name);

				return (
					<Tooltip
						key={p.id}
						content={tooltipPlatforms.join(', ')}
						openDelay={300}
						closeDelay={100}
					>
						<Icon as={getIcon(p.slug)} color="gray.500" />
					</Tooltip>
				);
			})}
		</HStack>
	);
};

export default PlatformIconsList;
