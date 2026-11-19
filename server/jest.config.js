export default {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  // the first run downloads a MongoDB binary for mongodb-memory-server
  testTimeout: 30000
};
