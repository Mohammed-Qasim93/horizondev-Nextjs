import React from "react";
import { theme } from "./theme";
import MyCard from "./card";
import { CardsData } from "../data/data";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { motion, useAnimation } from "framer-motion";
import { ParentAnim, titleAnim } from "../Animation";
import { useInView } from "react-intersection-observer";

const useStyles = makeStyles({
  stagesContainer: {
    height: "65em",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "85em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "122em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "100em",
    },
  },
  stagesHeader: {
    ...theme.sectionHeaders,
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
      fontWeight: "600",
    },
  },
  stagesGridContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    margin: "10px",
    backgroundColor: theme.palette.common.light,
    color: theme.palette.common.dark,
  },
  gridItemBlue: {
    margin: "10px",
    backgroundColor: theme.palette.common.light,
    color: theme.palette.common.extraDarkBlue,
  },
});

const WorkStages = () => {
  const controlls = useAnimation();
  const [element, view] = useInView({ threshold: 0.25 });
  if (view) {
    controlls.start("show");
  } else {
    controlls.start("hidden");
  }
  const classes = useStyles();
  return (
    <Grid
      component={motion.div}
      variants={ParentAnim}
      initial='hidden'
      animate={controlls}
      ref={element}
      container
      className={classes.stagesContainer}>
      <Grid item>
        <Typography variant='h2' className={classes.stagesHeader}>
          مراحل تصميم الموقع
        </Typography>
      </Grid>

      <Grid
        container
        component={motion.div}
        variants={ParentAnim}
        initial='hidden'
        animate={controlls}
        ref={element}
        className={classes.stagesGridContainer}>
        {CardsData.map(({ key, img, title, description }) => {
          {
            return (
              <Grid
                key={key}
                component={motion.div}
                variants={ParentAnim}
                initial='hidden'
                animate={controlls}
                item
                className={
                  key === 1 || key === 2 || key === 5 || key === 6
                    ? classes.gridItem
                    : classes.gridItemBlue
                }
                xl={3}
                lg={4}
                md={4}
                sm={12}
                xs={12}>
                <MyCard
                  component={motion.div}
                  variants={ParentAnim}
                  initial='hidden'
                  animate={controlls}
                  // // ref={element}
                  key={key}
                  img={img}
                  title={title}
                  description={description}
                />
              </Grid>
            );
          }
        })}
      </Grid>
    </Grid>
  );
};

export default WorkStages;
