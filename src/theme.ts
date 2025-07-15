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
						value: { _light: '#f9f9f9', _dark: '#303030' },
					},
				},
				fg: {
					DEFAULT: {
						value: { _light: '{colors.black}', _dark: '#e5e5e5' },
					},
				},
				aside: {
					DEFAULT: {
						value: {
							_light: '{colors.gray.200}',
							_dark: '#1a1a1a',
						},
					},
				},
				card: {
					DEFAULT: {
						value: {
							_light: '{colors.gray.300}',
							_dark: '#111111',
						},
					},
				},
			},
		},
	},
});

const system = createSystem(defaultConfig, config);

export default system;
