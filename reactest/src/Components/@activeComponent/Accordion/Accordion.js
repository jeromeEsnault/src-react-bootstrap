
import { Accordion, Card, } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { useContext } from 'react';

import AccordionContext from 'react-bootstrap/AccordionContext';
function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}


function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Choisevisibility1(props) {
  const eventkey = props.eventkey;
  const linkMess = props.linkMess;
  const linkContent = props.linkContent;
  return (
    <Accordion.Item eventKey={eventkey}>
      <Accordion.Header>{linkMess}</Accordion.Header>
      <Accordion.Body>{linkContent}</Accordion.Body>
    </Accordion.Item>)
}
function Choisevisibility2(props) {
  const bouton = props.bouton;
  const eventkey = props.eventkey;
  const linkMess = props.linkMess;
  const linkContent = props.linkContent;
  return (
    < Card >
      <Card.Header>
        {bouton ? <CustomToggle eventKey={eventkey}> {linkMess}</CustomToggle> : <ContextAwareToggle eventKey={eventkey}> {linkMess}</ContextAwareToggle>}
      </Card.Header>
      <Accordion.Collapse eventKey={eventkey}>
        <Card.Body>{linkContent}</Card.Body>
      </Accordion.Collapse>
    </Card >
  )
}
function Allaccordion(props) {

  //const behavior = props.behavior;
  const activeKeydefault = props.activeKeydefault;
  const boolean = props.boolean;
  const isbouton = props.isbouton;
  const eventkey = props.eventkey;
  const linkMess = props.linkMess;
  const linkContent = props.linkContent;
  let Visibilyty;
  if (boolean === true) {
    Visibilyty = <Choisevisibility1 eventkey={eventkey} linkMess={linkMess} linkContent={linkContent} />;
  }
  else {

    Visibilyty = <Choisevisibility2 bouton={isbouton} eventkey={eventkey} linkMess={linkMess} linkContent={linkContent} />;
  }
  return (
    <>
      <Accordion defaultActiveKey={activeKeydefault} >
        {Visibilyty}
      </Accordion>
    </>
  );
}


export default Allaccordion;
