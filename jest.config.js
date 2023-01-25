/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  preset: 'jest-preset-preact',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.svelte$': ['svelte-jester', { preprocess: true }],
  },
  moduleFileExtensions: ['js', 'jsx', 'svelte'],
  testEnvironment: 'jsdom',
};

export default config;
