import { Badge } from '@chakra-ui/react';

const colorSelector = (score: number) => {
	if (score > 75) return 'green';
	if (score > 60) return 'yellow';
	if (score > 0) return 'red';
	return 'gray';
};

const CriticScore = ({ score }: Readonly<{ score: number }>) => {
	const color = colorSelector(score);
	return (
		<Badge
			colorPalette={color}
			fontSize="16px"
			padding={1}
			borderRadius={5}
		>
			{score}
		</Badge>
	);
};

export default CriticScore;
