import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', { sourceMaps: 'inline' }],
  },
  moduleNameMapper: {
    '^flux-classifyasklngakjwegnkjw$': '<rootDir>/src/index.ts',
    '^flux-classifyasklngakjwegnkjw/_shims/auto/(.*)$': '<rootDir>/src/_shims/auto/$1-node',
    '^flux-classifyasklngakjwegnkjw/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/ecosystem-tests/',
    '<rootDir>/dist/',
    '<rootDir>/deno/',
    '<rootDir>/deno_tests/',
  ],
  testPathIgnorePatterns: ['scripts'],
};

export default config;
