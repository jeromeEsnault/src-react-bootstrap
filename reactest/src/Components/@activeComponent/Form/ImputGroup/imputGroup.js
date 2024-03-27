import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';

import * as formik from 'formik';
import * as yup from 'yup';
import React, { useState, useEffect } from 'react';


function ImputGroup(props) {

  const data = props.data;
  const dataForInputGroup = data.ForInputGroup;

  return (
    <>

      <noscript>InputGroup</noscript>

      {
        dataForInputGroup.map((content) => (
          <InputGroup className={content.className} hasValidation={content.hasValidation}>
            <InputGroup.Text>{content.InputGroupText}</InputGroup.Text>
            <Form.Control type={content.type} id={content.id} placeholder={content.placeholder} required={content.required} isInvalid={content.isInvalid} />
            <Form.Control.Feedback type={content.invalidtype}>
              {content.messFeedback}
            </Form.Control.Feedback>
          </InputGroup>))
      }
    </>

  );
}


export default ImputGroup;
