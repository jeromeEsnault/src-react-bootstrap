import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import * as formik from 'formik';
import * as yup from 'yup';
import React, { useState, useEffect, Component } from 'react';

class Check extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            onfunction: props.onfunction,//props.onfunction,
            data: props.data,
            reverse: props.reverse,
            isValid: false,
            isInvalid: false,
            typeValid: null,
        }
        console.log(this.state);
        const dataFormCheck = this.state.data;
        const reverse = this.state.reverse;
        this.handValid = this.handValid.bind(this);
        let ivalide;




    }


    handValid() {

        const onfunction = this.state.onfunction;
        console.log(onfunction);

        if (onfunction === true) {
            this.setState({
                isValid: true,
                isInvalid: false,
                typeValid: "valid"
            });
        }
        if (onfunction === null) {
            this.setState({
                isValid: false,
                isInvalid: true,
                typeValid: 'invalid'
            });
        }
        if (onfunction === false) {
            this.setState({
                isValid: false,
                isInvalid: false,
                typeValid: null,
            });
        }



        console.log("isValid: " + this.state.isValid);
        console.log("isinValid: " + this.state.isInvalid);
    };


    render() {


        return (
            <>

                <div key={this.state.data.key + this.state.data.type} className={this.state.data.className}>
                    {this.state.data.checkcontent.map((check) => (
                        <Form.Check
                            type={check.type}
                            id={check.id + check.type}
                            className={check.className}
                            disabled={check.disabled}
                            label={check.label}
                            reverse={this.state.reverse}
                            name={check.name}
                            aria-label={check.arialabel}
                        >

                            <Form.Check.Input type={check.type} onClick={this.handValid} isValid={this.state.isValid} isInvalid={this.state.isInvalid} />



                            <Form.Check.Label htmlFor={check.htmlFor}>{check.CheckLabel}</Form.Check.Label>



                            <Form.Control.Feedback type={this.state.typeValid} >
                                {this.state.typeValid === 'valid' ? check.MessfeedbackValid : null}
                            </Form.Control.Feedback>
                            <Form.Control.Feedback type={this.state.typeValid} >
                                {this.state.typeValid === 'invalid' ? check.MessfeedbackNoValid : null}
                            </Form.Control.Feedback>




                        </Form.Check>
                    ))}
                </div >
                {this.state.checkimputview}
            </>

        );
    };

}



export default Check;
