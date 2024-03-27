import data from "../../../data/DEFAULT/DEFAULT"
import Col from 'react-bootstrap/Col';

const compenentFix = [
    {
        onSubmit: "function",
        IsnoValidate: false,
        validated: false,
        classNameRow: "mb-3",
        classNameCol: "my-1",
        xs: 12,
        xxs: 12,
        sm: 12,
        md: 12,
        xxxl: 12,
        xxl: 12,
        xl: 12,
        lg: 12,
        type: "submit",
        variant: "primary",
        iscolrow: true,
        visual: false,
        isFormLabel: true,
        FormLabel: [{
            visuallyHidden: false,
            lg: 2,
            column: "lg",
            htmlFor: "exampleColorInput1",
            MessageLabel: "premier label",
        }, {
            visuallyHidden: false,
            lg: 2,
            column: "lg",
            htmlFor: "exampleColorInput2",
            MessageLabel: "deuxieme label",
        }],

        isFloatingLabel: false,
        FloatingLabel: [{
            controlId: "floatingInput",
            label: "Email address",
            className: "mb-3",
            as: "textarea",
            type: "email",
            placeholder: "name@example.com",
            arialabel: "Floating label select example",
            optionDefault: "Open this select menu",
            optionContent: [{
                optionvalue: "1",
                optionvalueMess: "One",
            },
            {
                optionvalue: "2",
                optionvalueMess: "two",
            }]


        }],

        isFormControl: true,
        FormControl: [{
            plaintext: false,
            readOnly: false,
            disabled: false,
            FormControlExpr: null,// "readOnly" or "disabled" or null
            className: "mb-2",
            id: "inlineFormInput",
            placeholder: "Jane Doe",
            type: "mail",
            defaultValue: null,
            title: "Choose your color",
            arialabel: "exampleColorInput2",
            size: "lg",
            ariaDescribedby: "passwordHelpBlock",

        }],

        isFormCheck: false,
        FormCheck: [{
            reverse: false,
            disabled: true, // false or true et ne pas mettre disabled avec isviewValid en 
            isviewValid: false,
            type: 'checkbox',// 'checkbox' or 'radio'or 'switch' et doit etre le meme dans checkcontent.type
            key: `default-`,
            className: "mb-3",
            checkcontent: [{
                isviewValid: false,
                Valid: true,
                disabled: true,
                type: 'checkbox',// 'checkbox' or 'radio' or 'switch'
                id: `check-api-`,
                className: "mb-2",
                label: "disabled",
                name: "group1",
                arialabel: "radio 1",
                CheckLabel: `Custom api`,
                validType: "valid",
                invalidType: "invalid",
                MessfeedbackValid: " You did it!",
                MessfeedbackNoValid: " no valid!",
            }]
        }],

        isFormFloating: false,
        FormFloating: [{
            className: "mb-3",
            id: "floatingPasswordCustom",
            type: "password",
            placeholder: "Password",
            htmlFor: "floatingInputCustom",
            messLabel: "Email address",

        }],

        isFormText: false,
        FormText: [{
            className: "text-muted",
            id: "passwordHelpBlock",
            messText: " Your password must be 8 - 20 characters long, contain letters and numbers," +
                " and must not contain spaces, special characters, or emoji.",
        }],
        isForInputGroup: false,
        ForInputGroup: [{
            required: false,
            hasValidation: false,
            className: "mb-2",
            InputGroupText: "@",
            type: "text",
            id: "inlineFormInputGroup",
            placeholder: "Username",
            isInvalid: false,
            invalidtype: "invalid",
            messFeedback: " Please choose a username.",
        }],

        isFormRange: false,
        FormRange: [{
            bsPrefix: null,
            value: null,
            onChange: null, // mettre une function
            id: null,
        }
        ],
        isFormGroup: false,
        FormGroup: [{
            className: "mb-3",
            as: { Col },
            md: "4",
            controlId: "validationCustom01",
            FormGroupContent: [
                {
                    // FormLabel: 
                    FormLabelas: "legend",
                    FormLabelsm: 2,
                    FormLabelhtmlFor: "disabledSelect",
                    FormLabelmessLabel: "Disabled select menu",

                    //  FormControl: 
                    FormControlrequired: false,
                    FormControlmultiple: false,
                    FormControldisabled: false,
                    FormControlplaintext: false,
                    FormControlreadOnly: false,
                    FormControlname: "firstName",

                    FormControlonChange: 'handleChange',

                    FormControlrows: 3,
                    FormControlas: "textarea",
                    FormControltype: "email",
                    FormControlsize: "sm",
                    FormControlid: "disabledTextInput",
                    FormControlplaceholder: "Disabled input",
                    FormControldefaultValue: "email@example.com",
                    FormControlisInvalid: '!!errors.state',

                    // FormControlwitxCol:

                    FormControlwitxColsm: 10,
                    FormControlwitxColname: "firstName",
                    FormControlwitxColonChange: 'handleChange',
                    FormControlwitxColrows: 3,
                    FormControlwitxColas: "textarea",
                    FormControlwitxColtype: "email",
                    FormControlwitxColsize: "sm",
                    FormControlwitxColid: "disabledTextInput",
                    FormControlwitxColplaceholder: "Disabled input",
                    FormControlwitxColdefaultValue: "email@example.com",
                    // FormCheck: 

                    FormChecklabel: "Agree to terms and conditions",
                    FormChecktype: "checkbox",
                    FormCheckid: "disabledFieldsetCheck",
                    FormCheckname: "terms",
                    FormCheckonChange: 'handleChange',
                    FormCheckfeedbackType: "invalid",


                    // FormCheckwitxCol: 

                    FormCheckwitxColsm: 10,// num or 'span: 10, offset: 2'

                    FormCheckwitxCollabel: "Agree to terms and conditions",
                    FormCheckwitxColtype: "checkbox",
                    FormCheckwitxColid: "disabledFieldsetCheck",
                    FormCheckwitxColname: "terms",
                    FormCheckwitxColonChange: 'handleChange',
                    FormCheckwitxColfeedbackType: "invalid",

                    // FormSelect: 

                    FormSelectid: "disabledSelect",
                    FormSelectdefaultValue: "Choose...",
                    FormSelectoptionMessDefault: "Disabled select",
                    FormSelectoptionContent: [{
                        option: "...",
                        value: 0,
                    }],

                    // FormText: 
                    FormTextclassName: "text-muted",
                    FormTexttext: " We'll never share your email with anyone else.",

                    // InputGroup: 
                    InputGroupid: "inputGroupPrepend",
                    InputGroupInputGroupTextMess: "@",
                    InputGrouptype: "text",
                    InputGroupplaceholder: "Username",
                    InputGroupariaDescribedby: "inputGroupPrepend",
                    InputGroupname: "username",
                    InputGrouponChange: 'handleChange',
                    InputGroupFeedbacktype: "invalid",


                    // FormControlFeedback: 
                    FormControlFeedbacktype: "invalid",
                    FormControlFeedbackFeedbackMess: 'errors.city',
                },
                {
                    // FormLabel: 
                    FormLabelas: "div",
                    FormLabelsm: 2,
                    FormLabelhtmlFor: "firstName",
                    FormLabelmessLabel: "firstName",

                    //  FormControl: 
                    FormControlrequired: true,
                    FormControlmultiple: false,
                    FormControldisabled: false,
                    FormControlplaintext: false,
                    FormControlreadOnly: false,
                    FormControlname: "firstName",

                    FormControlonChange: 'handleChange',

                    FormControlrows: 3,
                    FormControlas: "input", // "input","textarea"
                    FormControltype: "firstName",
                    FormControlsize: "sm",
                    FormControlid: "firstNameId",
                    FormControlplaceholder: "Disabled input",
                    FormControldefaultValue: 'Mark',
                    FormControlisInvalid: '!!errors.state',

                    // FormControlwitxCol:

                    FormControlwitxColsm: 10,
                    FormControlwitxColname: "firstName",
                    FormControlwitxColonChange: 'handleChange',
                    FormControlwitxColrows: 3,
                    FormControlwitxColas: "textarea",
                    FormControlwitxColtype: "email",
                    FormControlwitxColsize: "sm",
                    FormControlwitxColid: "disabledTextInput",
                    FormControlwitxColplaceholder: "Disabled input",
                    FormControlwitxColdefaultValue: "email@example.com",
                    // FormCheck: 

                    FormChecklabel: "Agree to terms and conditions",
                    FormChecktype: "checkbox",
                    FormCheckid: "disabledFieldsetCheck",
                    FormCheckname: "terms",
                    FormCheckonChange: 'handleChange',
                    FormCheckfeedbackType: "invalid",


                    // FormCheckwitxCol: 

                    FormCheckwitxColsm: 10,// num or 'span: 10, offset: 2'

                    FormCheckwitxCollabel: "Agree to terms and conditions",
                    FormCheckwitxColtype: "checkbox",
                    FormCheckwitxColid: "disabledFieldsetCheck",
                    FormCheckwitxColname: "terms",
                    FormCheckwitxColonChange: 'handleChange',
                    FormCheckwitxColfeedbackType: "invalid",

                    // FormSelect: 

                    FormSelectid: "disabledSelect",
                    FormSelectdefaultValue: "Choose...",
                    FormSelectoptionMessDefault: "Disabled select",
                    FormSelectoptionContent: [{
                        option: "...",
                        value: 0,
                    }],

                    // FormText: 
                    FormTextclassName: "text-muted",
                    FormTexttext: " We'll never share your email with anyone else.",

                    // InputGroup: 
                    InputGroupid: "inputGroupPrepend",
                    InputGroupInputGroupTextMess: "@",
                    InputGrouptype: "text",
                    InputGroupplaceholder: "Username",
                    InputGroupariaDescribedby: "inputGroupPrepend",
                    InputGroupname: "username",
                    InputGrouponChange: 'handleChange',
                    InputGroupFeedbacktype: "invalid",


                    // FormControlFeedback: 
                    FormControlFeedbacktype: "invalid",
                    FormControlFeedbackFeedbackMess: 'errors.city',
                }
            ],


        }],

        isFormSelect: false,
        FormSelect: [{
            size: "lg",
            arialabel: "Default select example",
            optionDefault: "Open this select menu",
            optionContent: [{
                value: "1",
                valueMess: 'One',
            }]
        }],

        isforFormik: false,
        forFormik: [{

            onSubmit: console.log(),
            initialValues: [{
                firstName: 'Mark',
                lastName: 'Otto',
                username: '',
                city: '',
                state: '',
                zip: '',
                terms: false,
            }],

        }],



    },

]




export default compenentFix;
