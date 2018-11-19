module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  // required to lint *.vue files
  plugins: [ 'vue' ],
  // custom rules
  rules: {
    semi: [ 2, 'never' ],
    'no-console': 'off',
    'no-unused-vars': [ 'warn' ],
    'vue/max-attributes-per-line': 'off',
    'vue/html-quotes': [ 'warn' ],
    'vue/require-prop-types': [ 'warn' ],
    'prettier/prettier': [
      'warn',
      {
        semi: false,
        singleQuote: true,
        printWidth: 120
      }
    ]
  }
};
