module.exports = {
  errorOnDeprecated: true,
  globals: {
    'ts-jest': {
      tsConfigFile: './config/tsconfig.test.json',
    },
  },
  moduleFileExtensions: [
    'js', 'jsx', 'json', 'ts', 'tsx',
  ],
  rootDir: '../',
  testMatch: [
    '<rootDir>/test/**/*.ts',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
