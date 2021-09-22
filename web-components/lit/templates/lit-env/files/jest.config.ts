

export function jestConfigFile() {
  return `// Override the Jest config to ignore transpiling from specific folders
// import { negativeLookahead } from '@teambit.defender/modules/jest-utils';
// const litJestConfig = require('@teambit/web-components.lit/jest/jest.config');

// const packagesToTransform = [
//  // add packages you want jest to transpile here. E.g. @bitOrgName so that all your bit components will be transpiled in your tests
// ];

// const transformIgnorePatterns = \`node_modules/(?!(\${negativeLookahead(packagesToTransform)})/)\`;

// module.exports = {
//   transform: litJestConfig.transform,
//   transformIgnorePatterns: [transformIgnorePatterns],
// };
`;
}
