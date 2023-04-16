const { createConfig } = require('@teclone/rollup-all');
module.exports = createConfig({
  formats: ['cjs', 'esm', 'iife', 'umd'],
  envs: ['uni'],
});
