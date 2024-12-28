/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      container: {
      center: true,         // Centers the container automatically
      padding: '2rem',      // Adds padding to the container
      screens: {
        sm: '100%',         // Full width on small screens
        md: '768px',        // Max-width of 768px on medium screens
        lg: '1024px',       // Max-width of 1024px on large screens
        xl: '1280px',       // Max-width of 1280px on extra large screens
        xxl: '1450px',  
           
      },
    },
    colors: {
      main: 'rgb(101,18,210)',
      headerTop: '#ffffff99',
      mainBg:'#A73AFD',
    }
  },
 
  },
  plugins: [],
}