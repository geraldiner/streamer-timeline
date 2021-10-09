const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				blue: {
					DEFAULT: "#0000FF",
				},
			},
		},
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
