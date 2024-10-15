/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			listStyleType: {
				none: 'none',
				disc: 'disc',
				decimal: 'decimal',
				square: 'square',
				roman: 'upper-roman',
			}
		},
	},
	plugins: [],
}