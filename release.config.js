module.exports = {
  repositoryUrl: 'https://github.com/teclone/industries.git',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/github'],
    '@semantic-release/npm',
  ],
  ci: true,
};
