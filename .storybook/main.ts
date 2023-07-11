import { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: ["../src/**/*.stories.@(ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-controls",
    // "storybook-addon-themes",
    "@storybook/addon-a11y",
    // "storybook-addon-performance/register",
    "@storybook/addon-docs",
    "@storybook/addon-toolbars",
    "@storybook/addon-actions",
  ],
  async viteFinal(config) {
    const mergedConfig = mergeConfig(config, {
      build: {
        sourcemap: false, // prevent node out of memory error
      },
    });
    return mergedConfig;
  },
};

export default config;
