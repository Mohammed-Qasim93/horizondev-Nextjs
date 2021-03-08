import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { theme } from "./theme";
import { Grid, Hidden, Typography } from "@material-ui/core";
import Link from "../Link";

const useStyles = makeStyles({
  footerStyle: {
    height: "16em",
    zIndex: 1302,
    position: "relative",
    width: "100%",
    color: theme.palette.common.light,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      height: "8em",
    },
  },

  link: {
    color: theme.palette.common.light,
    ...theme.tab,
    fontSize: "1.1rem",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  copyRight: {
    ...theme.tab,
    width: "100%",
    bottom: 0,
    position: "absolute",
    textAlign: "center",
    backgroundColor: theme.palette.primary.dark,
    padding: "10px 0px",
    direction: "ltr",
  },
  icon: {
    width: "3em",
    height: "3em",
  },
  socialGrid: {
    position: "absolute",
    bottom: "50px",
    left: "1.5em",
  },
});

const Footer = ({ value, setValue }) => {
  const today = new Date().getFullYear();
  const classes = useStyles();
  return (
    <footer className={classes.footerStyle}>
      <Grid container>
        <Hidden smDown>
          <Grid container justify='center' className={classes.gridContainer}>
            <Grid item className={classes.gridItem}>
              <Grid container direction='column' spacing={2}>
                <Grid
                  item
                  onClick={() => setValue(0)}
                  component={Link}
                  href='/'
                  className={classes.link}>
                  الافق للتطوير
                </Grid>
                <Grid item className={classes.link}>
                  لتصميم وبرمجة المواقع والتطبيقات
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction='column' spacing={2}>
                <Grid
                  item
                  onClick={() => setValue(0)}
                  component={Link}
                  href='/'
                  className={classes.link}>
                  الرئيسية
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction='column' spacing={2}>
                <Grid
                  item
                  component={Link}
                  href='/services'
                  onClick={() => setValue(1)}
                  className={classes.link}>
                  الخدمات
                </Grid>
                <Grid item className={classes.link}>
                  برمجيات مخصصه
                </Grid>
                <Grid item className={classes.link}>
                  مواقع
                </Grid>
                <Grid item className={classes.link}>
                  تطبيقات موبايل
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction='column' spacing={2}>
                <Grid
                  item
                  component={Link}
                  href='/contact'
                  onClick={() => setValue(2)}
                  className={classes.link}>
                  اتصل بنا
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        container
        className={classes.socialGrid}
        justify='flex-end'
        spacing={2}>
        <Grid
          item
          component='a'
          rel='noopener noreferer'
          target='_blank'
          href='https://www.facebook.com/Horizon.Dev.IQ'>
          <img
            src='/img/facebook.svg'
            alt='Facebook Logo'
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component='a'
          rel='noopener noreferer'
          target='_blank'
          href='https://www.facebook.com/Horizon.Dev.IQ'>
          <img
            src='/img/twitter.svg'
            alt='Twitter Logo'
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component='a'
          rel='noopener noreferer'
          target='_blank'
          href='https://www.facebook.com/Horizon.Dev.IQ'>
          <img
            src='/img/instagram.svg'
            alt='Instagram Logo'
            className={classes.icon}
          />
        </Grid>
      </Grid>
      <Typography variant='body2' className={classes.copyRight}>
        جميع الحقوق محفوظة &copy; {today}
      </Typography>
    </footer>
  );
};

export default Footer;
