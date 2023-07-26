// Regular expressions to map module paths
// ^@path/: The caret (^) matches the start of the module path
// (.*): The parentheses () capture any characters after @path/ and save them as a group. The .* matches any sequence of characters.
// $: The dollar sign marks the end of the module path. This ensures that the regular expression matches the entire module path.
// At the end of our path we place `$1`...this represents the captured group from the regular expression. 
// The value of `$1` will be replaced with the characters captured by (.*).

module.exports = {
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@constants/(.*)$': '<rootDir>/constants/$1',
    '^@data/(.*)$': '<rootDir>/data/$1',
    '^@hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@utils/(.*)$': '<rootDir>/utils/$1',
    '^@styles/(.*)$': '<rootDir>/styles/$1',
    '^node-fetch$': 'node-fetch/src/index.js',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/babel.config.test.js'], 
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/babel.config.test.js',
  },
};
