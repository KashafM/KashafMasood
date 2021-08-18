import React from 'react';
import aboutImg from '../Imgs/about.png'
import Grid from '@material-ui/core/Grid';

export default function About() {
  return (
    <div id="About">
        <div>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item>
                    <h1>ABOUT</h1>
                </Grid>

                <Grid item>
                    <img src={aboutImg} alt="aboutImg"/>;
                </Grid>

                <Grid item>
                    <h3 style={{textAlign: "center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nisi metus. Sed ultricies et erat et volutpat. Vestibulum tellus dui, sollicitudin non egestas in, consequat quis justo. In sit amet dignissim mauris, a interdum libero. Suspendisse quis lectus aliquet, sodales justo sed, condimentum felis. Integer ultricies laoreet libero in volutpat. Duis finibus pellentesque ante eget laoreet. Fusce eu quam non arcu semper tempusine!</h3>
                </Grid>
            </Grid>
        </div>
    </div>
  );
}
