/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  preset: 'jest-preset-preact',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.svelte$': ['svelte-jester', { preprocess: true }],
  },
  transformIgnorePatterns: [
    // Transform some files in node_modules that are ESM-only
    '/node_modules/(?!preact|preact-render-to-string)',
  ],
  moduleFileExtensions: ['js', 'jsx', 'svelte'],
  testEnvironment: 'jsdom',
};

export default config;
