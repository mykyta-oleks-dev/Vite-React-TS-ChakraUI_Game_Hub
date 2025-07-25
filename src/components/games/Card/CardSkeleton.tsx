import { Skeleton, SkeletonText, Card } from '@chakra-ui/react';
import CardContainer from './CardContainer';

const CardSkeleton = () => {
	return (
		<CardContainer>
			<Skeleton aspectRatio={6 / 4} />
			<Card.Body>
				<SkeletonText noOfLines={2} />
				<SkeletonText noOfLines={1} marginBlockStart={10} />
			</Card.Body>
		</CardContainer>
	);
};

export default CardSkeleton;
