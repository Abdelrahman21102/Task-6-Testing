module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/src/**/*.test.jsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: { '\\.(css)$': '<rootDir>/jest.styleMock.cjs' }
};
