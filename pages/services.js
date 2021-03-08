import React, { useEffect } from "react";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../src/ui/theme";
import Head from "next/head";
import { motion, useAnimation } from "framer-motion";
import { ParentAnim, photoAnim } from "../src/Animation";
import { useInView } from "react-intersection-observer";
import { servicesData } from "../src/data/data";

const useStyles = makeStyles({
  servicesContainer: {
    height: "95em",
    overflow: "hidden",
    alignItems: "center",
  },
  servicesHeader: {
    ...theme.tab,
    overflow: "hidden",
    height: "1.5em",
    color: theme.palette.common.dark,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.95rem",
      fontWeight: "600",
      height: "2em",
    },
  },
  servicesSubHeader: {
    ...theme.tab,
    height: "1.5em",
    color: theme.palette.common.dark,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2em",
      fontWeight: "600",
    },
  },
  servicesHeaderSpan: {
    ...theme.tab,
    display: "inline",
    height: "1.5em",
    color: theme.palette.secondary.light,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.1em",
    },
  },
  titleGridItem: {
    marginTop: "5em",
    height: "10em",
  },
  cardContainer: {
    width: "30em",
    overflow: "hidden",
    height: "10em",
    margin: "3em",
    [theme.breakpoints.down("xs")]: {
      width: "23em",
    },
  },
  cardImg: {
    height: "8em",
    [theme.breakpoints.down("xs")]: {
      height: "6em",
    },
  },
  cardTextDark: {
    ...theme.tab,
    color: theme.palette.common.dark,
    width: "10em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
      width: "8em",
    },
  },
  cardTextBlue: {
    ...theme.tab,
    color: theme.palette.common.extraDarkBlue,
    width: "10em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
      width: "8em",
    },
  },
});

const Services = () => {
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));

  const controlls = useAnimation();
  const [element, view] = useInView({ threshold: 0 });
  if (view) {
    controlls.start("show");
  } else {
    controlls.start("hidden");
  }
  const classes = useStyles();
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <>
      <Grid
        container
        component={motion.div}
        variants={ParentAnim}
        initial='hidden'
        animate='show'
        className={classes.servicesContainer}>
        <Head>
          <title key='title'> خدماتنا المتوفره | الافق للتطوير </title>
          <meta
            name='description'
            key='description'
            content='نوفر لك اسرع واحدث التصاميم  في الشرق الاوسط التي يمكنك ان تمتلكها باقل الاسعار'
          />
          <meta
            property='og:title'
            key='og:title'
            content='اهلا بك في مدخلك الى التصاميم السريعه والحديثه | الرئيسية'
          />
          <meta property='og:url' content='horizondeviq.com' />
        </Head>
        <Grid
          container
          justify='center'
          component={motion.div}
          variants={ParentAnim}
          initial='hidden'
          animate='show'>
          <Grid
            container
            component={motion.div}
            component={motion.div}
            variants={ParentAnim}
            initial='hidden'
            animate='show'
            direction='column'>
            <Grid component={motion.div} item>
              <Grid
                container
                direction='row'
                justify='space-around'
                component={motion.div}>
                <Grid
                  component={motion.div}
                  item
                  className={classes.titleGridItem}>
                  <Typography className={classes.servicesHeader} variant='h2'>
                    <span className={classes.servicesHeaderSpan}>
                      يقدم&nbsp;
                    </span>
                    لك فريقنا وبكل فخر
                  </Typography>
                  <Typography
                    className={classes.servicesSubHeader}
                    variant='h5'>
                    خدمات تقنية يمكنك ان تثق بها
                  </Typography>
                </Grid>
                <Grid item></Grid>
              </Grid>
            </Grid>

            {servicesData.map(({ key, img, description }) => {
              return key % 2 !== 0 ? (
                <Grid
                  item
                  key={key}
                  ref={element}
                  component={motion.div}
                  variants={photoAnim}
                  initial='hidden'
                  animate={controlls}
                  className={classes.cardsGridItem}>
                  <Grid
                    component={motion.div}
                    container
                    direction='row'
                    justify={matchesXs ? "center" : "space-around"}>
                    <Grid item></Grid>
                    <Grid item component={motion.div}>
                      <Grid
                        container
                        className={classes.cardContainer}
                        justify={matchesXs ? "space-between" : "space-around"}
                        alignItems='center'>
                        <Grid item>
                          <Typography
                            className={classes.cardTextDark}
                            variant='h5'>
                            {description}
                          </Typography>
                        </Grid>
                        <Grid item xs={6} key={key}>
                          <img
                            className={classes.cardImg}
                            src={img}
                            alt={description}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ) : (
                <Grid
                  key={key}
                  component={motion.div}
                  variants={photoAnim}
                  initial='hidden'
                  animate={controlls}
                  item
                  key={key}>
                  <Grid
                    component={motion.div}
                    container
                    direction='row'
                    justify='space-around'>
                    <Grid item component={motion.div}>
                      <Grid
                        container
                        component={motion.div}
                        className={classes.cardContainer}
                        justify={matchesXs ? "space-between" : "space-around"}
                        alignItems='center'>
                        <Grid component={motion.div} item key={key}>
                          <Typography
                            className={classes.cardTextBlue}
                            variant='h5'>
                            {description}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <img
                            className={classes.cardImg}
                            src={img}
                            alt={description}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item></Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Services;
