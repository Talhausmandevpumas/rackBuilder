/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   './templates/**/*.html', // Adjust paths based on your project structure
    './assets/**/*.{js,jsx,ts,tsx,scss}', // Your SCSS files if necessary
    ],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: [
    './templates/**/*.html', 
    './assets/js/**/*.js',
    './components/**/*.html',
    './layouts/**/*.html'
  ],
}

