module.exports = {
  content: [
    './source/_drafts/**/*.html',
    './source/_includes/**/*.html',
    './source/_layouts/**/*.html',
    './source/_posts/*.md',
    './source/*.md',
    './source/*.html',
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
