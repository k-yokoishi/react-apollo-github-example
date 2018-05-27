module.exports = {
  plugins: ['cypress'],
  rules: {
    'no-unused-expressions': 0,
    'no-unused-vars': 0
  },
  env: {
    'cypress/globals': true
  }
};
