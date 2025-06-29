/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "loading-full": "rgba(0,0,0,0.1)",
            },
        },
    },
    plugins: [],
};
