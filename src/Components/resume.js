import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card, Button } from 'react-bootstrap';
import Experience from './experience'
export default function Resume() {
  return (
    <>
    <Accordion defaultActiveKey="0">

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="primary" eventKey="0">
            Education
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
              <p>Ryerson University | Toronto, ON </p>
              <p>Biomedical Engineering (B.Eng), Psychology (Minor)</p>
              <p>GPA: 3.77/4.33 (Dean's List)</p>
              <p>Expected Graduation: 06/2023</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="primary" eventKey="1">
            Technical Skills
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body><li>C</li><li>C++</li><li>Python</li><li>Java</li><li>MATLAB</li><li>JavaScript</li><li>HTML5</li><li>CSS3</li><li>React.js</li><li>Jupyter Notebook</li><li>Object-Oriented Programming</li></Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="primary" eventKey="2">
            Experience
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body><Experience/></Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="primary" eventKey="3">
            Awards
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
              <ul>
                  <div>
                    <li>NSERC Undergraduate Student Research Award (USRA)</li>
                    <p>Government of Canada | April 2021</p>
                  </div>
                  <div>
                    <li>Undergraduate Interdisciplinary Research Opportunity (UIRO) Award </li>
                    <p>Ryerson University | May 2020</p>
                  </div>
              </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

    </Accordion>
    </>
  );
}
