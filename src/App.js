import React from 'react';
import Header from './Components/header';
import About from './Components/about';
import Resume from './Components/resume';
import Projects from './Components/projects';
import Socials from './Components/socials';
import Footer from './Components/footer';
import Advice from './Components/advice';
import Divider from '@material-ui/core/Divider';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header/> 
      <br></br>
      <br></br>
      <Divider style={{ background: 'grey' }}/>
      <About/> 
      <br></br>
      <br></br>
      <Resume/> 
      <br></br>
      <br></br>
      <Projects/> 
      <br></br>
      <br></br>
      <Divider style={{ background: 'grey' }}/>
      <Socials/> 
      <Divider style={{ background: 'grey' }}/>
      <br></br>
      <br></br>
      <Advice/> 
      <br></br>
      <br></br>
      <Footer/>
    </div>
  );
}
