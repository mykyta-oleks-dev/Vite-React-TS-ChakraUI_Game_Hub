import useGenres from '@/hooks/useGenres';
import GenresService from '@/services/http/GenresService';
import getCroppedImageUrl from '@/services/image-url';
import { HStack, Image, List, Spinner } from '@chakra-ui/react';

function GenresList() {
	const { data, error, loading } = useGenres(GenresService, -1, -1);
	console.log({ data });

	return (
		<List.Root
			listStyle="none"
			background="aside"
			borderRadius={10}
			padding={4}
			minHeight={200}
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems={loading ? 'center' : 'start'}
			gap={2}
		>
			{error && <p>{error}</p>}
			{loading ? (
				<Spinner size="xl" color="primary" />
			) : (
				data.map((genre) => (
					<List.Item key={genre.id} padding={2}>
						<HStack>
							<Image
								src={getCroppedImageUrl(genre.image_background)}
								alt={genre.name}
								boxSize="32px"
								objectFit="cover"
								borderRadius="lg"
							/>
							<p>{genre.name}</p>
						</HStack>
					</List.Item>
				))
			)}
		</List.Root>
	);
}

export default GenresList;
