import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sonnet from './../Sonnet';
import React, { useState } from 'react';




function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}



function Alltabs() {

    const [key, setKey] = useState('home');
    // const [isfillorjustify, setfillorjustify] = useState(false);
    //     useEffect(() => {
    //         if (isfillorjustify) {
    //             simulateNetworkRequest().then(() => {
    //                 setfillorjustify(false);
    //             });
    //         }
    //     }, [isfillorjustify]);
    //     const handleClick = () => setfillorjustify(true);
    return (

        <>

            <Tabs id="fill-tab-example" className="mb-3" transition={false} activeKey={key} onSelect={(k) => setKey(k)} position={!isfillorjustify ? justify : fill}>
                <Tab eventKey="home" title="Home" position={!isfillorjustify ? disabled : null}>
                    test home
                </Tab>
            </Tabs>


            <Tab.Container className="mb-3" activeKey={key} id="left-tabs" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey={Props.key}>{Props.linkMes}</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={6}>
                        <Tab.Content>
                            <Tab.Pane eventKey={Props.key}>
                                {Props.page}
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container >


        </>
    );
}

export default Alltabs;