import js from "@eslint/js";
import eslintPluginVue from "eslint-plugin-vue";
import ts from "typescript-eslint";
import skipFormattingConfig from "@vue/eslint-config-prettier/skip-formatting";

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  ...eslintPluginVue.configs["flat/recommended"],
  skipFormattingConfig,
  {
    rules: {
      "no-unused-vars": "off",
      "vue/multi-word-component-names": "off",
      "vue/require-default-prop": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", vars: "all" },
      ],
    },
    files: ["*.vue", "**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
        globals: { "vue/setup-compiler-macros": true },
      },
    },
  },
);
