

export function jestConfigFile() {
  return `// Override the Jest config to ignore transpiling from specific folders
// import { generateNodeModulesPattern } from '@teambit/dependencies.modules.packages-excluder';
// const litJestConfig = require('@teambit/web-components.lit/jest/jest.config');

// const packagesToTransform = [
//  // add packages you want jest to transpile here. E.g. @bitOrgName so that all your bit components will be transpiled in your tests
// ];

// const transformIgnorePatterns = generateNodeModulesPattern({packages: packagesToTransform});;

// module.exports = {
//   transform: litJestConfig.transform,
//   transformIgnorePatterns: [transformIgnorePatterns],
// };
`;
}
