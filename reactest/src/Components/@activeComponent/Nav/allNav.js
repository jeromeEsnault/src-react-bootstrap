import Nav from 'react-bootstrap/Nav';

function BasicExample(Props) {

    const activeKey = "/home";
    // const onSelect = {(selectedKey) => alert(`selected ${selectedKey}`)

    const href = "/home";
    const eventKey = Props.key;
    const linkmes = Props.linkmes;
    const classNav = Props.classNav;

    return (
        <Nav variant="pills" activeKey={activeKey} className={classNav}
        >
            <Nav.Item>
                <Nav.Link eventKey="accordion">{linkmes}</Nav.Link>
            </Nav.Item>

        </Nav >
    );
}

export default BasicExample;