import { Box, Text } from '@chakra-ui/react';
import type { ReactNode } from 'react';

const AttributesBlock = ({
	children,
	title,
}: Readonly<{
	children: ReactNode;
	title: string;
}>) => {
	return (
		<Box bg="accent" p={3} borderRadius={10}>
			<Text fontWeight="bold" color="gray.600">
				{title}
			</Text>
			{children}
		</Box>
	);
};

export default AttributesBlock;
