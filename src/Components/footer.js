import React from 'react';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton'

export default function Footer() {
  return (
    <div className="Footer">
      <Grid className="footer" container direction="row" justifyContent="space-between" alignItems="flex-start">
        <Grid item xs={3}>
          <p style={{color:"white"}}>Stay Connected!</p>
          <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
            <Grid item>
              <IconButton aria-label="delete"><LinkedInIcon style={{color:"white"}} /></IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="delete"><EmailIcon style={{color:"white"}}/></IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="delete"><GitHubIcon style={{color:"white"}}/></IconButton>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={5}>
          <p style={{color:"white"}}>Navigate</p>
          <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={4}>
            <Grid item>
              <a href="#About">About</a>
            </Grid>
            <Grid item>
              <a href="#Resume">Resume</a>
            </Grid>
            <Grid item>
              <a href="#Projects">Projects</a>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={4}>
          <h1 style={{color:"white"}}>Kashaf Masood .</h1>
        </Grid>
      </Grid>
    </div>
  );
}
