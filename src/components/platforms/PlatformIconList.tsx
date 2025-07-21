import type { Platform } from '@/entities/Platforms';
import { HStack } from '@chakra-ui/react';
import PlatformIcon from './PlatformIcon';

type Props = Readonly<{
	parent_platforms: Platform[];
	platforms: Platform[];
}>;
const PlatformIconsList = ({ parent_platforms, platforms }: Props) => {
	return (
		<HStack gap={2} flexWrap="wrap">
			{parent_platforms.map((p) => (
				<PlatformIcon
					key={p.id}
					parent_platform={p}
					platforms={platforms}
				/>
			))}
		</HStack>
	);
};

export default PlatformIconsList;
