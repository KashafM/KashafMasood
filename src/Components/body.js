import React from 'react';
import Carousels from './carousels';
import Projects from './projects';
import Resume from './resume'; 
import Footer from './footer'
import Headshot from '../Imgs/HeadshotHalf.jpg'
import { Figure } from 'react-bootstrap'

export default function Body() {
  return (
    <div className="App">
        <div className="Navbar">
            <h1 className="Logo">Kashaf Masood</h1>
            <ul>
                <li className="nav-links"><a href="#about">About</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </div>
        <br></br>

        <Carousels/>

        <div id="about">
            <h2>About</h2>
            <p>Hello there, welcome to my profile! My name is Kashaf Masood and I am a biomedical engineering student at Ryerson University. Throughout my time as an engineering student, I have had the opportunity to explore a variety of fields through my work and educational experience. Research has been a big part of my professional development specifically focused in the biomedical engineering, computer science, and data science disciplines. Other than research, I have also engaged myself in various leadership roles as a student which have fortified my interpersonal skills. I believe that by harnessing both my research and leadership experience, I can explore my interests in the field of biomedical engineering and data science further to reach my goal of innovating medicine!</p>
            <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src={Headshot}
                />
                <Figure.Caption>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption>
            </Figure>
        </div>

        <div id="resume">
            <h2>Resume</h2>
            <Resume/>
        </div>

        <div id="projects">
            <h2>Projects</h2>
            <Projects/>
        </div>

    <Footer/>
    </div>
  );
}