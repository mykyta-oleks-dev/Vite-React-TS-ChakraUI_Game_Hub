import useScreenshots from '@/hooks/v2/useScreenshots';
import { Box, Image, Spinner } from '@chakra-ui/react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Screenshots = ({ slug }: Readonly<{ slug: string }>) => {
	const { data, error, isPending: loading } = useScreenshots(slug);

	if (error) throw error;

	if (loading) return <Spinner size="xl" alignSelf="center" my={3} />;

	if (!data.results || data.results.length === 0) return null;

	console.log({ data });

	return (
		<Box maxW="4xl" alignSelf="center" mb={5}>
			<Carousel
				showArrows
				showStatus
				swipeable
				emulateTouch
				showThumbs={false}
				useKeyboardArrows
				infiniteLoop
				stopOnHover
				autoPlay
				interval={5000}
				transitionTime={500}
			>
				{data.results.map((img, index) => (
					<Box key={img.id} data-index={index}>
						<Image
							alt={slug}
							src={img.image}
							style={{
								width: '100%',
							}}
						/>
					</Box>
				))}
			</Carousel>
		</Box>
	);
};

export default Screenshots;
