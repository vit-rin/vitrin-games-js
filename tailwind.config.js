/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    prefix: "tw-",
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        screens: {
            sm: "390px",
            md: "390px",
            lg: "390px",
            xl: "390px",
            "2xl": "390px",
        },
        extend: {},
    },
    plugins: [],
};
