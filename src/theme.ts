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
						value: { _light: '#fbfbfb', _dark: '#252525' },
					},
				},
				fg: {
					DEFAULT: {
						value: { _light: '{colors.black}', _dark: '#e5e5e5' },
					},
				},
				accent: {
					DEFAULT: {
						value: {
							_light: '{colors.gray.100}',
							_dark: '#1a1a1a',
						},
					},
				},
				emphasis: {
					DEFAULT: {
						value: {
							_light: '{colors.gray.200}',
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
