module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['polaris'],
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
    ecmaVersion: 11,
    sourceType: "module",
    ecmaFeatures: {
      "jsx": true
    }
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    },
    "import/extensions": [".ts", ".tsx", ".js", ".jsx"],
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
  plugins: ['react-refresh'],
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/jsx-props-no-spreading": 0,
    'react-refresh/only-export-components': [
      1,
      {
        allowConstantExport: true
      },
    ],
    "@typescript-eslint/no-non-null-assertion": 0,
    "import/no-unresolved": [
      2,
      {
        ignore: [
          ".",
        ],
      },
    ],
  },
}