export default [
    {
        files: ['**/*.js'],
        lenguageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
        },
    }
]