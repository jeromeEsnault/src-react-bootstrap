const dataButton = [{
    Buttonsimple: false,
    ButtonGroup: true,
    ToggleButtonGroup: false,
    ToggleButton: false,
    isLoadingInit: false,
    ischeckedInit: "1",
    isDiv: true,
    classNamediv: "d-grid gap-2",
    Radios: [
        {

            as: null,
            type: "reset",//  "reset" or "checkbox" or "radio",
            value: "1",
            value1: "Reset",
            value2: "change",
            isdisabled: false,
            onClick: "handleClick",
            variant: "secondary",
            size: "lg",
            href: null,
            active: true,
            className: "mb-2",
            id: "toggle-check",
            key: '1',
            name: "radio",
            variant1: 'outline-danger',
            variant2: 'outline-success',
            defaultValue: [1, 3], // defaultValue: 1,

        }

    ],

}]




export default dataButton;