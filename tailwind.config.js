module.exports = {
  content: [
    './_site/_drafts/**/*.html',
    './_site/_includes/**/*.html',
    './_site/_layouts/**/*.html',
    './_site/_posts/*.md',
    './_site/*.md',
    './_site/*.html',
  ],
  theme: {
    theme: {
      extend: {},
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
