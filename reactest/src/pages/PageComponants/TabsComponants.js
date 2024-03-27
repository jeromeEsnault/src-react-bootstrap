import React from "react";
import Allaccordion from "../../Components/@activeComponent/Accordion/Accordion";

import dataAccordion from "../../Components/@activeComponent/Accordion/Data";
import dataTabs from "../../Components/@activeComponent/Tabs/data";

// import Alert from '../../Components/@activeComponent/Alert/Alert';
// import dataAlert from "../../Components/@activeComponent/Alert/Data";

// import datadefault from "../../data/DEFAULT/DEFAULT";
// import AllTabs from '../../Components/@activeComponent/Tabs/tabs';


// import Badge from '../../Components/@activeComponent/Badge/Badge';
// import dataBadge from '../../Components/@activeComponent/Badge/data';

import Button from '../../Components/@activeComponent/Button/allbutton';
import dataButton from '../../Components/@activeComponent/Button/data';


//import AllNav from "../../Components/@activeComponent/Nav/allNav";
// FORMULAIRE
// import dataall from "./../../Components/@activeComponent/Form/Data";
// import Form from '../../Components/@activeComponent/Form/Formulaire';

console.log(dataButton[0].Radios[0].name);
export default class accordion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: dataAccordion,
            //  datadefault: datadefault,
            tabs: dataTabs,
            //  form: dataall[0],
            //   dataAlert: dataAlert,
            test: "ktk",
        }
        console.log(props)
    }

    render() {
        const content = this.state.data;
        //  const tabs = this.state.tabs;
        //   const formData = this.state.form;


        return (
            <>
                {/* <AllTabs data={tabs} />


                {/* <Form data={formData} /> 
                <Badge data={dataBadge} />

                <Alert data={dataAlert} /> */}
                <Button data={dataButton} dataNum={0} />

                {
                    content.map((content) => (
                        <Allaccordion activeKeydefault={content.activeKeydefault} boolean={content.boolean} isbouton={content.isbouton} eventkey={content.eventKey} linkMess={content.linkMess} linkContent={content.linkContent} />))
                }
            </>
        )
    }



}
