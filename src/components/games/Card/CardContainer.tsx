import { Card } from '@chakra-ui/react';

function CardContainer({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<Card.Root borderRadius={10} overflow="hidden">
			{children}
		</Card.Root>
	);
}

export default CardContainer;
