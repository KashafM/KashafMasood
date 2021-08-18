import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton'
import headerImg from '../Imgs/headerImg.png'
import CloseIcon from '@material-ui/icons/ArrowBackIos';
import {SideBarData} from './SideBarData'

export default function Header() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <div>
      <div>
        <Grid className="header" container spacing={3} direction="row" justifyContent="space-between" alignItems="center">
            <Grid item xs={8}>
                <IconButton onClick={showSidebar}><MenuIcon style={{color:"white"}} fontSize="large"></MenuIcon></IconButton>
            </Grid>
            <Grid item xs={4}>
                <h1 style={{color:"white"}}>Kashaf Masood .</h1>
            </Grid>
        </Grid>
      </div>

      <div>

      </div>
        <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
          <Grid item>
          <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="navbar-toggle">
                  <IconButton aria-label="close"><CloseIcon style={{color:"white"}} fontSize="large"/></IconButton>
                </li>
                {SideBarData.map((item, index) => { 
                  return (
                  <li key={index} className={item.cName}>
                    <a href={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </li>
                )})}
              </ul>
          </nav>
           
          </Grid>
        </Grid>
      <div>
        <br></br>
          <Grid container direction="column" justifyContent="center" alignItems="center" >
              <Grid item>
                <img src={headerImg} alt="HeaderImg"/>
              </Grid>
              <Grid item xs={8}>
                <h1 style={{textAlign: "center"}}>"Focus on making your own grass so green that you forget about looking at how green other’s grass is."</h1> 
              </Grid>
          </Grid>
      </div>
    </div>
  );
}
