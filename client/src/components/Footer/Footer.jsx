import "./Footer.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import "../../components/Footer/Footer.css";

const useStyles = makeStyles((theme) => ({
  boxFooter: {
    // top: "auto",
    // bottom: 0,
    marginTop: "calc(5% + 60px)",
    bottom: 0,
    fontFamily: "Ranchers, cursive",
    color: "#E7AF00",
    backgroundColor: "#8E443D",
  },
  octoCat: {
    width: 60,
  },
}));

function Copyright() {
  return (
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="/menu">
          TaCato Truck
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
  );
}

function Footer() {
  const classes = useStyles();
  return (
    <Box
      className={classes.boxFooter}
      sx={{
        display: "flex",
        flexDirection: "column",
        // minHeight: "100vh",
        bottom: "0",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
        }}
      >
        <Container maxWidth="sm">
          <div className="octocats-div">
            <div>
              <a href="https://github.com/Nafff" target="_blank">
                <img
                  className={classes.octoCat}
                  src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631547003/Tactato%20Truck/download-1-removebg-preview_1_avlm57.png"
                  alt="github octocat"
                />
              </a>
              <h6 className="student">Jake Adick</h6>
            </div>
            <div>
              <a href="https://github.com/CourtneyAJackson" target="_blank">
                <img
                  className={classes.octoCat}
                  src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631547003/Tactato%20Truck/download-1-removebg-preview_1_avlm57.png"
                  alt="github octocat"
                />
              </a>
              <h6 className="student">Courtney Jackson</h6>
            </div>
            <p className="check-meowt">Check Meowt</p>
            <div>
              <a href="https://github.com/eileen813" target="_blank">
                <img
                  className={classes.octoCat}
                  src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631547003/Tactato%20Truck/download-1-removebg-preview_1_avlm57.png"
                  alt="github octocat"
                />
              </a>
              <h6 className="student">Eileen Olivera</h6>
            </div>
            <div>
              <a href="https://github.com/guess01325" target="_blank">
                <img
                  className={classes.octoCat}
                  src="https://res.cloudinary.com/dy6xpqkkj/image/upload/v1631547003/Tactato%20Truck/download-1-removebg-preview_1_avlm57.png"
                  alt="github octocat"
                />
              </a>
              <h6 className="student">Otis Guess</h6>
            </div>
          </div>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
