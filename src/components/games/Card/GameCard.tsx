import type { Game } from '@/services/http/GamesService';
import { Card, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import PlatformIconsList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '@/services/image-url';
import CardContainer from './CardContainer';
import placeholder from '@/assets/no-image-placeholder.webp';

type Props = Readonly<{
	game: Game;
}>;

const GameCard = ({
	game: {
		background_image,
		name,
		parent_platforms,
		platforms,
		rating,
		rating_top,
		metacritic,
	},
}: Props) => {
	console.log({
		game: {
			background_image,
			name,
			parent_platforms,
			platforms,
			rating,
			rating_top,
			metacritic,
		},
	});
	return (
		<CardContainer>
			<Image
				src={
					background_image
						? getCroppedImageUrl(background_image)
						: placeholder
				}
				alt={name}
			/>
			<Card.Body display="flex" flexDirection="column">
				<Heading fontSize="2xl" fontWeight="bold" marginBlockEnd={5}>
					{name}
				</Heading>
				<HStack
					marginBlockStart="auto"
					alignItems="center"
					justifyContent="space-between"
				>
					<PlatformIconsList
						parent_platforms={
							parent_platforms?.map((p) => p.platform) ?? []
						}
						platforms={platforms?.map((p) => p.platform) ?? []}
					/>
					<HStack alignItems="center" gap={1} flexShrink={0}>
						<FaStar color="gold" />
						<Text as="span">
							{rating} / {rating_top}
						</Text>
						<CriticScore score={metacritic ?? 0} />
					</HStack>
				</HStack>
			</Card.Body>
		</CardContainer>
	);
};

export default GameCard;
