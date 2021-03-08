import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { theme } from "./theme";
import { motion, useAnimation } from "framer-motion";
import { ParentAnim } from "../Animation";
import { useInView } from "react-intersection-observer";

const useStyles = makeStyles({
  whyUsContainer: {
    paddingTop: "20px",
    height: "41em",
    display: "flex",
    flexDirection: "column",
    justifyContnet: "space-evenly",
    [theme.breakpoints.down("sm")]: {
      height: "30em",
    },
  },
  whyUsSubContainer: {
    position: "relative",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  typography: {
    ...theme.sectionHeaders,

    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
      fontWeight: "600",
    },
  },
  teamImg: {
    height: "30em",

    [theme.breakpoints.down("md")]: {
      height: "22em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "12em",
    },
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      opacity: ".05",
      zIndex: -1,
      width: "24em",
      height: "24em",
    },
  },
  whyUsText: {
    textAlign: "justify",
    ...theme.tab,
    lineHeight: 2,
    fontSize: "1.8em",
    width: "20em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4rem",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: ".9rem",
      fontWeight: "600",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.1rem",
      fontWeight: "600",
    },
  },
  span: {
    color: theme.palette.secondary.main,
  },
});

const WhyUs = () => {
  const controlls = useAnimation();
  const [element, view] = useInView({ threshold: 0.25 });
  if (view) {
    controlls.start("show");
  } else {
    controlls.start("hidden");
  }
  const classes = useStyles();
  return (
    <motion.div
      variants={ParentAnim}
      initial='hidden'
      animate={controlls}
      ref={element}
      className={classes.whyUsContainer}>
      <Typography variant='h2' className={classes.typography}>
        لماذا نحن
      </Typography>
      <Grid
        container
        className={classes.whyUsSubContainer}
        justify='space-evenly'
        alignItems='center'>
        <Grid item>
          <img className={classes.teamImg} src='/img/team.svg' alt='Team' />
        </Grid>
        <Grid item>
          <Typography className={classes.whyUsText} variant='h5'>
            فريقنا عباره عن مبرمجين ومصممين تم اختيارهم بعناية مع خبرة لا تقل عن
            4 سنوات في هذا المجال بشتى لغات البرمجة حيث يجمعون بين التصميم
            والبرمجة بأحدث لغات البرمجة واُطر العمل التي من شأنها جعل
            <span className={classes.span}>&nbsp; أداء الموقع افضل</span>
          </Typography>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default WhyUs;
