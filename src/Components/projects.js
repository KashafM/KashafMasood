import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Image1 from "../Imgs/datascience.jpg";
import Image2 from "../Imgs/biology.jpg";
import Image3 from "../Imgs/sensors.jpg";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function Projects() {
const classes = useStyles();
  return (
    <div id="Projects">
        <Grid container direction="column" justifyContent="space-evenly" alignItems="center" spacing={4}>
            <Grid item>
                <h1>PROJECTS</h1>
            </Grid>
            <Grid item>
                <div>
                    <Card className="card1">
                        <CardActionArea>
                            <CardMedia className={classes.media} image={Image1} title="Neural Network ASD Diagnosis System"/>
                            <CardContent>
                                <h2>Neural Network ASD Diagnosis System</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="large" variant="contained" color="primary">GitHub Repository</Button>
                        </CardActions>
                    </Card>
                </div>
            </Grid>

            <Grid item>
                <div>
                    <Card className="card2">
                        <CardActionArea>
                            <CardMedia className={classes.media} image={Image2} title="SimSnap"/>
                            <CardContent>
                                <h2>SimSnap</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="large" variant="contained" color="primary">ARTICLE</Button>
                        </CardActions>
                    </Card>
                </div>
                
            </Grid>

            <Grid item>
                <div>
                    <Card className="card1">
                        <CardActionArea>
                            <CardMedia className={classes.media} image={Image3} title="Simulated Thermocouple Temperature Sensor"/>
                            <CardContent>
                                <h2>Simulated Thermocouple Temperature Sensor </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="large" variant="contained" color="primary">GitHub Repository</Button>
                        </CardActions>
                    </Card>
                </div>
            </Grid>
        </Grid>
    </div>
  );
}
