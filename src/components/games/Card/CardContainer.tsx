import { Card } from '@chakra-ui/react';

function CardContainer({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<Card.Root
			borderRadius={10}
			overflow="hidden"
			bg="emphasis"
			_hover={{
				transform: 'scale(1.03)',
			}}
			transition="transform .15s ease-in"
		>
			{children}
		</Card.Root>
	);
}

export default CardContainer;
