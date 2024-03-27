import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';

import * as formik from 'formik';
import * as yup from 'yup';
import React, { useState, useEffect } from 'react';

function FormGroup(props) {


  const data = props.data;

  const dataFormGroup = data.FormGroup;

  return (
    <>

      {
        dataFormGroup.map((content) => (
          <Form.Group className={content.className} as={Col} md={content.md} controlId={content.controlId} >
            {content.FormGroupContent.map((group) => (

              <>
                <Form.Label
                  as={group.FormLabelas}
                  column
                  sm={group.FormLabelsm}
                  htmlFor={group.FormLabelhtmlFor}>
                  {group.FormLabelmessLabel}
                </Form.Label>

                <Form.Control
                  name={group.FormControlname}
                  value={"values.firstName"}
                  onChange={group.FormControlonChange}
                  isValid={"touched.firstName && !errors.firstName"}
                  rows={group.FormControlrows}
                  as={group.FormControlas}
                  type={group.FormControltype}
                  size={group.FormControlsize}
                  id={group.FormControlid}
                  placeholder={group.FormControlplaceholder}
                  multiple={group.FormControlmultiple}
                  disabled={group.FormControldisabled}
                  plaintext={group.FormControlplaintext}
                  readOnly={group.FormControlreadOnly}
                  defaultValue={group.FormControldefaultValue}
                  isInvalid={"!!errors.state"}
                  required={group.required}
                />


                {/* 
          <Col sm={10}>
            <Form.Control name="firstName"
              value={"values.firstName"}
              onChange={'handleChange'}
              isValid={'touched.firstName && !errors.firstName'}
              rows={3}
              as="textarea"
              type="email"
              size="sm"
              id="disabledTextInput"
              placeholder="Disabled input"
              // multiple
              // disabled
              // plaintext
              // readOnly
              defaultValue="email@example.com"
              isInvalid={'!!errors.state'}
              required />
          </Col>
          <noscript>Form.Check dans  Form.group</noscript>
          <Form.Check label="Agree to terms and conditions"
            type="checkbox"
            id="disabledFieldsetCheck"
            required
            name="terms"
            onChange={'handleChange'}
            isInvalid={'!!errors.terms'}
            feedback={'errors.terms'}
            feedbackType="invalid"
            disabled
      />*/}

                {/* <Col sm={10}> { span: 10, offset: 2 }
            <Form.Check
              label="Agree to terms and conditions"
              type="checkbox"
              id="disabledFieldsetCheck"
              required
              name="terms"
              onChange={'handleChange'}
              isInvalid={'!!errors.terms'}
              feedback={'errors.terms'}
              feedbackType="invalid"
              disabled
            />
          </Col>
          <noscript>Form.Select dans  Form.group</noscript>

          <Form.Select id="disabledSelect" defaultValue="Choose..." disabled>
            <option>Disabled select</option>
            <option>...</option>
          </Form.Select>
          <noscript>Form.Text dans  Form.group</noscript>

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}


                {/*   <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              name="username"
              value={'values.username'}
              onChange={'handleChange'}
              isInvalid={'!!errors.username'}
              required
            />
            <Form.Control.Feedback type="invalid">
              {'errors.username'}
            </Form.Control.Feedback>
          </InputGroup>
          <Form.Control.Feedback type="invalid">
            {'errors.city'}
          </Form.Control.Feedback> */}
              </>

            ))}
          </Form.Group >))
      }


    </>

  );
}


export default FormGroup;
