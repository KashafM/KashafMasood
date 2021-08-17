import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card} from 'react-bootstrap'; 
import Image1 from "../Imgs/datascience.jpg";
import Image2 from "../Imgs/biology.jpg";
import Image3 from "../Imgs/sensors.jpg";

export default function Projects() {
  return (
    <>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Image1} />
        <Card.Body>
        <Card.Title>Neural Network ASD Diagnosis System</Card.Title>
        <Card.Text>
            Algoritm implementing the use of GCN and other machine learning algoriths to create a hybrid learning system for ASD diagnosis | <strong>Python</strong>
        </Card.Text>
        <Button variant="primary">Go to research paper</Button>
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Image2} />
        <Card.Body>
        <Card.Title>SimSnap</Card.Title>
        <Card.Text>
            Website created for middle-school students for biology simulations. 
        </Card.Text>
        <Button variant="primary">Go to article</Button>
        </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Image3} />
        <Card.Body>
        <Card.Title>Thermocouple Temperature Sensor</Card.Title>
        <Card.Text>
            Thermocouple temperature sensor....
        </Card.Text>
        <Button variant="primary">Go to code</Button>
        </Card.Body>
    </Card>
    </>
  );
}
