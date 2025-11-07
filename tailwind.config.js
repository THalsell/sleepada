/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'hero-navy': '#1b293a',
        'copper': '#a3512e',
        'sky-blue': '#99bac1',
        'cream': '#f7f1e6',
        'text-dark': '#222222',
        'text-light': '#f7f1e6',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        cormorant: ['var(--font-cormorant)', 'serif'],
        bodoni: ['var(--font-bodoni)', 'serif'],
      },
    },
  },
  plugins: [],
}
