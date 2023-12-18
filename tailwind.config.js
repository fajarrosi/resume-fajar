/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'core-background': '#F7F8FD',
      'blue-dark': '#4A4B68',
      'dealer-type11':'#FA541C',
      'dealer-type1b':'#FFF2E8',
      'dealer-type21':'#52C41A',
      'dealer-type2b':'#F6FFED',
      'dealer-type31':'#FA8C16',
      'dealer-type3b':'#FFF7E6',
      'dealer-type41':'#FAAD14',
      'dealer-type4b':'#FFFBE6',
      'dealer-type51':'#F5222D',
      'dealer-type5b':'#FFF1F0',
      'dealer-type61':'#EB2F96',
      'dealer-type6b':'#FFF0F6',
      'dealer-type71':'#13C2C2',
      'dealer-type7b':'#E6FFFB',

      'grey-light':'#8195AF',
      'grey-3':'#D4DEEC',

      'black-default':'#2E3237',
      
      'breadcrumb':'#00000073'
    },
    extend: {
      boxShadow: {
        'sm': '0px 5px 20px rgba(1, 114, 188, 0.05)',
      }
    },
  },
  plugins: [],
}
