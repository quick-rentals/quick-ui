/** @type {import('jest').Config} */


const config = {
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'json', 'node', 'js', 'jsx'],
  verbose: true,
  // modulePathIgnorePatterns: ['', 'node_modules'],
  // roots: [__dirname + '/tests'],
};

export default config;