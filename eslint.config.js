export default [
    {
        files: ['**/*.js'],
        parserOptions: { // Cambié 'lenguageOptions' a 'parserOptions'
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
        },
    }
];
