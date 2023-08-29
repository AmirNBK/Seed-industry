/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      translate: {
        '200': '-200px',
        '250': '-150px',
        '100': '-100px',
        '150': '-50%',
        '180': '-60%',
        '140': '-80px',
        '120': '-30%',
        '350': '150%',
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
        '6': '6 6 0%',
        '7': '7 7 0%',
      },
      width: {
        '37': '37%',
        '544': '34rem'
      },
      height: {
        '700': '700px',
        '500': '30rem'
      },
      spacing: {
        '-60px': '-60px',
        '-50px': '-50px',
        '-49px': '-49px',
        '-48px': '-48px',
        '-47px': '-47px',
        '-46px': '-46px',
        '-45px': '-45px',
        '-44px': '-44px',
        '-43px': '-43px',
        '-42px': '-42px',
        '-41px': '-41px',
        '-40px': '-40px',
        '-39px': '-39px',
        '-38px': '-38px',
        '-37px': '-37px',
        '-36px': '-36px',
        '-35px': '-35px',
        '-34px': '-34px',
        '-33px': '-33px',
        '-32px': '-32px',
        '-31px': '-31px',
        '-30px': '-30px',
        '-29px': '-29px',
        '-28px': '-28px',
        '-27px': '-27px',
        '-26px': '-26px',
        '-25px': '-25px',
        '-24px': '-24px',
        '-23px': '-23px',
        '-22px': '-22px',
        '-21px': '-21px',
        '-20px': '-20px',
        '-19px': '-19px',
        '-18px': '-18px',
        '-17px': '-17px',
        '-16px': '-16px',
        '-15px': '-15px',
        '-14px': '-14px',
        '-13px': '-13px',
        '-12px': '-12px',
        '-11px': '-11px',
        '-10px': '-10px',
        '-9px': '-9px',
        '-8px': '-8px',
        '-7px': '-7px',
        '-6px': '-6px',
        '-5px': '-5px',
        '-4px': '-4px',
        '-3px': '-3px',
        '-2px': '-2px',
        '-1px': '-1px',
        '60%': '60%',
      },
      margin: {
        '-60px': '-60px',
      },
      animation: {
        'scale-up': 'transform: scale(1.1);',
      }
    },
  },
  plugins: [],
}
