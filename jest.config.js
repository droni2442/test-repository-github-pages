// jest.config.js
module.exports = {
    setupFilesAfterEnv: ['./src/jest.setup.js'],

    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // The test environment that will be used for testing (e.g., 'node' or 'jsdom')
    testEnvironment: 'jsdom',

    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,

    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',

    // An array of regexp pattern strings that are matched against all test paths
    testPathIgnorePatterns: ['/node_modules/'],

    // A map from regular expressions to paths to transformers
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
};
