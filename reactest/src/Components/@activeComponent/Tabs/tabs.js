import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import React from 'react';
import dataDefaultTab from '../../../data/DEFAULT/DEFAULT';
const dataDefault = dataDefaultTab[1];



class Tabsindex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            datadefault: dataDefault,


        }
        console.log(this.state.data);

    }

    render(props) {
        const datadefault = this.state.datadefault;
        const id = datadefault.tabsid; //tabsid
        const defaultkey = datadefault.tabsdefaultkey; //tabsdefaultkey
        const classNav = datadefault.tabsclassNav; //tabsclassNav


        console.log(datadefault);

        return (
            <>
                <p> ID:{id}</p>
                <p> default:{datadefault.Id}</p>
                <p> CLASS:{classNav}</p>

                <Tab.Container id={datadefault.Id} defaultActiveKey={datadefault.DefaultKey}>

                    <Row>

                        <Col sm={3} lg={3}>
                            <Nav variant={datadefault.variant} className={datadefault.ClassNav}>
                                {this.state.data.map((link) =>
                                    <Nav.Item >
                                        <Nav.Link eventKey={link.eventkey}>{link.linkMes}</Nav.Link>
                                    </Nav.Item >
                                )}
                            </Nav>
                        </Col>
                        <Col sm={9} lg={9}>
                            <Tab.Content>
                                {this.state.data.map((link) =>
                                    <Tab.Pane eventKey={link.eventkey}>{link.page}</Tab.Pane>

                                )}

                            </Tab.Content>
                        </Col>

                    </Row>
                </Tab.Container >

            </>
        )
    }
}




export default Tabsindex;