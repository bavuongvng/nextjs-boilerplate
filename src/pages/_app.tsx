import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { useEffect } from "react";
import theme from "../libs/theme";
import { useStore } from "../stores";
import { Provider } from "../libs/provider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialState);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
