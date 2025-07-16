import bullsEye from '@/assets/bulls-eye.webp';
import thumbsUp from '@/assets/thumbs-up.webp';
import meh from '@/assets/meh.webp';
import noEntry from '@/assets/no-entry.webp';
import { Image, type ImageProps } from '@chakra-ui/react';

const Emoji = ({ rating_top }: Readonly<{ rating_top: number }>) => (
	<Image {...emojiHelper(rating_top)} boxSize="48px" />
);

const emojiHelper = (rating_top: number): ImageProps => {
	switch (rating_top) {
		case 5:
			return { src: bullsEye, alt: 'bulls-eye' };
		case 4:
			return { src: thumbsUp, alt: 'thumbs-up' };
		case 3:
			return { src: meh, alt: 'meh' };
		case 2:
		default:
			return { src: noEntry, alt: 'no-entry' };
	}
};

export default Emoji;
