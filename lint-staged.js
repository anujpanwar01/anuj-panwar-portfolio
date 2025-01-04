module.exports = {
    // Format and lint JavaScript/TypeScript files
    '**/*.(js|ts|jsx|tsx)': ['prettier --write', 'eslint --fix'],
    // Format other file types
    '**/*.(md|json|yml|yaml|css|scss|less)': ['prettier --write'],
}
