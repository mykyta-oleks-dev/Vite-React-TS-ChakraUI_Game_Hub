import { Grid, GridItem } from '@chakra-ui/react';

function App() {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
		>
			<GridItem area="nav" bg="blue.500">
				Navigation
			</GridItem>
			<GridItem
				area="aside"
				bg="green.500"
				display={{ base: 'none', lg: 'block' }}
			>
				Sidebar
			</GridItem>
			<GridItem area="main" bg="red.500">
				Main Content
			</GridItem>
		</Grid>
	);
}

export default App;
