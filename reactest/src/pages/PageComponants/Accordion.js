import React from "react";
import Allaccordion from "../../Components/@activeComponent/Accordion/Accordion"
import data from "../../Components/@activeComponent/Accordion/Data";

//import AllTabs from '../../Components/@activeComponent/Tabs/Alltabs';
//import AllNav from "../../Components/@activeComponent/Nav/allNav";


export default class accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            test: "ktk"
        }
        console.log(props)
    }


    render() {
        const content = this.state.data;

        return (
            <>

                <p>Vous avez cliqué {content[0].eventKey} fois</p>
                {
                    content.map((content) => (
                        <Allaccordion activeKeydefault={content.activeKeydefault} boolean={content.boolean} isbouton={content.isbouton} eventkey={content.eventKey} linkMess={content.linkMess} linkContent={content.linkContent} />))
                }
            </>
        )
    }



}
