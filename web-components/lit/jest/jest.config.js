const tsConfigFile = require.resolve("./tsconfig.json");

module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  globals: {
    "ts-jest": {
      tsconfig: tsConfigFile,
    },
  },
  transformIgnorePatterns: [
    "node_modules/(?!(testing-library__dom|@open-wc|lit-html|lit-element|pure-lit|lit|@lit|lit-element-state-decoupler)/)",
  ],
  setupFilesAfterEnv: [require.resolve("./setupTests.js")],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      require.resolve("./assets-transformer.js"),
  },
};
