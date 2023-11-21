require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "@vue/eslint-config-prettier/skip-formatting",
  ],
  rules: {
    "no-unused-vars": "off",
    "vue/multi-word-component-names": "off",
    "vue/require-default-prop": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", vars: "all" },
    ],
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  env: {
    "vue/setup-compiler-macros": true,
  },
};
