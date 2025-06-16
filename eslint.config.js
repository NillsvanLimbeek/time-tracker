import antfu from '@antfu/eslint-config';

export default antfu(
  {
    formatters: true,
    vue: true,
    stylistic: {
      semi: true,
      quotes: 'single',
    },
  },
  {
    rules: {
      'style/arrow-parens': 'off',
      'ts/explicit-function-return-type': 'error',
      'style/operator-linebreak': 'off',
    },
  },
);
