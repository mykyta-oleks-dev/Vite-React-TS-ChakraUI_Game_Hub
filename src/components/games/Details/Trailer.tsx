import useTrailers from '@/hooks/v2/useTrailers';
import { Box, Spinner } from '@chakra-ui/react';

const Trailer = ({ slug }: Readonly<{ slug: string }>) => {
	const { data, error, isPending: loading } = useTrailers(slug);

	if (error) throw error;

	if (loading) return <Spinner size="xl" />;

	if (!data?.results?.[0]) return null;

	const trailer = data.results[0];

	return (
		<Box maxW="4xl" alignSelf="center">
			<video controls src={trailer.data.max} poster={trailer.preview} />
		</Box>
	);
};

export default Trailer;
