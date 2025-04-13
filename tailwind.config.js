/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "winky-rough": ["Winky Rough"],
        parisienne: ["Parisienne", "cursive"],
        sacramento: ["Sacramento", "cursive"],
        satisfy: ["Satisfy", "cursive"],
        "dancing-script": ["Dancing Script", "cursive"],
        "press-start-2p": ["Press Start 2P", "system-ui"],
      },
    },
  },
  plugins: [],
};
