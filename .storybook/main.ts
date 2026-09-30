import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/react-vite",
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      tsconfigPath: "./tsconfig.app.json",

      propFilter: (prop) => {
        const fileName = prop.parent?.fileName.replace(/\\/g, "/");

        if (!fileName) return true;

        return (
          !fileName.includes("/node_modules/") ||
          fileName.includes("/node_modules/@base-ui/")
        );
      },
    },
  },
};
export default config;
