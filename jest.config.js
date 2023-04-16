module.exports = {
  collectCoverage: true,
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testRegex: '\\.spec\\.ts',
};
