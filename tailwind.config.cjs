/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      fontFamily: {
        martian: ["Martian Mono"] 
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(30deg)' },
          '50%': { transform: 'rotate(45deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
      }
    },
	},
	plugins: [],
}
