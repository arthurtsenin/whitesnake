module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@next/next/recommended",
  ],

  overrides: [
    {
      files: ["config/**/*.ts", "src/global-definitions.d.ts", "src/libs.d.ts"],
      rules: {
        "import/no-default-export": "off",
      },
    },

    {
      files: ["src/redux/slices/*.ts"],
      rules: {
        "no-param-reassign": "off",
        "jsx-a11y/label-has-associated-control": "off",
      },
    },
    {
      files: ["*.ts", "*.tsx"],

      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],

      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
    {
      files: ["**/*.tsx"],
      rules: {
        "react/require-default-props": "off",
        "consistent-return": "off",
      },
    },
    {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
      files: ["*.ts", "*.tsx"],
    },
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "import/extensions": [
      "off",
      "ignorePakages",
      { js: "never", mjs: "never", jsx: "never", ts: "never", tsx: "never" },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["**/*.test.{ts,tsx,js,jsx}"],
      },
    ],
    "import/prefer-default-export": "off",
    "react/react-in-jsx-scope": 0,
    indent: "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^action" },
    ],
    "no-nested-ternary": "off",
    "no-unneeded-ternary": "off",
    "react/function-component-definition": "off",
  },
};
