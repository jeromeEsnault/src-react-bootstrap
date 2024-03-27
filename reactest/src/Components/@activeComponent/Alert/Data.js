const dataAlert = [
    {
        // mettre obligatoirement une clé de valeur
        key: 1,
        // choisir quel présentation afficher
        heading: false,
        link: false,
        isText1: false,
        isText2: false,
        ishr: false,
        isbutton: false,
        dismissible: false,
        // les class pour le design
        className: "mb-0",
        classHr: null,
        variant: "color",
        classNameButton: "d-flex justify-content-end",
        variantButton: "outline-success",

        // tout le contenu de l'alert
        href: "#", // lien de lalert si il y est.
        AlertHeading: 'Hey, nice to see you', // titre de l'alert.
        AlertLink: 'an example link', // affichage du lien
        text1: ' Aww yeah, you successfully read this important alert message. This' +
            'example text is going to run a bit longer so that you can see how' +
            'spacing within an alert works with this kind of content.', // premier text afficher

        text2: 'Whenever you need to, be sure to use margin utilities to keep things' +
            'nice and tidy.',


        messageButtonClose: 'Close me y all!', // button de fermeture
        messageButton: 'Show Alert',// button d'ouverture
    }
]

export default dataAlert;
