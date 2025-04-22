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
        "press-start-2p": ['"Press Start 2P"', "system-ui"],
      },
      // --- Add Custom Animation ---
      keyframes: {
        gentleWiggle: {
          "0%, 100%": { transform: "translateY(0) rotate(0)" },
          "25%": { transform: "translateY(-3px) rotate(-5deg)" }, // Slight up and left tilt
          "75%": { transform: "translateY(-3px) rotate(5deg)" }, // Slight up and right tilt
        },
        slowBounce: {
          "0%, 100%": {
            transform: "translateY(-15%)", // Less high than default bounce
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" }, // Reset for smooth loop
          "100%": { transform: "rotate(0.0deg)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-6px)" }, // Move left
          "20%, 40%, 60%, 80%": { transform: "translateX(6px)" }, // Move right
        },
      },
      animation: {
        "gentle-wiggle": "gentleWiggle 0.6s ease-in-out infinite", // name, duration, timing, iteration
        "slow-bounce": "slowBounce 1.5s infinite", // Slower duration than default
        wave: "wave 2.5s infinite", // name, duration, iteration
        shake: "shake 4s cubic-bezier(.36,.07,.19,.97) infinite", // name, duration, timing, iteration
        spin: "spin 4s linear infinite", // Uses 'spin' keyframes, 3 seconds duration, linear timing, infinite loop
      },
      // --- End Custom Animation ---
    },
  },
  plugins: [],
};
