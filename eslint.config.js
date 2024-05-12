import defineConfig from '@anyions/shared-eslint-config'

export default defineConfig(
  {},
  {
    files: ['README.md/**/*.?([cm])[jt]s?(x)'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true
        }
      }
    },
    rules: {
      'no-redeclare': 'off',
      'no-import-assign': 'off'
    }
  }
)
