module.exports = {
  presets: [
    '@babel/preset-env', // Transpile modern JavaScript
    '@babel/preset-react', // Enable JSX support
    '@babel/preset-typescript', // Enable TypeScript support
  ],
  overrides: [
    {
      test: './src/**/*.{ts,tsx}', // Optional: to specify overrides for TypeScript files
      presets: [
        [
          '@babel/preset-env', // Targets can also be specified here
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    },
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
        },
      },
      '@babel/plugin-transform-runtime',
    ],
  ],
};
