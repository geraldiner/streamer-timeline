const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			blue: {
				DEFAULT: "#0000FF",
			},
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/forms")({
			strategy: "class",
		}),
	],
};
