/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        theme: {
          gray: {
            DEFAULT: "#171717",
            200: "#BBC3C9",
            500: "#989FA4",
            800: "#52616D",
            600: "#858C92",
			      900: "#3F4A53",
            100: "#363636",
            101:"#797979",
            102:"#D2DAE1",
          },
          blue: {
            900: "#132F45",
          },
          red: {
            500: "#BA0F0",
          },
          black:{
            5:"#06121B",
          },
		  bar:{
			2:'#E2E1E1'
		  },
        },

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        theme: {
          gray: {
            5: " linear-gradient(0deg, rgba(23, 23, 23, 0.05) 0%, rgba(23, 23, 23, 0.05) 100%)",
            6:"linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(180deg, rgba(3, 6, 12, 0.76) 28.64%, rgba(10, 17, 37, 0.00) 244.43%), `url(.../src/assets/hero-bg.jpeg)` lightgray 0px 0px / 100% 368.421% no-repeat",
          },
        },
      },
      fontFamily: {
        Manrope: "Manrope, sans-serif",
        Roboto: "Roboto, sans-serif",
        Inter: "Inter, sans-serif",
      },
      width: {
        theme: {
          120: "54rem",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        Md: "0px 4px 20px 0px rgba(0, 0, 0, 0.25);",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
