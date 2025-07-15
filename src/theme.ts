import { createSystem, defineConfig, defaultConfig } from '@chakra-ui/react';

const config = defineConfig({
	theme: {
		tokens: {
			colors: {},
		},
		semanticTokens: {
			colors: {
				bg: {
					DEFAULT: {
						value: { _light: '{colors.white}', _dark: '#141414' },
					},
				},
				fg: {
					DEFAULT: {
						value: { _light: '{colors.black}', _dark: '#e5e5e5' },
					},
				},
			},
		},
	},
});

const system = createSystem(defaultConfig, config);

export default system;
