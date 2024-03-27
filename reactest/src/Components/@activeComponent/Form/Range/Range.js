import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';

import * as formik from 'formik';
import * as yup from 'yup';
import React, { useState, useEffect } from 'react';



function Range(props) {

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
      <noscript>Form.Range</noscript>
      {dataFormRange.map((content) => (<Form.Range />))}


    </>

  );
}






export default Range;
