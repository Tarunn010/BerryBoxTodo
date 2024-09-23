module.exports = {
  testEnvironment: 'jest-environment-jsdom', // Ensure this is set
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
};
