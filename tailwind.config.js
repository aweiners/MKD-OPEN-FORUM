export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        ipad: { min: '768px', max: '1024px' }, // Define the range for iPad screens
      },
    },
  },
  plugins: [],
};