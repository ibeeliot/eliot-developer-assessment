module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 6,
      sourceType: module,
      ecmaFeatures: {
        jsx: true
      }
  },
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    'ecmaFeatures': {
        'jsx': true,
        'modules': true
    },
    'env': {
        'node': true
    },
  };