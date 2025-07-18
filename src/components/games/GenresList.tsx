import useGenres from '@/hooks/v2/useGenres';
import { type Genre } from '@/services/http/GenresService';
import getCroppedImageUrl from '@/services/image-url';
import { Button, HStack, Image, List, Spinner, Text } from '@chakra-ui/react';

function GenresList({
	onGenreSelect,
	selectedGenre,
}: Readonly<{
	onGenreSelect: (genre: Genre | null) => void;
	selectedGenre: Genre | null;
}>) {
	const { data, error, isPending: loading } = useGenres();

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
			{error && <Text color="red.500">{error.message}</Text>}
			{loading ? (
				<Spinner size="xl" color="primary" />
			) : (
				<>
					{data?.results.map((genre) => (
						<List.Item key={genre.id} width="100%">
							<Button
								variant={
									selectedGenre?.id === genre.id
										? 'solid'
										: 'plain'
								}
								padding={2}
								border={0}
								width="100%"
								justifyContent="start"
								onClick={() => onGenreSelect(genre)}
								_hover={{ textDecoration: 'underline' }}
							>
								<HStack>
									<Image
										src={getCroppedImageUrl(
											genre.image_background
										)}
										alt={genre.name}
										boxSize="32px"
										objectFit="cover"
										borderRadius="lg"
									/>
									<Text
										fontWeight={
											selectedGenre?.id === genre.id
												? 'bold'
												: 'medium'
										}
									>
										{genre.name}
									</Text>
								</HStack>
							</Button>
						</List.Item>
					))}
					<List.Item key={-1} width="100%">
						{selectedGenre && (
							<Button
								variant="plain"
								padding={2}
								border={0}
								width="100%"
								justifyContent="start"
								onClick={() => onGenreSelect(null)}
								_hover={{ textDecoration: 'underline' }}
							>
								<Text fontSize="lg" color="gray.500">
									Reset Genre
								</Text>
							</Button>
						)}
					</List.Item>
				</>
			)}
		</List.Root>
	);
}

export default GenresList;
