/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        xxl:"1440px"
      },
      borderRadius: {
        circle: "50%",
      },
      colors: {
        border:'red',
        blue: "#BEE2FD",
        textColor: "rgba(2, 41, 89, 1)",
        Denim: "rgba(2, 41, 89, 1)",
        goBeck:'rgba(150, 153, 170, 1)',
        confirm:"rgba(72, 62, 255, 1)",
        grey:'rgba(150, 153, 170, 1)',
        lightGrey:'rgba(214, 217, 230, 1)',
        borderColor:'rgba(214, 217, 230, 1)',
        lightBlue:"rgba(171, 188, 255, 1)",
        purple:"#483EFF"
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '25px'],
        lg: ['20px', '28px'],
        xl: ['24px', '28px'],
      }
    },
  },
  plugins: [],
};
