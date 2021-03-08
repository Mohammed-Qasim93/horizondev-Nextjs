import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "../src/ui/theme";
import Header from "../src/ui/header";
import Footer from "../src/ui/footer";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [value, setValue] = useState(0);
  const changeHandler = (e, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Header
          changeHandler={changeHandler}
          value={value}
          setValue={setValue}
        />
        <Component {...pageProps} />
        <Footer value={value} setValue={setValue} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
