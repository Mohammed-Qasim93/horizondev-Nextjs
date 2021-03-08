import React, { useState, useEffect } from "react";

import { theme } from "./theme";
import Link from "../Link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
  AppBarStyle: {
    [theme.breakpoints.down("sm")]: {
      height: "65px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "55px",
    },
    zIndex: theme.zIndex.modal + 1,
  },
  logoContainer: {
    ...theme.logoContainer,
    ...theme.buttonContainer,
    [theme.breakpoints.down("sm")]: {
      height: "59px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "55px",
    },
  },
  logo: {
    ...theme.logo,
    [theme.breakpoints.down("sm")]: {
      height: "45px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40px",
    },
  },
  logoText: {
    ...theme.tab,
    color: theme.palette.common.light,
    [theme.breakpoints.down("sm")]: {
      height: "35px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "35px",
    },
  },
  tabsContainer: {
    marginRight: "auto",
  },
  tab: {
    ...theme.tab,
    fontSize: "1rem",
    fontWeight: 700,
    minWidth: 5,
    marginLeft: "30px",
  },

  toolBarMargin: {
    ...theme.mixins.toolbar,
  },

  menuContainer: {
    ...theme.buttonContainer,
    marginRight: "auto",
    color: theme.palette.common.light,
  },

  menuIcon: {
    width: "45px",
    height: "45px",
  },

  drawer: {
    width: "40%",
    alignItems: "flex-start",
    backgroundColor: theme.palette.common.light,
  },
  ListStyle: {
    width: "100%",
  },
  drawerItem: {
    ...theme.tab,
    textAlign: "right",
    fontSize: "1rem",
    fontWeight: 700,
    color: theme.palette.common.dark,
    opacity: 0.7,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
});

const tabs = [
  {
    name: "الرئيسية",
    value: 0,
    route: "/",
    activeIndex: 0,
  },
  {
    name: "الخدمات",
    value: 1,
    route: "/services",
    activeIndex: 1,
  },
  {
    name: "اتصل بنا",
    value: 2,
    route: "/contact",
    activeIndex: 2,
  },
];

const Header = ({ changeHandler, value, setValue }) => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    [...tabs].forEach((tab) => {
      switch (window.location.pathname) {
        case `${tab.route}`:
          if (value !== tab.value) setValue(tab.value);
      }
    });
  }, [value]);

  const tabsComponent = (
    <Tabs
      value={value}
      onChange={changeHandler}
      className={classes.tabsContainer}
      indicatorColor='primary'>
      {tabs.map((tab) => (
        <Tab
          disableRipple
          key={tab.value}
          className={classes.tab}
          component={Link}
          href={tab.route}
          label={tab.name}
        />
      ))}
    </Tabs>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}>
        <div className={classes.toolBarMargin} />
        <List disablePadding className={classes.ListStyle}>
          {tabs.map((tab) => (
            <ListItem
              key={tab.activeIndex}
              onClick={() => {
                setOpenDrawer(false);
                setValue(tab.value);
              }}
              divider
              button
              component={Link}
              classes={{ selected: classes.drawerItemSelected }}
              href={tab.route}
              selected={value === tab.activeIndex}>
              <ListItemText className={classes.drawerItem} disableTypography>
                {tab.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.menuContainer}
        disableRipple>
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
    </>
  );

  return (
    <>
      <AppBar className={classes.AppBarStyle} position='fixed'>
        <Toolbar disableGutters>
          <Button
            component={Link}
            href='/'
            onClick={() => setValue(0)}
            className={classes.logoContainer}
            disableRipple>
            <img className={classes.logo} src='/img/logo.svg' alt='' />
            <Typography className={classes.logoText} variant='h5'>
              الافق للتطوير
            </Typography>
          </Button>
          {matches ? tabsComponent : drawer}
        </Toolbar>
      </AppBar>
      <div className={classes.toolBarMargin} />
    </>
  );
};

export default Header;
