module.exports = {
  extends: "airbnb",
  rules: {
    "react/jsx-filename-extension": "off",
    "react/prefer-stateless-function": "off",
    "react/prop-types": "off", // TODO: enable it rule
    "jsx-a11y/anchor-is-valid": "off", // TODO: enable it rule
    "comma-dangle": "off"
  },
  globals: {
    document: true,
    describe: true,
    it: true,
    expect: true
  }
};
