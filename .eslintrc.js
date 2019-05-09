module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    //
    'react/prop-types': 0,
    'object-curly-newline': 0,
    //
    'react/jsx-filename-extension': 0,
    'arrow-body-style': 0,
    'import/prefer-default-export': 0,
    'arrow-parens': 0,
    'no-console': 0,
    'import/no-named-as-default-member': 0,
  },
};
