
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';



import React, { useState, useEffect } from 'react';


function FloatingLabels(props) {


  // toute mes donne

  const data = props.data;
  const dataFloatingLabel = data.FloatingLabel;

  return (
    <>


      <noscript>FloatingLabel</noscript>
      {
        dataFloatingLabel.map((content) => (
          <FloatingLabel
            controlId={content.controlId}
            label={content.label}
            className={content.className}
          >
            <Form.Control type={content.type} placeholder={content.placeholder} />
            <Form.Select aria-label={content.arialabel}>
              <option>{content.optionDefault}</option>
              {content.optionContent.map((option) => (
                <option value={option.optionvalue}>{option.optionvalueMess}</option>
              ))}
            </Form.Select>

          </FloatingLabel>))}



    </>

  );
}


export default FloatingLabels;
