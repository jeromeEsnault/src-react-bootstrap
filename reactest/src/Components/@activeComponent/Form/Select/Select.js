import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';


function Select(props) {

  const data = props.data;

  const dataFormSelect = data.FormSelect;

  return (
    <>

      <noscript>Form.Select</noscript>
      {
        dataFormSelect.map((content) => (
          <Form.Select size={content.size} aria-label={content.arialabel}>
            <option>{content.optionDefault}</option>
            {content.optionContent.map((option) => (
              <option value={option.value}>{option.valueMess}</option>
            ))}
          </Form.Select>))
      }



    </>

  );
}


export default Select;
