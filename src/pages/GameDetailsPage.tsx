import CriticScore from '@/components/games/CriticScore';
import Attributes from '@/components/games/Details/Attributes';
import ExpandableText from '@/components/games/Details/ExpandableText';
import Screenshots from '@/components/games/Details/Screenshots';
import Trailer from '@/components/games/Details/Trailer';
import useGameDetails from '@/hooks/v2/useGameDetails';
import { Box, Heading, HStack, Spinner, Tag, VStack } from '@chakra-ui/react';
import { useParams } from 'react-router';

const GameDetailsPage = () => {
	const params = useParams();
	const { data, error, isPending: loading } = useGameDetails(params.slug!);

	if (error) throw error;

	if (!data && loading) return <Spinner size="xl" />;

	console.log(data);

	const description_raw = data.description_raw;
	const spanishStart = description_raw.indexOf('Español');
	const en_description = description_raw.slice(0, spanishStart);
	const es_description =
		spanishStart > -1
			? description_raw.slice(spanishStart + 'Español'.length)
			: '';

	return (
		<VStack gap={4} alignItems="stretch">
			<Heading size="4xl" alignSelf="center">
				<HStack alignItems="center" gap={2} flexShrink={0}>
					{data.name}
					<CriticScore score={data.metacritic ?? 0} />
				</HStack>
			</Heading>
			<Screenshots slug={data.slug} />
			<HStack gap={1} wrap="wrap">
				{data.tags.map((t) => (
					<Tag.Root size="lg" key={t.id}>
						<Tag.Label>{t.name}</Tag.Label>
					</Tag.Root>
				))}
			</HStack>
			<Heading>Description:</Heading>
			<HStack gap={5}>
				<Box flexGrow={1}>
					{es_description && <Heading>English</Heading>}
					<ExpandableText>{en_description}</ExpandableText>
				</Box>
				{es_description && (
					<Box flexGrow={1}>
						<Heading>Español</Heading>
						<ExpandableText>{es_description}</ExpandableText>
					</Box>
				)}
			</HStack>
			<Attributes game={data} />
			<Trailer slug={data.slug} />
		</VStack>
	);
};

export default GameDetailsPage;
