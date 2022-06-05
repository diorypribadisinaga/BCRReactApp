import React from 'react'

import { Card,Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import gambar1 from '../src/images/car01.min.jpg'

function App() {
  return (
    <div className="App col-lg-6">
      <Card className='my-4' style={{ width: 'auto' }}>
        <Card.Img variant="top" src={gambar1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
