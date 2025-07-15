import type { Platform } from '@/services/http/GamesService';
import { HStack, Icon } from '@chakra-ui/react';
import type { IconType } from 'react-icons';
import { BsGlobe, BsNintendoSwitch } from 'react-icons/bs';
import {
	FaAndroid,
	FaApple,
	FaLinux,
	FaPlaystation,
	FaWindows,
	FaXbox,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';

type Props = Readonly<{
	platforms: Platform[];
}>;
const PlatformIconsList = ({ platforms }: Props) => {
	const icons: Record<string, IconType> = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: BsNintendoSwitch,
		android: FaAndroid,
		ios: MdPhoneIphone,
		mac: FaApple,
		linux: FaLinux,
		web: BsGlobe,
	};

	return (
		<HStack gap={2} flexWrap="wrap">
			{platforms.map((platform) => (
				<Icon
					key={platform.id}
					as={icons[platform.slug]}
					color="gray.500"
				/>
			))}
		</HStack>
	);
};

export default PlatformIconsList;
