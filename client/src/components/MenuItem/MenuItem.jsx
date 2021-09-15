import "./MenuItem.css";
import { Link as RouterLink } from "react-router-dom";
import Link from '@material-ui/core/Link';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { ButtonGroup } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 250,
    height: 350,
  },
  cardContent: {
    height: 75,
  },
});

const useStylesGrid = makeStyles((theme) => ({
  gridPaper: {
    padding: theme.spacing(5),
    textAlign: "center",
    backgroundColor: "#8C9267",
  },
}));

function MenuItem(props) {
  const classes = useStyles();
  const classesGrid = useStylesGrid();

  return (
    <Grid item m>
      <Paper className={classesGrid.gridPaper} variant="outlined" elevation={3}>
        <Card className={classes.root} elevation={3}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="item"
              height="140"
              image={props.imgURL}
              alt={props.name}
              title={props.name}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h6" component="h2">
                {props.name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical contained primary button group"
              variant="contained"
              justifyContent="center"
              fullWidth
            >
              <Link component={RouterLink} to={`/menu/${props.id}`}>
                <Button size="small">Modify</Button>
              </Link>
              <Button size="small">Order Meow</Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      </Paper>
    </Grid>
  );
}

export default MenuItem;
