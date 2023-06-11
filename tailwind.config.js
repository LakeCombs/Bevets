/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-blue": "#D9EAEF",
				background: "#F5F5F5",
				"bright-blue": "#458ED6",
				"dark-blue": "#151E44",
				"app-white": "#FFFFFF",
				"app-orange": "#FF8A00",
				"app-orange-pale": "#FF8A0033",
				"app-dark": "#565656",
				"app-gray": "#D9D9D9",
				"text-gray": "#00000066",
				"footer-bg": "#06222D"
			},
			screens: {
				sm: { min: "640px" },
				md: { min: "768px" },
				lg: { min: "1024px" },
				xl: { min: "1280px" }
			},

			fontSize: {
				"2xl": "1.5rem",
				"3xl": "1.875rem",
				"4xl": "2.25rem",
				"5xl": "3rem",
				"6xl": "4rem"
			},

			fontFamily: {
				mont: ["Montserrat"],
				poppins: ["Poppins"],
				inter: ["Inter"]
			},
			backgroundImage: {
				hero1: "url('/public/assets/MacBook Pro 14_ - 1bg.png')",
				hero2: "url('/public/assets/MacBook Pro 14_ - 1bg2.png')",
				hero3: "url('/public/assets/MacBook Pro 14_ - 1bg3.png')",
				hero4: "url('/public/assets/MacBook Pro 14_ - 1bg4 (1).png')"
			}
		}
	},
	plugins: []
};
