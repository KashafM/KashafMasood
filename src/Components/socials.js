import React from 'react';
import Grid from '@material-ui/core/Grid';
import socialsImg from '../Imgs/socialsImg.png'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button'

export default function Socials() {
  return (
    <div id="Socials">
        <h1 style={{textAlign: "center"}}>STAY CONNECTED!</h1>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={6}>
            <img src={socialsImg} alt="SocialsImg"/>
        </Grid>
        <Grid item xs={6}>
            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={10}>
                <Grid item>
                    <Button size="large" variant="contained" color="primary" startIcon={<LinkedInIcon/>}><a style={{textDecoration:"none"}, {color:"white"}} href="https://www.linkedin.com/in/kashaf-masood/" target="blank">LinkedIn</a></Button>
                </Grid>

                <Grid item>
                    <Button size="large" variant="contained" color="primary" startIcon={<EmailIcon/>}><a style={{textDecoration:"none"}, {color:"white"}}href="mailto:kashaf.masood@ryerson.ca" target="blank">Email</a></Button>
                </Grid>
                <Grid item>
                    <Button size="large" variant="contained" color="primary" startIcon={<GitHubIcon/>}><a style={{textDecoration: 'none'}, {color:"white"}} href="https://github.com/KashafM" target="blank">GitHub</a></Button>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
