module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '960px',
			xl: '1280px'
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
