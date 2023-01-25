// https://babeljs.io/docs/en/config-files
// Only transform in test environment (Jest)
module.exports = (/** @type {{ env: (envName: string) => boolean; }} */ api) =>
  // https://babeljs.io/docs/en/config-files#apienv
  api.env('test')
    ? // https://jestjs.io/docs/getting-started#using-babel
      {
        presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
        plugins: [
          // Compile Preact JSX, see https://preactjs.com/guide/v10/getting-started#setting-up-jsx
          [
            '@babel/plugin-transform-react-jsx',
            { pragma: 'h', pragmaFrag: 'Fragment' },
          ],
        ],
      }
    : {};
