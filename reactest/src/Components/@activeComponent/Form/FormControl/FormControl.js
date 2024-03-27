import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';


import React, { useState, useEffect } from 'react';


function FormControl(props) {



  // toute mes donne

  const data = props.data;
  const dataFormControl = data.FormControl;

  return (
    <>

      <noscript>Form.Control</noscript>
      {
        dataFormControl.map((content) => (
          <Form.Control
            className={content.className}
            id={content.id}
            placeholder={content.placeholder}
            type={content.type}
            defaultValue={content.defaultValue}
            title={content.title}
            aria-label={content.arialabel}
            size={content.size}
            aria-describedby={content.ariaDescribedby}
            plaintext={content.plaintext}
            readOnly={content.readOnly}
            disabled={content.disabled}
          />))
      }




    </>

  );
}


export default FormControl;
