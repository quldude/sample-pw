// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import tsdoc from "eslint-plugin-tsdoc";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    ignores: ["**/*.json", "node_modules/", "dist/", ".env.*", ".gitignore"],
    files: ["**/*.ts"],
    plugins: {
      tsdoc,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json"],
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: "off",
    },
    rules: {
      curly: ["error", "all"],
      "no-underscore-dangle": "off",
      "import/prefer-default-export": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/prefer-for-of": "off",
      "@typescript-eslint/no-use-before-define": [
        "error",
        {
          functions: false,
          variables: false,
        },
      ],
      "no-use-before-define": [
        "error",
        {
          functions: false,
          variables: false,
        },
      ],
      "no-param-reassign": ["error", { props: false }],
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "function",
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "class",
          format: ["PascalCase"],
        },
        {
          selector: "interface",
          format: ["PascalCase"],
          custom: {
            regex: "^I[A-Z]",
            match: false,
          },
        },
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE"],
        },
      ],
      "tsdoc/syntax": "error",
      "no-await-in-loop": "off",
      "no-plusplus": "off",
      "no-console": "off",
    },
  },
  {
    files: ["src/**/*"],
    rules: {
      "no-restricted-imports": "off",
    },
  },
  {
    files: [
      "tests/**/*.spec.ts",
      "tests/**/globalSetup.ts",
      "tests/**/fixtures.ts",
    ],
    rules: {
      "no-empty-pattern": "off",
    },
  }
);
