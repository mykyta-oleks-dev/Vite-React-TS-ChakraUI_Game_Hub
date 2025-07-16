import type { Game } from '@/services/http/GamesService';
import { Card, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import PlatformIconsList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '@/services/image-url';
import CardContainer from './CardContainer';

type Props = Readonly<{
	game: Game;
}>;

const GameCard = ({ game }: Props) => {
	return (
		<CardContainer>
			<Image
				src={getCroppedImageUrl(game.background_image)}
				alt={game.name}
			/>
			<Card.Body display="flex" flexDirection="column">
				<Heading fontSize="2xl" fontWeight="bold" marginBlockEnd={5}>
					{game.name}
				</Heading>
				<HStack
					marginBlockStart="auto"
					alignItems="center"
					justifyContent="space-between"
				>
					<PlatformIconsList
						parent_platforms={game.parent_platforms.map(
							(p) => p.platform
						)}
						platforms={game.platforms.map((p) => p.platform)}
					/>
					<HStack alignItems="center" gap={1} flexShrink={0}>
						<FaStar color="gold" />
						<Text as="span">
							{game.rating} / {game.rating_top}
						</Text>
						<CriticScore score={game.metacritic ?? 0} />
					</HStack>
				</HStack>
			</Card.Body>
		</CardContainer>
	);
};

export default GameCard;
