// import VueAccordion from './pages/accordion/accordion';
// import Vuebutton from './pages/Button/Button';
// import VueTabs from './pages/tabs/tabs';
// import TabsInterface from 'reactest/src/interface/home';
// export const homeTabs = [
//     {
//         "Defaultkey": "1",
//         "id": "tabs-id",
//         classcomponant=[{
//             "classContainer": "mb-3",
//             "variant": "pills",
//             "classNav": "flex-column",

//         }],
//         propcontent=[
//             {
//                 "key": "1",
//                 "linkMes": "Accordeon",
//                 "page": <VueAccordion />,
//             }


//         ]
//     }

// ]

interface Tabs {
    Defaultkey: string,
    id: string,
    classContainer: string,
    variant: string,
    classNav: string,
    key: string,
    linkMes: string,
    page: object,
}

export default Tabs;
