/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./dist/**/*.{css, js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'zendot': ['Zen Dots', 'cursive'],
        'inter': ['Inter', 'cursive']
      },
      colors: {
        "para": "#D9FFDE",
        "gradient1": "#D82B9F",
        "gradient2": "#9A0BAE",
        "section": "#102538",
        "section-item": "#1d425a",
        "outline-color": "rgb(16 37 56)"
      },
      width: {
        "400px": "400px",
        "389px": "389px",
        "274px": "274px",
        "237px": "237px",
        "226px": "226px",
        "342px": "342px"
      },
      height: {
        "74px": "74px",
        "52px": "52px",
        "44px": "44px",
        "30px": "30px",
       
      },
      fontSize: {
        "44px": "44px",
        "19px": "19px",
        "22px": "22px",
        "21px": "21px",
        "28px": "28px",
        "15px": "15px",
        "13px": "13px",
        "11px": "11px",
        "10px": "10px"
      },
      lineHeight: {
        "30px": "30px",
        "26px": "26px"
      },
      letterSpacing: {
        "xl": "0.27em"
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "neutral": "#3D4451",
          "warning": "#f97316",
          "primary": "#F1389A",
          "secondary": "#FEC664",

        }

      }
    ]
  },


}
