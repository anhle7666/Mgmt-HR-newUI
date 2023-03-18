module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    plugins: [require("daisyui"), require("@tailwindcss/forms"), require("tw-elements/dist/plugin")],
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "luxury",
    },
};
