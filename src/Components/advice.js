import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

export default function Advice() {

  return (
    <div className="Advice">
        <Grid container direction="row" justifyContent="space-around" alignItems="center">
            <Grid item>

                <Grid container direction="column" justifyContent="space-around" alignItems="center">
                    <Grid item>
                        <h1>Need Some Inspiration?</h1>
                    </Grid>
                      
                    <Grid item>
                        <p>Click the button below to get your daily dose of advice!</p>
                    </Grid>

                    <Grid item>
                        <Button id="adviceButton" variant="contained" color="primary" onClick={getAdvice}> Get Advice </Button> 
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <div id="adviceBox"></div>
            </Grid>

    
        </Grid>
    </div>
  );
}

function getAdvice()
{
    const resDiv = document.querySelector("#adviceBox")
    fetch("https://api.adviceslip.com/advice").then(response => {
        return response.json();
    
    }).then(adviceData => {
        const Adviceobj = adviceData.slip;
        console.log(Adviceobj)
        resDiv.innerHTML = `<h1>${Adviceobj.advice}</h1>`;
    }).catch(error => {
        console.log(error);
    });

}
