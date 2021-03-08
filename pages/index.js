import React, { useEffect } from "react";
import Head from "next/head";
import WhyUs from "../src/ui/whyUs";
import WorkStages from "../src/ui/workStages";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../src/ui/theme";
import {
  Button,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

import { motion } from "framer-motion";
import {
  buttonAnim,
  ParentAnim,
  titleAnim,
  subTitleAnim,
} from "../src/Animation";
import Typical from "react-typical";
// import ScrollTop from "../src/ui/scrollTop";
import Link from "../src/Link";

const useStyles = makeStyles({
  mainGridContainer: {
    height: "43em",
    overFlow: "hidden",
  },
  gridContainer: {
    height: "100%",
    alignItems: "center",
    overFlow: "hidden",
  },

  contactButton: {
    display: "block",
    borderRadius: 0,
    ...theme.tab,
    color: theme.palette.common.light,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButton: {
    display: "inline-block",
    borderRadius: 0,
    ...theme.tab,
    color: theme.palette.common.extraDarkBlue,
    backgroundColor: theme.palette.common.extraLightBlue,
  },
  typography: {
    ...theme.tab,
    color: theme.palette.common.dark,
    marginBottom: ".2998em",
    overFlow: "hidden",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.95rem",
      fontWeight: "600",
    },
  },
  typeWritting: {
    color: theme.palette.common.dark,
    ...theme.tab,
    fontSize: "2rem",
    overFlow: "hidden",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.8rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      fontWeight: "600",
    },
  },

  typoContainer: {
    position: "relative",
    overflow: "hidden",
    marginBottom: "4em",
  },
  hero: {
    height: "30em",
    [theme.breakpoints.down("md")]: {
      height: "19em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "15em",
    },
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      opacity: ".05",
      zIndex: -1,
      width: "20em",
      height: "20em",
    },
  },
  divider: {
    backgroundColor: theme.palette.dividerColor,
  },
  buttons: {
    overFlow: "hidden",
    display: "block",
  },
});

const Home = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();
  return (
    <motion.div>
      <Head>
        <title key='title'>اهلا بك في موقعنا | الافق للتطوير</title>
        <meta
          property='og:title'
          key='og:title'
          content='اهلا بك في مدخلك الى التصاميم السريعه والحديثه | الرئيسية'
        />
      </Head>
      <Grid
        container
        component={motion.div}
        variants={ParentAnim}
        initial='hidden'
        animate='show'
        className={classes.mainGridContainer}>
        <Grid
          variants={ParentAnim}
          initial='hidden'
          animate='show'
          component={motion.div}
          container
          justify={matchesXs ? "center" : "space-around"}
          className={classes.gridContainer}>
          <Grid component={motion.div} item>
            <Grid
              component={motion.div}
              container
              direction='column'
              alignItems='flex-start'
              justify='center'>
              <Grid
                item
                component={motion.div}
                variants={ParentAnim}
                initial='hidden'
                animate='show'
                className={classes.typoContainer}>
                <Typography
                  component={motion.h2}
                  className={classes.typography}
                  variants={titleAnim}
                  initial='hidden'
                  animate='show'
                  variant='h2'>
                  مرحباً بك في الأفق للتطوير
                </Typography>
                <Typography
                  component={motion.p}
                  variants={subTitleAnim}
                  initial='hidden'
                  animate='show'>
                  <Typical
                    className={classes.typeWritting}
                    loop={Infinity}
                    wrapper={motion.span}
                    variants={titleAnim}
                    initial='hidden'
                    animate='show'
                    steps={[
                      "حيث كل أحلامك تصبح حقيقة...",
                      2500,
                      "تواصل معنا لا تتردد.",
                      2500,
                    ]}
                  />
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={1}>
                  <Grid
                    item
                    component={motion.div}
                    variants={buttonAnim}
                    initial='hidden'
                    animate='show'>
                    <Button
                      component={Link}
                      href='/contact'
                      variant='contained'
                      className={classes.contactButton}
                      size='large'
                      onClick={() => setValue(2)}>
                      اتصل بنا
                    </Button>
                  </Grid>
                  <Grid
                    item
                    component={motion.div}
                    variants={buttonAnim}
                    initial='hidden'
                    animate='show'>
                    <Button
                      variant='outlined'
                      component={Link}
                      href='/contact'
                      className={classes.learnButton}
                      size='large'>
                      اعرف المزيد
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <img
              src='/img/hero.svg'
              alt='Hero Photo'
              className={classes.hero}
            />
          </Grid>
        </Grid>
      </Grid>
      <Divider variant='inset' className={classes.divider} />
      <WhyUs />
      <Divider variant='inset' className={classes.divider} />
      <WorkStages />
    </motion.div>
  );
};

export default Home;
