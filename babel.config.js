module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['styled-components', { ssr: true, displayName: true }],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    ['@babel/plugin-proposal-optional-chaining'],
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: './src/assets',
            rootPathPrefix: '#assets/',
          },
          {
            rootPathSuffix: './src/components',
            rootPathPrefix: '#components/',
          },
          {
            rootPathSuffix: './src/pages',
            rootPathPrefix: '#pages/',
          },
          {
            rootPathSuffix: './src/hooks',
            rootPathPrefix: '#hooks/',
          },
          {
            rootPathSuffix: './src/store',
            rootPathPrefix: '#store/',
          },
          {
            rootPathSuffix: './src/data',
            rootPathPrefix: '#data/',
          },
          {
            rootPathSuffix: './src',
            rootPathPrefix: '#/',
          },
        ],
      },
    ],
  ],
};
