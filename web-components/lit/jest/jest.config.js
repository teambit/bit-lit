import { generateNodeModulesPattern } from '@teambit/dependencies.modules.packages-excluder';
const reactJestConfig = require('@teambit/react/jest/jest.config');

const transformIgnorePatterns = generateNodeModulesPattern(packagesToTransform);

module.exports = {
  transform: reactJestConfig.transform,
  transformIgnorePatterns: [transformIgnorePatterns],
  setupFilesAfterEnv: [require.resolve("./setupTests.js")],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      require.resolve("./assets-transformer.js"),
  },
};
