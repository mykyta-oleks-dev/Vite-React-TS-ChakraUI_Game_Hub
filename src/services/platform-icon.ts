import type { IconType } from 'react-icons';
import { BsGlobe, BsNintendoSwitch } from 'react-icons/bs';
import {
	FaAndroid,
	FaApple,
	FaLinux,
	FaPlaystation,
	FaWindows,
	FaXbox,
	FaGamepad,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiSega, SiCommodore, SiAtari } from 'react-icons/si';

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
	sega: SiSega,
	'commodore-amiga': SiCommodore,
	atari: SiAtari,
};

const getIcon = (slug: string) => {
	const icon = icons[slug];
	if (!icon) {
		console.error({ slug });
		return FaGamepad;
	}
	return icon;
};

const isIconSet = (slug: string) => Object.keys(icons).includes(slug);

export { icons, getIcon, isIconSet };
