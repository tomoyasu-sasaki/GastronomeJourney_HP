import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B35", // ブランドカラー 
        secondary: "#36B5B0", // 補完色
        accent: "#FFCF56", // 強調色
        background: {
          DEFAULT: "#FFFFFF",
          light: "#F5F5F5",
        },
        text: {
          DEFAULT: "#333333",
          dark: "#000000",
        },
      },
      fontFamily: {
        'noto-sans': ['var(--font-noto-sans-jp)', 'sans-serif'],
        'poppins': ['var(--font-poppins)', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333333',
            a: {
              color: '#FF6B35',
              '&:hover': {
                color: '#e05a2b',
              },
            },
            h1: {
              color: '#333333',
            },
            h2: {
              color: '#333333',
            },
            h3: {
              color: '#333333',
            },
            h4: {
              color: '#333333',
            },
            h5: {
              color: '#333333',
            },
            h6: {
              color: '#333333',
            },
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
}; 