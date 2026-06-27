/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "#0090CB",
          dark: "#005A80",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Kotauth design tokens — bound to CSS vars (RGB channels) so .dark-section can flip them
        kotauth: {
          primary: "rgb(var(--kotauth-primary) / <alpha-value>)",
          "primary-light": "rgb(var(--kotauth-primary-light) / <alpha-value>)",
          "primary-dark": "rgb(var(--kotauth-primary-dark) / <alpha-value>)",
          bg: {
            primary: "rgb(var(--kotauth-bg-primary) / <alpha-value>)",
            secondary: "rgb(var(--kotauth-bg-secondary) / <alpha-value>)",
            tertiary: "rgb(var(--kotauth-bg-tertiary) / <alpha-value>)",
            code: "rgb(var(--kotauth-bg-code) / <alpha-value>)",
          },
          surface: {
            1: "rgb(var(--kotauth-surface-1) / <alpha-value>)",
            2: "rgb(var(--kotauth-surface-2) / <alpha-value>)",
            3: "rgb(var(--kotauth-surface-3) / <alpha-value>)",
          },
          text: {
            primary: "rgb(var(--kotauth-text-primary) / <alpha-value>)",
            secondary: "rgb(var(--kotauth-text-secondary) / <alpha-value>)",
            tertiary: "rgb(var(--kotauth-text-tertiary) / <alpha-value>)",
            muted: "rgb(var(--kotauth-text-muted) / <alpha-value>)",
          },
          success: "rgb(var(--kotauth-success) / <alpha-value>)",
          warning: "rgb(var(--kotauth-warning) / <alpha-value>)",
          error: "rgb(var(--kotauth-error) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        heading: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "0",
        lg: "0",
        md: "0",
        sm: "0",
        xs: "0",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.04)",
        sm: "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
        card: "0 2px 8px 0 rgb(0 0 0 / 0.06), 0 0 0 1px rgb(0 0 0 / 0.04)",
        glow: "0 0 40px rgba(0, 119, 168, 0.12)",
        "glow-lg": "0 0 60px rgba(0, 119, 168, 0.16)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        flow: {
          "0%": { strokeDashoffset: "100" },
          "100%": { strokeDashoffset: "0" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        float: "float 10s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        flow: "flow 2s linear infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
