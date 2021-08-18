import React from 'react';
import Grid from '@material-ui/core/Grid';
import resumeImg from '../Imgs/resumeImg.png'
import AccordionResume from './accordion';
import Button from '@material-ui/core/Button'
import resume from '../Imgs/KASHAF MASOOD RESUME.pdf'
export default function Resume() {
  return (
    <div id="Resume">
      <Grid container direction="column" justifyContent="center" alignItems="center" spacing={4}>
        <Grid item>
          <h1>RESUME</h1>
        </Grid>
        
        <Grid item>
          <img src={resumeImg} alt="ResumeImg"/>
        </Grid>

        <Grid item>
          <AccordionResume/>
        </Grid>

        <Grid item>
          <form target="_blank" method="get" action={resume}>
            <Button type="submit" color="primary" variant="contained"vcolor="primary" size="large"><a href={resume} target="blank"></a>Download Resume as PDF</Button> 
          </form>
        </Grid>

      </Grid>
    </div>
  );
}
