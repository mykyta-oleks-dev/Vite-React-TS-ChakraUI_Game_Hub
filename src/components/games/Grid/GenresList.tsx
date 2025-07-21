import useGenres from '@/hooks/v2/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import useQueryStore from '@/stores/queryStore';
import { Button, HStack, Image, List, Spinner, Text } from '@chakra-ui/react';
import { useShallow } from 'zustand/react/shallow';

function GenresList() {
	const { data, error, isPending: loading } = useGenres();
	const { genre, setGenre } = useQueryStore(
		useShallow((s) => ({
			genre: s.genre,
			setGenre: s.setGenre,
		}))
	);

	return (
		<List.Root
			listStyle="none"
			background="accent"
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
					{data?.results.map((dataGenre) => (
						<List.Item key={dataGenre.id} width="100%">
							<Button
								variant={
									genre?.id === dataGenre.id
										? 'solid'
										: 'plain'
								}
								padding={2}
								border={0}
								width="100%"
								justifyContent="start"
								onClick={() => setGenre(dataGenre)}
								_hover={{ textDecoration: 'underline' }}
							>
								<HStack>
									<Image
										src={getCroppedImageUrl(
											dataGenre.image_background
										)}
										alt={dataGenre.name}
										boxSize="32px"
										objectFit="cover"
										borderRadius="lg"
									/>
									<Text
										fontWeight={
											genre?.id === dataGenre.id
												? 'bold'
												: 'medium'
										}
									>
										{dataGenre.name}
									</Text>
								</HStack>
							</Button>
						</List.Item>
					))}
					<List.Item key={-1} width="100%">
						{genre && (
							<Button
								variant="plain"
								padding={2}
								border={0}
								width="100%"
								justifyContent="start"
								onClick={() => setGenre(null)}
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
