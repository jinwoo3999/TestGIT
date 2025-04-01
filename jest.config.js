module.exports = {
  // Indicates whether each individual test should be reported during the run
  verbose: true,

  // The root directory where Jest should scan for test files
  rootDir: '.',

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // File extensions to look for when running tests
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // Transform files with TypeScript
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  // Test file patterns to look for
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],

  // Coverage configuration
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ]
};