module.exports = {
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": './webpack/base.config.js',
      }
    },
  },
  "extends": "eslint-config-airbnb",
  "env": {
    "jest": true,
    "browser": true,
  },
  "parser": "babel-eslint",
}
