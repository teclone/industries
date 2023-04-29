const { createConfig } = require('@teclone/rollup-all');
module.exports = createConfig({
  formats: ['cjs', 'es', 'iife', 'umd'],
  envs: ['uni'],
});
