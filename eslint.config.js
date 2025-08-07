export default [
    {
        files: ['**/*.js'],
        languageOptions: {  // Cambié 'parserOptions' a 'languageOptions'
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        rules: {
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
        },
    }
];