const theme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'mobile': '576px',
      'tablet': '640px',
      'tablet-md': '840px',
      'tablet-lg': '992px',
      'laptop': '1024px',
      'desktop': '1280px',
      'desktop-1xl': '1400px',
      'desktop-2xl': '1536px',
    },
    fontSize: {
      xs: '12px',
      base: '14px',
      md: '18px'
    },
    extend: {
      fontFamily: {
        'mulish': ['Mulish', 'sans-serif']
      },
      colors: {
        ...theme.colors,
        base: '#403C3B',
        'base-white': '#CFCFCF',
        'green': '#618967',
        'light-green': '#72A479',
        'white-green': '#79B382',
        'black': '#2E2B2C',
        'gray': '#504B4A',
      },
  backgroundImage: {
    'custom-gradient': 'linear-gradient(114.93deg, #618967 5.11%, #72A479 94%)',
    'banner-gradient': 'linear-gradient(90deg, #211F20 0%, rgba(68, 64, 63, 0) 100%)',
    'banner-gradient-mobile': 'linear-gradient(90deg, #211F20 0%, rgba(68, 64, 63, 0) 130%)',
    'itemCard': 'linear-gradient(90deg, #494544 0%, #504B4A 100%)',
    'info-gradient': 'linear-gradient(270.7deg, #44403F 0.4%, #211F20 100%)',
  },
      boxShadow: {
        'cardItem': ' 0px 30px 45px rgba(43, 40, 40, 0.6)',
        'cardItemHover': '0px 5px 10px rgba(114, 163, 121, 0.7)',
        'footer': '0px 0px 70px rgba(0, 0, 0, 0.15)',
        'portfolio': '0px 40px 50px rgba(0, 0, 0, 0.4)',
      },
      content: {
        'onion-white': 'url("./features/Portfolio/images/onion.svg")',
        'onion-green': 'url("./features/Portfolio/images/onion-green.svg")',
        'vector': 'url("./features/Portfolio/images/Vector-white.svg")',
        'vector-green': 'url("./features/Portfolio/images/Vector-green.svg")',
        'chef': 'url("./features/Portfolio/images/chef.svg")',
        'chef-green': 'url("./features/Portfolio/images/chef-green.svg")',
      },
    },
  },
  plugins: [],
};

