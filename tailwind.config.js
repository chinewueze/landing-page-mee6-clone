/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray-900': 'rgb(19, 21, 31)',
        'custom-gray-800': 'rgb(29, 28, 47)',
        'custom-gray-600': 'rgb(33, 32, 54)',
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'custom-gray-900': 'rgb(19, 21, 31)',
        'custom-gray-800': 'rgb(29, 28, 47)',
        'custom-gray-600': 'rgb(33, 32, 54)',
      }),
    },
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/typography'),
  ],
}

