import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Head from "next/head";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { theme } from "../src/ui/theme";
import { motion } from "framer-motion";
import { ParentAnim } from "../src/Animation";
import { makeStyles } from "@material-ui/styles";
import Snackbar from "@material-ui/core/Snackbar";
import ReCAPTCHA from "react-google-recaptcha";

const useStyles = makeStyles({
  contactContainer: {
    height: "43em",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  imgContainer: {
    height: "30em",
    [theme.breakpoints.down("md")]: {
      height: "20em",
    },

    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      opacity: ".05",
      zIndex: -1,
      width: "24em",
      height: "24em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "16em",
      height: "16em",
    },
  },
  contactImg: {
    height: "100%",
  },
  formContainer: {
    height: "30em",
  },
  form: {
    height: "25em",
  },

  sendButton: {
    ...theme.tab,
    width: "10em",
    padding: "1em 0",
    ...theme.buttonContainer,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.light,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  helperText: {
    textAlign: "right",
  },
});

const Contact = () => {
  const classes = useStyles();
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const [phoneHelper, setPhoneHelper] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [verified, setVerified] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const rechapchaOnChange = () => {
    setVerified(true);
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_macu8dx",
        "template_br0lzpa",
        e.target,
        "user_gnYrW6emaBQaeiKlpGXZd"
      )
      .then(
        (result) => {
          setAlert({
            open: true,
            message: "تم ارسال رسالتك",
            backgroundColor: "#42ba96",
          });
        },
        (error) => {
          setAlert({
            open: true,
            message: "حدث خطأ اثناء ارسال الرسالة حاول مره اخرى",
            backgroundColor: "#ff3333",
          });
        }
      );
    e.target.reset();
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setVerified(false);
  };

  const onChange = (e) => {
    let vaild;
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        vaild = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );
        if (!vaild) {
          setEmailHelper("بريد غير صالح");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(e.target.value);
        vaild = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          e.target.value
        );
        if (!vaild) {
          setPhoneHelper("رقم غير صالح");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{
          style: {
            backgroundColor: alert.backgroundColor,
            height: "2em",
            fontSize: "2em",
          },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
      <Grid
        component={motion.div}
        variants={ParentAnim}
        initial='hidden'
        animate='show'
        className={classes.contactContainer}
        container
        alignItems='center'
        justify='space-around'>
        <Head>
          <title key='title'>اتصل بنا لمعلومات اكثر | الافق للتطوير</title>
          <meta
            name='description'
            key='description'
            content='دعنا نوجهك للطريق الصحيح من خلال تصميم وبرمجة التطبيقات والمواقع ارسل لنا رسالة لفكرتك او سؤالك لنبدأ معا'
          />
          <meta
            property='og:title'
            key='og:title'
            content='اهلا بك في مدخلك الى التصاميم السريعه والحديثه | الرئيسية'
          />
        </Head>
        <Grid
          item
          component={motion.div}
          variants={ParentAnim}
          initial='hidden'
          animate='show'
          lg={4}
          md={4}
          sm={11}
          xs={11}>
          <Grid item container justify='center'>
            <Grid
              item
              component='form'
              onSubmit={sendEmail}
              container
              className={classes.formContainer}>
              <Grid
                item
                container
                direction='column'
                justify='space-evenly'
                className={classes.form}>
                <Grid item>
                  <TextField
                    fullWidth
                    autoComplete='false'
                    variant='outlined'
                    id='name'
                    name='name'
                    placeholder='الاسم'
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    name='email'
                    FormHelperTextProps={{
                      className: classes.helperText,
                    }}
                    fullWidth
                    error={emailHelper.length !== 0}
                    helperText={emailHelper}
                    variant='outlined'
                    id='email'
                    placeholder='الايميل'
                    onChange={onChange}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    name='phone'
                    FormHelperTextProps={{
                      className: classes.helperText,
                    }}
                    fullWidth
                    error={phoneHelper.length !== 0}
                    helperText={phoneHelper}
                    variant='outlined'
                    id='phone'
                    placeholder='رقم الهاتف'
                    onChange={onChange}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    fullWidth
                    placeholder='الرسالة'
                    variant='outlined'
                    id='message'
                    label=''
                    multiline
                    rows={5}
                    name='message'
                  />
                </Grid>
              </Grid>
              <Grid
                direction='column'
                alignItems='center'
                item
                container
                justify='space-evenly'
                style={{ height: "10em" }}>
                <Grid item>
                  <ReCAPTCHA
                    sitekey='6Lf0Y3UaAAAAAN6ZqNNVqHsyCm_JnBsPlh_At5k_'
                    onChange={rechapchaOnChange}
                  />
                </Grid>
                <Grid item>
                  <Button
                    disabled={
                      emailHelper.length !== 0 ||
                      email.length === 0 ||
                      phoneHelper.length !== 0 ||
                      phone.length === 0 ||
                      name.length === 0 ||
                      message.length === 0 ||
                      verified === false
                    }
                    type='submit'
                    component='button'
                    variant='contained'
                    className={classes.sendButton}>
                    ارسال
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          component={motion.div}
          variants={ParentAnim}
          initial='hidden'
          animate='show'>
          <Grid item container justify='center'>
            <Grid item className={classes.imgContainer}>
              <img
                className={classes.contactImg}
                src='/img/contact.svg'
                alt='contact'
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
