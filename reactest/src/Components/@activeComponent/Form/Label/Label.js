import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';

import * as formik from 'formik';
import * as yup from 'yup';
import React, { useState, useEffect } from 'react';


function Label(props) {


  const FormLabel = props.FormLabel;


  const data = props.data;
  const dataFormLabel = data.FormLabel;


  return (
    <>

      <noscript>Form.Label</noscript>

      {dataFormLabel.map((Label) => (
        <Form.Label lg={Label.lg} column={Label.column} htmlFor={Label.htmlFor} visuallyHidden={Label.visuallyHidden}>
          {Label.MessageLabel} </Form.Label>))}



    </>

  );
}


export default Label;
