export default [
  {
    files: ['**/*.ts', '**/*.tsx'], // Chỉ định các tệp TypeScript
    languageOptions: {
      parser: '@typescript-eslint/parser', // Sử dụng parser cho TypeScript
      parserOptions: {
        project: './tsconfig.json', // Tham chiếu tệp cấu hình TypeScript
      },
    },
    plugins: ['@typescript-eslint'], // Plugin cho TypeScript
    rules: {
      'prettier/prettier': 'warn',
      '@typescript-eslint/no-unused-vars': 'off', // Tắt kiểm tra biến không sử dụng
    },
  },
];
