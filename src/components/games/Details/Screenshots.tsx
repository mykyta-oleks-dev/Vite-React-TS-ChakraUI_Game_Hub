import useScreenshots from '@/hooks/v2/useScreenshots';
import { Box, Image, Spinner } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Screenshots = ({ slug }: Readonly<{ slug: string }>) => {
	const { data, error, isPending: loading } = useScreenshots(slug);

	if (error) throw error;

	if (loading) return <Spinner size="xl" />;

	if (!data.results || data.results.length === 0) return null;

	console.log(data);

	const config = {
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		pauseOnFocus: true,
		pauseOnDotsHover: true,
	};

	return (
		<Box maxW="4xl" alignSelf="center" mb={5}>
			<Slider {...config}>
				{data.results.map((img) => (
					<Image key={img.id} alt={slug} src={img.image} />
				))}
			</Slider>
		</Box>
	);
};

export default Screenshots;
