import { Badge } from '@chakra-ui/react';

const CriticScore = ({ score }: Readonly<{ score: number }>) => {
	const color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red';
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
