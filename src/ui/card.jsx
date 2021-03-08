import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { theme } from "./theme";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { motion, useAnimation } from "framer-motion";
import { ParentAnim } from "../Animation";
import { useInView } from "react-intersection-observer";

const useStyles = makeStyles({
  root: {
    display: "flex",
    padding: "1em",
    borderRadius: 0,
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
  },
  content: {
    ...theme.tab,
    height: "8em",
    verticalAlign: "center",
    [theme.breakpoints.down("md")]: {
      height: "10em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "8em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "6em",
    },
  },
  title: {
    ...theme.tab,
    paddingBottom: ".2em",
    color: theme.palette.common.dark,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6em",
    },
  },
  subTitle: {
    ...theme.tab,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },
  cardImg: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "6em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "8em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5em",
    },
  },
});

const MyCard = ({ img, title, description }) => {
  const controlls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });
  if (view) {
    controlls.start("show");
  } else {
    controlls.start("hidden");
  }

  const classes = useStyles();
  return (
    <Card
      component={motion.div}
      variants={ParentAnim}
      initial='hidden'
      animate={controlls}
      ref={element}
      className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} component='h5' variant='h5'>
            {title}
          </Typography>
          <Typography
            className={classes.subTitle}
            variant='subtitle1'
            color='textSecondary'>
            {description}
          </Typography>
        </CardContent>
      </div>
      <CardMedia>
        <img className={classes.cardImg} src={img} alt='cardImg' />
      </CardMedia>
    </Card>
  );
};

export default MyCard;
