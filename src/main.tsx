import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
	ChakraProvider,
	createSystem,
	defaultConfig,
	defineConfig,
} from '@chakra-ui/react';
import App from './App.tsx';

const config = defineConfig({
	theme: {
		tokens: {
			colors: {},
		},
	},
});

const system = createSystem(defaultConfig, config);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ChakraProvider value={system}>
			<App />
		</ChakraProvider>
	</StrictMode>
);
