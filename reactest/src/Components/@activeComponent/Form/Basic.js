import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';

import * as formik from 'formik';
import * as yup from 'yup';
import React, { useState, useEffect } from 'react';


import Check from './check/check';
import schema from './schema/schema';
import Formik from './Formik/Formik';

function BasicExample(props) {

  const schema = props.schema;
  const values = props.paramValue;
  const touched = props.paramTouched;
  const errors = props.paramErrors;

  const FormLabel = props.FormLabel;
  const FormControl = props.FormControl;
  const FormCheck = props.FormCheck;
  const FormText = props.FormText;














  const FormGroup = props.FormGroup;
  const FormSelect = props.FormSelect;
  const isFloatingLabel = props.FloatingLabel;
  const isFormFloating = props.FormFloating;
  const ForFormFloating = props.ForFormFloating;

  const forFormik = props.forFormik;
  const FormRange = props.FormRange;
  const ForInputGroup = props.ForInputGroup;

  // toute mes donne
  /*
  * 'data' est toute les donnee
  * 'datalabel' est les donne pour le label
  * 'dataFormControl'
  *
  */


  const data = props.data;
  const dataFormLabel = data.FormLabel;
  const dataFloatingLabel = data.FloatingLabel;
  const dataFormControl = data.FormControl;
  const dataFormCheck = data.FormCheck;
  const dataFormFloating = data.FormFloating;
  const dataFormText = data.FormText;
  const dataForInputGroup = data.ForInputGroup;
  const dataFormRange = data.FormRange;
  const dataFormGroup = data.FormGroup;
  const dataFormSelect = data.FormSelect;
  const dataforFormik = data.forFormik;

  //  const { Formik } = formik;


  return (
    <>

      <noscript>Form.Label</noscript>

      {FormLabel ? dataFormLabel.map((content) => (<Form.Label lg={content.lg} column={content.column} htmlFor={content.htmlFor} visuallyHidden>
        {content.MessageLabel} </Form.Label>)) : null}
      <noscript>Form.Control</noscript>
      {
        FormControl ? dataFormControl.map((content) => (<Form.Control
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
        />)) : null
      }

      {/* fait */}
      <noscript>FloatingLabel</noscript>



      {
        isFloatingLabel ? dataFloatingLabel.map((content) => (
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

          </FloatingLabel>)) : null}

      <noscript>form.check</noscript>

      {
        FormCheck ? dataFormCheck.map((content) => (
          <Check data={content} reverse={content.reverse} disabled={content.disabled} isviewValid={content.isviewValid} />)) : null
      }

      <noscript>Form.Floating</noscript>
      {
        isFormFloating ? dataFormFloating.map((content) => (
          <Form.Floating className={content.className}>
            <Form.Control
              id={content.id}
              type={content.type}
              placeholder={content.placeholder}
            />
            <label htmlFor={content.htmlFor}>{content.messLabel}</label>
          </Form.Floating>)) : null
      }
      <noscript>Form.Text</noscript>
      {
        FormText ? dataFormText.map((content) => (
          <Form.Text className={content.className} id={content.id} muted>
            {content.messText}
          </Form.Text>)) : null
      }
      <noscript>InputGroup</noscript>
      {
        ForInputGroup ? dataForInputGroup.map((content) => (
          <InputGroup className={content.className} hasValidation={content.hasValidation}>
            <InputGroup.Text>{content.InputGroupText}</InputGroup.Text>
            <Form.Control type={content.type} id={content.id} placeholder={content.placeholder} required={content.required} isInvalid={content.isInvalid} />
            <Form.Control.Feedback type={content.invalidtype}>
              {content.messFeedback}
            </Form.Control.Feedback>
          </InputGroup>)) : null
      }
      <noscript>Form.Range</noscript>
      {FormRange ? dataFormRange.map((content) => (<Form.Range />)) : null}
      <noscript>Form.Select</noscript>
      {
        FormSelect ? dataFormSelect.map((content) => (
          <Form.Select size={content.size} aria-label={content.arialabel}>
            <option>{content.optionDefault}</option>
            {content.optionContent.map((option) => (
              <option value={option.value}>{option.valueMess}</option>
            ))}
          </Form.Select>)) : null
      }


      <noscript> Form.group</noscript>

      {
        FormGroup ? dataFormGroup.map((content) => (
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
                  value={values.firstName}
                  onChange={group.FormControlonChange}
                  isValid={touched.firstName && !errors.firstName}
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
                  isInvalid={!!errors.state}
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
          </Form.Group >)) : null
      }


    </>

  );
}
function Formulaire(props) {

  const [validated, setValidated] = useState(false);

  console.log(props)
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };



  const data = props.data;
  const FormLabel = props.FormLabel;
  const FloatingLabel = props.FloatingLabel;
  const FormControl = props.FormControl;
  const FormCheck = props.FormCheck;
  const FormFloating = props.FormFloating;
  const FormText = props.FormText;
  const FormGroup = props.FormGroup;
  const FormSelect = props.FormSelect;
  const FormRange = props.FormRange;

  const forFormik = props.forFormik;
  const ForFormFloating = props.ForFormFloating;
  const ForInputGroup = props.ForInputGroup;
  const isrowCol = props.isrowCol;
  const visual = props.visual;


  console.log(visual);
  console.log(isrowCol);

  return (
    <>

      {
        forFormik ? <Formik
          data={data}
          forFormik={forFormik}
          schema={schema}
          onSubmit={console.log}
          initialValues={data.forFormik[0].initialValues}

        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form onSubmit={data.onSubmit} noValidate validated={validated} >
              {isrowCol ?
                <Row className={data.classNameRow}>
                  <Col
                    md={data.md}
                    xs={data.xs}
                    xxs={data.xxs}
                    xxxl={data.xxxl}
                    xxl={data.xxl}
                    xl={data.xl}
                    lg={data.lg}
                    sm={data.sm}
                    className={data.classNameRow}>

                    <BasicExample data={data}
                      paramValue={values}
                      paramTouched={touched}
                      paramErrors={errors}
                      ischema={schema}
                      visual={visual}
                      FormLabel={FormLabel}
                      FloatingLabel={FloatingLabel}
                      FormControl={FormControl}
                      FormCheck={FormCheck}
                      FormFloating={FormFloating}
                      FormText={FormText}
                      FormRange={FormRange}
                      FormGroup={FormGroup}
                      FormSelect={FormSelect} />


                  </Col>
                </Row > :
                <BasicExample data={data} ischema={schema} visual={visual}
                  FormLabel={FormLabel}
                  FloatingLabel={FloatingLabel}
                  FormControl={FormControl}
                  FormCheck={FormCheck}
                  FormFloating={FormFloating}
                  FormText={FormText}
                  FormGroup={FormGroup}
                  FormRange={FormRange}
                  FormSelect={FormSelect} />}



              <Button type="submit" className="mb-2" variant="primary" >
                Submit
              </Button>


            </Form >
          )}
        </Formik> :
          <Form onSubmit={data.onSubmit} noValidate validated={validated} >
            {isrowCol ?
              <Row className={data.classNameRow}>
                <Col
                  md={data.md}
                  xs={data.xs}
                  xxs={data.xxs}
                  xxxl={data.xxxl}
                  xxl={data.xxl}
                  xl={data.xl}
                  lg={data.lg}
                  sm={data.sm}
                  className={data.classNameRow}>
                  <Stack variant="blue" gap={3}>
                    <BasicExample data={data}
                      ischema={schema}
                      visual={visual}
                      FormLabel={FormLabel}
                      FloatingLabel={FloatingLabel}
                      FormControl={FormControl}
                      FormCheck={FormCheck}
                      FormFloating={FormFloating}
                      FormText={FormText}
                      FormRange={FormRange}
                      FormGroup={FormGroup}
                      FormSelect={FormSelect} />
                  </Stack>

                </Col>
              </Row > :
              <BasicExample data={data} ischema={schema} visual={visual}
                FormLabel={FormLabel}
                FloatingLabel={FloatingLabel}
                FormControl={FormControl}
                FormCheck={FormCheck}
                FormFloating={FormFloating}
                FormText={FormText}
                FormGroup={FormGroup}
                FormRange={FormRange}
                FormSelect={FormSelect} />}



            <Button type="submit" className="mb-2" variant="primary" >
              Submit
            </Button>


          </Form >
      }
    </>

  );

}

export default Formulaire;
