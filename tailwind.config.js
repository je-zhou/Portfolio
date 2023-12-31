/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: "class",
	theme: {
		extend: {
			animation: {
				wiggle: 'wheel 1.5s ease-in-out infinite',
			},
			keyframes: {
				wheel: {
					'100%': { transform: 'translateY(20px)', opacity: 0 },
				}
			},
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
				'light-background': '#F2F8FE',
			},
		},

	},
	plugins: [],
}
