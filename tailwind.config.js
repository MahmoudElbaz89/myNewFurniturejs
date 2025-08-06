/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
       colors: {
    // Move these out of the furniture object and prefix with furniture-
    "furniture": "rgb(58, 120, 95)", // bg-furniture
    "furniture-light": "rgb(73, 152, 120)", // bg-furniture-light
    "furniture-dark": "rgb(44, 91, 72)", // bg-furniture-dark
    "furniture-green": "rgb(58, 120, 95)", // bg-furniture-green
    "furniture-greenLight": "rgb(73, 152, 120)", // bg-furniture-greenLight
    "furniture-cream": "rgb(236, 232, 224)", // bg-furniture-cream
    "furniture-warm": "rgb(238,213,196)", // bg-furniture-warm
    "furniture-foreground": "rgb(250, 250, 250)", // bg-furniture-foreground
    "furniture-white": "rgb(255, 255, 255)", // bg-furniture-white
    "furniture-wood": "rgb(61, 51, 41)", // bg-furniture-wood
    "furniture-woodDark": "rgb(46, 38, 31)", // bg-furniture-woodDark
    "furniture-bgColor": "rgb(248, 248, 246)", // bg-furniture-bgColor
    "furniture-main": "rgb(58, 120, 95)", // bg-furniture-main
    "furniture-secondary": "rgb(236, 219, 206)", // bg-furniture-secondary
    "furniture-section": "rgb(242, 240, 237)", // bg-furniture-section
    "furniture-text": "rgb(44, 38, 33)", // text-furniture-text
    "furniture-textSecondary": "rgb(149, 140, 131)", // text-furniture-textSecondary
    "furniture-greenLight": "rgb(207, 226, 216)", // bg-furniture-greenLight
    
  
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius, 0.5rem)",
        md: "calc(var(--radius, 0.5rem) - 2px)",
        sm: "calc(var(--radius, 0.5rem) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
        "slide-in": "slide-in 0.5s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
      },
      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
        "gradient-card": "var(--gradient-card)",
      },
      boxShadow: {
        furniture: "var(--shadow-furniture)",
        product: "var(--shadow-product)",
      },
      transitionTimingFunction: {
        smooth: "var(--transition-smooth, cubic-bezier(0.4, 0, 0.2, 1))",
        bounce:
          "var(--transition-bounce, cubic-bezier(0.175, 0.885, 0.32, 1.275))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
