import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import LoginImage from "../../assets/loginbackground.png";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import GoogleLogo from "../../assets/image 2.png";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

function Login(props) {
  const handleOtp = () => {
    props.history.push("/login/otp");
  };
  const handleClickEmail = () => {
    props.history.push("/login/email");
  };
  const handleSignUp = () => {
    props.history.push("/register");
  };
  const { classes } = props;
  return (
    <Container maxWidth="xs" className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <img src={LoginImage} className={classes.image} alt="login" />
        </Grid>
        <Grid item xs={12} className={classes.textTop}>
          Masuk
        </Grid>

        <Grid item xs={12} className={classes.gridItemBottom}>
          <Grid container spacing={0} className={classes.gridBottom}>
            <Grid item xs={12}>
              <Box className={classes.buttonBox}>
                <Button
                  disableRipple={true}
                  id="submit-button"
                  className={classes.button}
                  style={{
                    backgroundColor: "#ffffff"
                  }}
                >
                  <Grid container spacing={0}>
                    <Grid item xs={1} className={classes.gridButton}>
                      <img
                        src={GoogleLogo}
                        className={classes.logo}
                        alt="google"
                        style={{ paddingLeft: "5%" }}
                      />
                    </Grid>

                    <Grid item xs={11} className={classes.gridButton}>
                      <Typography className={classes.textButton}>
                        Masuk Dengan Akun Google
                      </Typography>
                    </Grid>
                  </Grid>
                </Button>
              </Box>

              <Box className={classes.buttonBoxBottom}>
                <Button
                  disableRipple={true}
                  id="submit-button"
                  className={classes.buttonBottom}
                  style={{
                    backgroundColor: "#F7A647"
                  }}
                  onClick={handleOtp}
                >
                  <Grid container spacing={0}>
                    <Grid
                      item
                      xs={1}
                      className={classes.logo}
                      style={{ paddingLeft: "4%" }}
                    >
                      <svg
                        width="14"
                        height="20"
                        viewBox="0 0 14 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.1667 1.66663H2.83332C1.91285 1.66663 1.16666 2.41282 1.16666 3.33329V16.6666C1.16666 17.5871 1.91285 18.3333 2.83332 18.3333H11.1667C12.0871 18.3333 12.8333 17.5871 12.8333 16.6666V3.33329C12.8333 2.41282 12.0871 1.66663 11.1667 1.66663Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7 15H7.00833"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Grid>

                    <Grid item xs={11} className={classes.gridButton}>
                      <Typography className={classes.textButtonBottom}>
                        Masuk Dengan Nomor HP
                      </Typography>
                    </Grid>
                  </Grid>
                </Button>
              </Box>
              <Box className={classes.buttonBoxBottom}>
                <Button
                  disableRipple={true}
                  id="submit-button"
                  className={classes.buttonBottom}
                  style={{
                    backgroundColor: "#F7A647"
                  }}
                >
                  <Grid container spacing={0} onClick={handleClickEmail}>
                    <Grid item xs={1}>
                      <MailOutlineIcon className={classes.logoEmail} />
                    </Grid>

                    <Grid item xs={11} className={classes.gridButton}>
                      <Typography className={classes.textButtonBottom}>
                        Masuk Dengan Email
                      </Typography>
                    </Grid>
                  </Grid>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
