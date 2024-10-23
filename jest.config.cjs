// jest.config.cjs
module.exports = {
  preset: 'ts-jest', 
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest', 
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy', // To mock CSS imports
    '\\.(jpg|jpeg|png|gif|svg)$': 'jest-transform-stub', // To handle image imports
  },
};
