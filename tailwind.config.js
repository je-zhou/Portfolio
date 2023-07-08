/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				'charade': '#252932',
				'heather': '#BFCCD7',
				'wild blue yonder': '#7F9CB7',
				'hoki': '#6782A3',
			},
		},

	},
	plugins: [],
}
