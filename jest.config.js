// jest.config.js
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  globals: {
    "__DEV__": true,
    "ts-jest": {
      "__DEV__": true,
      transformerConfig: {
        transformIgnorePatterns: [
          "<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)",
          "jest-runner",
        ],
      },
    },
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.maestro/",
    "@react-native",
  ],
  testEnvironment: "react-native",
};
