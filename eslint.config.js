import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

const typeCheckedRules = tseslint.configs.strictTypeChecked.map((config) => ({
  ...config,
  files: ["**/*.{ts,tsx}"],
}));

export default [
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**"],
  },
  js.configs.recommended,
  ...typeCheckedRules,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
    },
  },
  ...astro.configs["flat/recommended"],
  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: "./tsconfig.json",
        extraFileExtensions: [".astro"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "astro/no-set-html-directive": "error",
    },
  },
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.flatConfigs.recommended.rules,
    },
  },
];
