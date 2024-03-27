import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';

import React, { useState, useEffect } from 'react';


function FormText(props) {


  const FormText = props.FormText;
  // toute mes donne
  const data = props.data;
  const dataFormText = data.FormText;
  //  const { Formik } = formik;


  return (
    <>
      <noscript>Form.Text</noscript>
      {
        dataFormText.map((content) => (
          <Form.Text className={content.className} id={content.id} muted={content.ismuted}>
            {content.messText}
          </Form.Text>))
      }



    </>

  );
}

export default FormText;
