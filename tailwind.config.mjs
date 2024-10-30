/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					light: 'dark',
					dark: 'white',
				},
				secondary: {
					light: 'white',
					dark: 'dark',
				},
			},
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