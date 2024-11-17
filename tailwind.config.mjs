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
				'background-dark': '#6B7280',
				'component': '#F1F5F9',
				'component-dark': '#334155',
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