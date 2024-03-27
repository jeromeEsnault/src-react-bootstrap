import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

// import Sonnet from './../Sonnet';

function LeftTabs() {


  return (

    <>


      <Tab.Container id="left-tabs" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="deux">Tab 1</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                test
              </Tab.Pane>

            </Tab.Content>
            <Tab.Content>
              <Tab.Pane eventKey="deux">
                test
              </Tab.Pane>

            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

    </>


  );
}

export default LeftTabs;
