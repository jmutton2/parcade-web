/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "blue",
			},
		},
		screens: {
			sm: "745px",
			md: "1129px",
		},
	},
	plugins: [],
};
