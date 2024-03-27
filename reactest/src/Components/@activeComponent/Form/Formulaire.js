import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import * as formik from 'formik';
import * as yup from 'yup';
import React, { useState, useEffect } from 'react';

import FloatingLabelPerso from './FloatingLabel/FloatingLabels';
import FormControl from './FormControl/FormControl';
import FormFloating from './FormFloating/FormFloating';
import FormText from './FormText/FormText';
import Formik from './Formik/Formik';
import ImputGroupPerso from './ImputGroup/imputGroup';
import Label from './Label/Label';
import Range from './Range/Range';
import Select from './Select/Select';
import Check from './check/check';
import schema from './schema/schema';

// import FormGroup from './FormGroup/FormGroup';




function Formulaire(props) {

  const data = props.data;
  const isFormLabel = data.isFormLabel;
  const isFloatingLabel = data.isFloatingLabel;
  const isFormControl = data.isFormControl;
  const isFormCheck = data.isFormCheck;
  const isFormFloating = data.isFormFloating;
  const isFormText = data.isFormText;
  const isFormGroup = data.isFormGroup;
  const isFormSelect = data.isFormSelect;
  const isFormRange = data.isFormRange;
  const isforFormik = data.isforFormik;
  const isForInputGroup = data.isForInputGroup;

  const FormFloating = data.FormFloating;
  const FormCheck = data.FormCheck;
  const forFormik = data.forFormik;
  const FloatingLabel = data.FloatingLabel;
  const FormRange = data.FormRange;
  const FormSelect = data.FormSelect;

  const isrowCol = data.iscolrow;
  const visual = data.visual;

  const [validated, setValidated] = useState(false);

  console.log(' isFormLabel ' + isFormLabel)
  console.log(' isFloatingLabel ' + isFloatingLabel)
  console.log(' isFormControl ' + isFormControl)
  console.log(' isFormCheck ' + isFormCheck)
  console.log(' isFormFloating ' + isFormFloating)
  console.log(' isFormText ' + isFormText)
  console.log(' isFormGroup  ' + isFormGroup)
  console.log(' isFormSelect ' + isFormSelect)
  console.log(' isFormRange ' + isFormRange)
  console.log(' isforFormik ' + isforFormik)
  console.log(' isForInputGroup ' + isForInputGroup)
  console.log(' isrowCol ' + isrowCol)
  console.log(' visual ' + visual)

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  const viewallcontent = <>

    {

      isFormLabel ? <Label
        data={data}
      /> : null
    }
    {

      isFormControl ? <FormControl
        data={data}
      /> : null
    }
    {

      isFloatingLabel ? <FloatingLabelPerso
        data={data}
      /> : null
    }
    {

      isFormCheck ? <Check
        onfunction={FormCheck.onfunction}
        data={data}
        reverse={FormCheck.reverse}
        disabled={FormCheck.disabled}
      /> : null
    }
    {

      isFormFloating ? <FormFloating data={data} /> : null
    }

    {

      isFormText ? <FormText
        data={data}
      /> : null

    }
    {

      isForInputGroup ? <ImputGroupPerso data={data} /> : null
    }
    {

      isFormRange ? <Range /> : null
    }
    {

      isFormSelect ? <Select data={data} /> : null
    }

    {

      isFormGroup ? <FormGroup data={data} /> : null

    }


  </>
    ;



  console.log(visual);
  console.log(isrowCol);

  return (
    <>

      {
        isforFormik ? <Formik
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

                    {viewallcontent}
                  </Col>
                </Row > :

                viewallcontent
              }


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

                  {viewallcontent}
                </Col>
              </Row > : viewallcontent

            }



            <Button type="submit" className="mb-2" variant="primary" >
              Submit
            </Button>


          </Form >
      }
    </>

  );

}

export default Formulaire;
