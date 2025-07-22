import { Card, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import PlatformIconsList from '@/components/platforms/PlatformIconList';
import CriticScore from '../CriticScore';
import getCroppedImageUrl from '@/services/image-url';
import CardContainer from './CardContainer';
import placeholder from '@/assets/no-image-placeholder.webp';
import Emoji from './Emoji';
import { Link } from 'react-router';
import type { Game } from '@/entities/Games';

type Props = Readonly<{
	game: Game;
}>;

const GameCard = ({
	game: {
		background_image,
		name,
		slug,
		parent_platforms,
		platforms,
		rating,
		rating_top,
		metacritic,
	},
}: Props) => {
	return (
		<CardContainer>
			<Link to={`/games/${slug}`}>
				<Image
					src={
						background_image
							? getCroppedImageUrl(background_image)
							: placeholder
					}
					alt={name}
				/>
				<Card.Body display="flex" flexDirection="column">
					<HStack
						marginBlockStart={0}
						alignItems="center"
						justifyContent="space-between"
						marginBlockEnd={5}
					>
						<PlatformIconsList
							parent_platforms={
								parent_platforms?.map((p) => p.platform) ?? []
							}
							platforms={platforms?.map((p) => p.platform) ?? []}
						/>
						<CriticScore score={metacritic ?? 0} />
					</HStack>
					<Heading
						fontSize="2xl"
						fontWeight="bold"
						marginBlockEnd={2}
					>
						{name}
					</Heading>
					<HStack
						alignItems="center"
						justifyContent="space-between"
						marginBlockStart="auto"
					>
						<HStack alignItems="center" gap={1} flexShrink={0}>
							<FaStar color="gold" />
							<Text as="span">{rating}</Text>
						</HStack>
						<Emoji rating_top={rating_top} />
					</HStack>
				</Card.Body>
			</Link>
		</CardContainer>
	);
};

export default GameCard;
