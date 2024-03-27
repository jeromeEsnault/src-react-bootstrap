
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Alertdex(props) {
    const [show, setShow] = useState(true);

    const data = props.data;
    const isHeading = data.heading;
    const isLink = data.link;
    const isText1 = data.isText1;
    const isText2 = data.isText2;
    const ishr = data.ishr;
    const isbutton = data.isbutton;

    return (
        <>
            {
                data.map((alert) => (
                    <Alert
                        show={show}
                        key={alert.key}
                        variant={alert.variant}
                        onClose={() => setShow(false)}
                        dismissible={alert.dismissible}
                    >
                        {isHeading ? <Alert.Heading>{alert.AlertHeading}</Alert.Heading> : null}
                        {isLink ? <Alert.Link href={alert.href}>{alert.AlertLink}</Alert.Link> : null}
                        {isText1 ? <p>
                            {alert.text1}
                        </p> : null}
                        {ishr ? <hr className={alert.classHr} /> : null}
                        {isText1 && isText2 ? <p className={alert.className}>
                            {alert.text2}
                        </p> : null}
                        {isbutton ? <div className={alert.classNameButton}>
                            <Button onClick={() => setShow(false)} variant={alert.variantButton}>
                                {alert.messageButtonClose}
                            </Button>
                        </div> : null}
                    </Alert>
                ))}

            {!show ? data.map((alertButton) => (
                <Button
                    onClick={() => setShow(true)}
                > {alertButton.messageButton}
                </Button>
            ))
                : null}

        </>
    )


}

export default Alertdex;

