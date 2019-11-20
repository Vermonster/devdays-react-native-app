module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jest/globals': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'react-native',
    'jest'
  ],
  'rules': {
    'react/prop-types': 0,
    'react/display-name': 0
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
};
