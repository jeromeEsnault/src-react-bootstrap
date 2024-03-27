
import React from 'react';
import Page from './pages/PageComponants/TabsComponants.js';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {


  return (
    <>

      <Row className='text-center'>
        <Col lg={12}>
          <h1> Voici mon React-Bootstrap </h1>
        </Col>
      </Row>

      <Row >
        <Col lg={12}>
          <Page />
        </Col>
      </Row>



    </>
  );
}


export default App;
