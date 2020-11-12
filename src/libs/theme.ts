import { createMuiTheme } from "@material-ui/core/styles";
// import { red } from "@material-ui/core/colors";

// Create a theme instance.
// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#556cd6",
//     },
//     secondary: {
//       main: "#19857b",
//     },
//     error: {
//       main: red.A400,
//     },
//     background: {
//       default: "#fff",
//     },
//   },
// });

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#09b3af",
      contrastText: "#fff",
    },
    secondary: {
      main: "#1b243f",
      contrastText: "#fff",
    },
    text: {
      primary: "#1b243f",
      secondary: "#5b6278",
    },
    action: {
      hover: "#09b3af",
    },
  },
});

export default theme;
