
import Form from 'react-bootstrap/Form';


import React, { useState, useEffect } from 'react';


function FormFloating(props) {

  const data = props.data;
  const dataFormFloating = data.FormFloating;


  return (
    <>
      <noscript>Form.Floating</noscript>
      {
        dataFormFloating.map((content) => (
          <Form.Floating className={content.className}>
            <Form.Control
              id={content.id}
              type={content.type}
              placeholder={content.placeholder}
            />
            <label htmlFor={content.htmlFor}>{content.messLabel}</label>
          </Form.Floating>))
      }
    </>

  );
}


export default FormFloating;
