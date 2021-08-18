// const reactJestConfig = require("@teambit/react/jest/jest.config");
const tsConfigFile = require.resolve("./tsconfig.json");

module.exports = {
  // preset: "react-native",
  // transformIgnorePatterns: [
  //   "<rootDir>/node_modules/(?!(@react-native|react-native)/).*/",
  // ],
  // transform: {
  //   "^.+\\.(js|jsx|ts|tsx)$":
  //     "<rootDir>/node_modules/react-native/jest/preprocessor.js",
  // },
  // setupFilesAfterEnv: [require.resolve("./setupTests.js")],
  // moduleNameMapper: {
  //   "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
  //     require.resolve("./assets-transformer.js"),
  // },
  // preset: require.resolve("ts-jest/presets/js-with-babel"),
  // preset: require.resolve("ts-jest"),
  // preset: "ts-jest",
  // preset: "ts-jest/presets/default",
  preset: "ts-jest/presets/js-with-ts",
  // preset: require.resolve("ts-jest/presets/default"),
  globals: {
    "ts-jest": {
      tsconfig: tsConfigFile,
    },
  },
  // transform: reactJestConfig.transform,
  // testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$",
  transformIgnorePatterns: [
    "node_modules/(?!(testing-library__dom|@open-wc|lit-html|lit-element|pure-lit|lit|@lit|lit-element-state-decoupler)/)",
  ],
  // transformIgnorePatterns: [
  //   "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
  //   "^.+\\.module\\.(css|sass|scss)$",
  // ],
  setupFilesAfterEnv: [require.resolve("./setupTests.js")],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      require.resolve("./assets-transformer.js"),
  },
};
