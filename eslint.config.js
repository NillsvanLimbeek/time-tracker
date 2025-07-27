import antfu from '@antfu/eslint-config';

export default antfu(
  {
    formatters: true,
    vue: true,
    stylistic: {
      semi: true,
    },
  },
  {
    rules: {
      'style/arrow-parens': 'error',
      'ts/explicit-function-return-type': 'error',
      'style/operator-linebreak': 'off',
      'style/brace-style': 'off',
      'vue/max-attributes-per-line': ['error', { singleline: { max: 1 } }],
    },
  },
);
