import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
// import prettierPluggin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier'

/**@type {import ('eslint').Linter.FlatConfig[] };} */
export default [
    {
        ignores: [
            'node_modules',
            'dist',
            '**/app/public',
            'public',
            '.gitignore',
        ],
    },
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2021,
            globals: globals.browser,
            // globals: { ...globals.browser, ...globals.node, ...globals.es2021, },
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        settings: { react: { version: '18.3' } },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            // prettier: prettierPluggin,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,
            ...eslintConfigPrettier.rules,
            'react/jsx-no-target-blank': 'off',
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'prefer-const': 'warn',
            // semi: ["error", "always", { omitLastInOneLineBlock: false }],
            // "comma-dangle": ["error", "never",], //висящая запятая
            // 'comma-dangle': ['error', 'always',], //висящая запятая
            // quotes: ['error', 'double'],
            quotes: ['error', 'single'],
            'react/prop-types': [0],
            // 'react/prop-type': [0,],
            // indent: ['error', 'tab',],
        },
    },
]
