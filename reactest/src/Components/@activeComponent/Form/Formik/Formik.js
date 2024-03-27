
import * as formik from 'formik';
import * as yup from 'yup';
import React, { useState, useEffect } from 'react';
import Stack from 'react-bootstrap/Stack';


class Formik extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      data: props.data,
      forFormik: props.forFormik,
      schema: props.schema,
      initialValues: props.initialValues,
      onSubmit: props.onSubmit,
    };
  }


  render() {
    return (
      <>

        {
          this.state.forFormik ? <Formik
            validationSchema={this.state.schema}
            onSubmit={this.state.onSubmit}
            initialValues={this.state.initialValues}

          >

          </Formik > : null

        }
      </>

    );

  }
}
export default Formik;
