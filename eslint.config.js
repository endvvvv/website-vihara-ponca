// eslint.config.js
import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'
import globals from 'globals'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  { ignores: ['dist/', 'node_modules/', '.netlify/', 'coverage/'] },

  // SFC + TS
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: { vue, '@typescript-eslint': ts },
    rules: {
      ...js.configs.recommended.rules,
      ...vue.configs['vue3-recommended'].rules,
      ...ts.configs.recommended.rules,
      'vue/multi-word-component-names': 'off',
    },
    linterOptions: { reportUnusedDisableDirectives: true },
  },

  // Configuration file Node
  {
    files: [
      'vite.config.ts',
      'postcss.config.cjs',
      'tailwind.config.js',
      'eslint.config.js',
    ],
    languageOptions: {
      parser: tsParser,
      globals: { ...globals.node, ...globals.es2021 },
      sourceType: 'module',
    },
  },

  eslintConfigPrettier,
]
