/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  reporters: [
    "default",
    ["jest-junit", { suiteNameTemplate: "{filename}" }],
  ],
  testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/", "<rootDir>/gradingOut/", "<rootDir>/check/"],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,js,mjs,tsx,jsx,mts}'],
  coveragePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/", "<rootDir>/tests/", "<rootDir>/gradingOut/"],
  modulePathIgnorePatterns: ["<rootDir>/gradingOut/"]
};