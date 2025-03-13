import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

	addons: ['@storybook/addon-essentials'],

	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},

	docs: {
		autodocs: 'tag'
	},

	viteFinal: async (config) => ({
		...config
		// ...(await import('@scope/an-esm-only-package')).something
	})
};

export default config;
