// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  extends: [
    'airbnb-base',
  ],
  // required to lint *.vue files
  plugins: [
    'html',
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 缩进为4个空格
// 'indent': ["error", 4],
    'no-unused-vars': ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": true }],
    'linebreak-style': 'off',
    'no-param-reassign': 'off',
    'no-empty': 'off',
    'no-trailing-spaces': 'off',
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    getApp: true,
    getPage: true
  }
}
