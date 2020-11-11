import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  googleFonts: [
    {
      name: 'Lato',
      styles: [
        '900'
      ]
    },
    {
      name: 'Open Sans',
      styles: [
        '400'
      ]
    },
  ],
  headerFontFamily: ["Lato"],
  headerWeight: 900,
  bodyFontFamily: ["Open Sans"]
});

typography.injectStyles();

export default typography;