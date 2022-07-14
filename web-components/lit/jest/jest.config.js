import { generateNodeModulesPattern } from '@teambit/dependencies.modules.packages-excluder';
const reactJestConfig = require('@teambit/react/jest/jest.cjs.config');

const packagesToTransform = [
  "lit",
  "@lit",
  "testing-library__dom",
  "@open-wc",
  "lit-html",
  "lit-element",
  "pure-lit",
  "lit-element-state-decoupler",
];

const transformIgnorePatterns = generateNodeModulesPattern({packages: packagesToTransform});

module.exports = {
  transform: reactJestConfig.transform,
  transformIgnorePatterns: [transformIgnorePatterns],
  setupFilesAfterEnv: [require.resolve("./setupTests.js")],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      require.resolve("./assets-transformer.js"),
  },
};
