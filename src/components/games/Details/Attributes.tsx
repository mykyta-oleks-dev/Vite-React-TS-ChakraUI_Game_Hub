import type { GameDetails } from '@/entities/Games';
import { HStack, SimpleGrid, Text } from '@chakra-ui/react';
import AttributesBlock from './AttributesBlock';
import PlatformIcon from '@/components/platforms/PlatformIcon';
import Emoji from '../Card/Emoji';
import { FaStar } from 'react-icons/fa';

const Attributes = ({ game }: Readonly<{ game: GameDetails }>) => {
	return (
		<SimpleGrid
			gap={5}
			columns={{
				base: 1,
				sm: 2,
				md: 3,
				xl: 4,
			}}
		>
			<AttributesBlock title="Platforms">
				{game.parent_platforms.map((p) => (
					<HStack
						key={p.platform.id}
						alignItems="center"
						gap={2}
						flexShrink={0}
					>
						<PlatformIcon
							parent_platform={p.platform}
							platforms={game.platforms.map(
								(plat) => plat.platform
							)}
						/>
						<Text>{p.platform.name}</Text>
					</HStack>
				))}
			</AttributesBlock>
			<AttributesBlock title="Genres">
				{game.genres.map((g) => (
					<Text key={g.id}>{g.name}</Text>
				))}
			</AttributesBlock>
			<AttributesBlock title="Developers">
				{game.developers.map((d) => (
					<Text key={d.id}>{d.name}</Text>
				))}
			</AttributesBlock>
			<AttributesBlock title="Publishers">
				{game.publishers.map((p) => (
					<Text key={p.id}>{p.name}</Text>
				))}
			</AttributesBlock>
			<AttributesBlock title="Rating">
				<HStack
					alignItems="center"
					justifyContent="space-between"
					gap={1}
					flexShrink={0}
				>
					<HStack alignItems="center" gap={1} flexShrink={0}>
						<FaStar color="gold" />
						<Text as="span">{game.rating}</Text>
					</HStack>
					<Emoji rating_top={game.rating_top} />
				</HStack>
			</AttributesBlock>
			<AttributesBlock title="ESRB">
				{game.esrb_rating.name}
			</AttributesBlock>
		</SimpleGrid>
	);
};

export default Attributes;
