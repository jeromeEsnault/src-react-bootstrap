import { Button, ButtonGroup, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
//import Alert from 'react-bootstrap/Alert';
import React, { useEffect, useState } from 'react';
import { simulateNetworkRequest } from './../../../OUTILS/function/setTime';


function AllButton(props) {
    const data = props.data;
    const dataNum = props.dataNum;
    const radioVal = data[dataNum].Radios[0].value;
    const radioVal1 = + radioVal;
    const radioVal2 = data[dataNum].Radios.length;
    const isLoadingInit = data[dataNum].isLoadingInit;
    const ischeckedInit = data[dataNum].ischeckedInit;
    const radios = data[dataNum].Radios;
    const Buttonsimple = data[dataNum].Buttonsimple;
    const ButtonGroup = data[dataNum].ButtonGroup;
    const ToggleButtonGroup = data[dataNum].ToggleButtonGroup;

    const isDiv = data[dataNum].isDiv;


    const [isLoading, setLoading] = useState(isLoadingInit); // boolean
    const [checked, setChecked] = useState(ischeckedInit); // string
    const [radioValue, setRadioValue] = useState(radioVal1); // number
    const [value, setValue] = useState([radioVal1, radioVal2]); // tabs number

    console.log("isLoadingInit:boolean: " + typeof isLoadingInit); // boolean
    console.log("ischeckedInit:string: " + typeof ischeckedInit);
    console.log("radioVal1:number: " + typeof radioVal1);
    console.log("radioVal2:number: " + typeof radioVal2);


    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest(2000).then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);



    const handleClick = () => setLoading(true);
    const handleChange = (val) => setValue(val);
    if (Buttonsimple) {
        return (
            <>
                {isDiv ?
                    <div className={data[dataNum].classNamediv}>


                        {radios.map((radios) => (
                            <Button
                                as={radios.as}
                                type={radios.type}
                                value={isLoading ? radios.value1 : radios.value2}
                                disabled={isLoading}
                                onClick={!isLoading ? handleClick : null}
                                variant={radios.variant}
                                size={radios.size}
                                href={radios.href}
                                active={radios.active}
                            />))}

                    </div>
                    : radios.map((radios) => (
                        <Button as={radios.as}
                            type={radios.type}
                            value={isLoading ? radios.value1 : radios.value2}
                            disabled={isLoading}
                            onClick={!isLoading ? handleClick : null}
                            variant={radios.variant}
                            size={radios.size}
                            href={radios.href}
                            active={radios.active}
                        />))

                }
            </>
        );
    }
    if (ButtonGroup) {

        return (
            <>

                <ButtonGroup className="mb-2">

                    {radios.map((radios) => (
                        <ToggleButton
                            key={radios.value}
                            id={radios.id + radios.key}
                            type={radios.type}
                            variant="secondary"
                            name={radios.name}
                            value={radios.value}
                            checked={radioValue === radios.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                            {radios.value}
                        </ToggleButton>
                    ))}
                </ButtonGroup>

            </>
        );
    }
    if (ToggleButtonGroup) {

        return (
            <>

                <ToggleButtonGroup name="options" type="checkbox" value={value} onChange={handleChange} defaultValue={[1, 3]} className="mb-2">
                    <ToggleButton id="tbg-btn-1" value={1}>
                        Option 1
                    </ToggleButton>

                </ToggleButtonGroup>
            </>
        );
    }
    if (ToggleButton) {
        return (
            <>
                <ToggleButton
                    className="mb-2"
                    id="toggle-check"
                    type="checkbox"
                    variant="outline-primary"
                    checked={checked}
                    value="1"
                    onChange={(e) => setChecked(e.currentTarget.checked)}
                >
                    Checked
                </ToggleButton>

            </>
        );
    }

}

export default AllButton;