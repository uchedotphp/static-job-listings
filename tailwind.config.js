module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        // Primary
        desaturatedDarkCyan: "hsl(180, 29%, 50%)",

        // Neutral
        lightGrayishCyan: "hsl(180, 52%, 96%)", //(Background)
        lightGrayishCyanTabs: "hsl(180, 31%, 95%)", //(Filter Tablets)
        darkGrayishCyan: "hsl(180, 8%, 52%)",
        veryDarkGrayishCyan: "hsl(180, 14%, 20%)"
      }
    }
  },
  variants: {},
  plugins: []
};
