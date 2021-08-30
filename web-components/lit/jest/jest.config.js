const reactJestConfig = require('@teambit/react/jest/jest.config');
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

const negativeLookahead = packagesToTransform.reduce((acc, curr) => {
  const yarnPattern = curr;
  const pnpmPattern = `.pnpm/registry.npmjs.org/${curr}.*`;
  // The new version of pnpm is not adding the registry as part of the path
  // so adding this as well to support it
  const newPnpmPattern = `.pnpm/${curr}.*`;

  if (acc) {
    return `${acc}|${yarnPattern}|${pnpmPattern}|${newPnpmPattern}`;
  }
  return `${yarnPattern}|${pnpmPattern}|${newPnpmPattern}`;
}, "");
const transformIgnorePatterns = `node_modules/(?!(${negativeLookahead})/)`;

module.exports = {
  transform: reactJestConfig.transform,
  transformIgnorePatterns: [transformIgnorePatterns],
  setupFilesAfterEnv: [require.resolve("./setupTests.js")],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      require.resolve("./assets-transformer.js"),
  },
};
