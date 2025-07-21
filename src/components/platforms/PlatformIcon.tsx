import type { Platform } from '@/entities/Platforms';
import { Tooltip } from '@/components/ui/tooltip';
import { getIcon } from '@/services/platform-icon';
import { Icon } from '@chakra-ui/react';

type Props = Readonly<{
	parent_platform: Platform;
	platforms?: Platform[];
}>;

const PlatformIcon = ({ parent_platform, platforms }: Props) => {
	const tooltipPlatforms: string[] = [];
	platforms?.forEach((p) => {
		if (p.slug.includes(parent_platform.slug)) {
			tooltipPlatforms.push(p.name);
		}
	});
	if (tooltipPlatforms.length == 0)
		tooltipPlatforms.push(parent_platform.name);

	return (
		<Tooltip
			key={parent_platform.id}
			content={tooltipPlatforms.join(', ')}
			openDelay={300}
			closeDelay={100}
		>
			<Icon as={getIcon(parent_platform.slug)} color="gray.500" />
		</Tooltip>
	);
};

export default PlatformIcon;
