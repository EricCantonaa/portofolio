module.exports = {
  mode:'jit',
  content: ["./*.html", "./js/**/*.js"], // This will include any JavaScript files where Tailwind classes are used
  theme: {
    extend: {
      colors: {
        customPurple: '#6b46c1',
        customPink: '#f687b3',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [ require('@tailwindcss/forms'),       // For better form styling
    require('@tailwindcss/typography'),  // For rich text content styling
    require('@tailwindcss/aspect-ratio'), // For aspect ratio control on images and videos
  ],
}
