import merge from "lodash.merge";
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors";

// export default merge({}, defaultThemeColors, {
//   primary: "rgb(182, 67, 59)"
// });

const lightBlue = `#007acc`;
const darkBlue = `#66E0FF`;
const blueGray = `#282c35`;

export default merge({}, defaultThemeColors, {
  text: blueGray,
  primary: lightBlue,
  heading: blueGray,
  modes: {
    dark: {
      background: blueGray,
      primary: darkBlue,
      highlight: lightBlue
    }
  }
});
