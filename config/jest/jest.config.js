module.exports = {
  rootDir: '../../',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.(ts|tsx)?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: [
    '<rootDir>/config/jest/jest.setup.js',
    '<rootDir>/src/setupEnzyme.ts',
  ],
  moduleNameMapper: {
    '\\.(css|less|styl|scss|sass|sss)$': 'identity-obj-proxy',
    '^@/(.*)': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: '<rootDir>/coverage' }],
  ],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '**/src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coverageReporters: [
    ['text-summary', { file: 'text-summary.txt' }],
    'cobertura',
    'json-summary',
  ],
};
