import { Facebook, Instagram, PlatformIntegration, SoftwareDevelopment, WebsiteSolution, CorporateIdentity, MehrBtnArrow, Redesign, WebDesign, DigitalMarketing, DruckStick, Beschriftungen } from "./Icons";
import wireFrame from "../../asstes/images/webp/offer/wireFraming.webp"
import webDesign from "../../asstes/images/webp/offer/webDesign.webp"
import appDesign from "../../asstes/images/webp/offer/appDesign.webp"
import logoDesign from "../../asstes/images/webp/offer/logoDesign.webp"

import Palokaag from "../../asstes/images/webp/portfolio/palokaag.png";
//------------------FOOTER---------------
export const footerIcons = [
    {
        link: "https://www.facebook.com/",
        footersvg: <Facebook />,
        label: "facebook",
    },
    {
        link: "https://www.instagram.com/accounts/login/?hl=en",
        footersvg: <Instagram />,
        label: "instagram",
    },
]
//----------------- HOW WE WORK ------------------------
export const howWeWorksCard = [
    {
        worksvg: <PlatformIntegration />,
        title: "App Platform Intergration",
        description:
            "Visual graphic design is the art of using visual elements, such as images, typography, color, and layout, to convey a message, tell a story, or evoke emotions.",
    },
    {
        worksvg: <SoftwareDevelopment />,
        title: "Software Tools Development",
        description:
            "Visual graphic design is the art of using visual elements, such as images, typography, color, and layout, to convey a message, tell a story, or evoke emotions.",
    },
    {
        worksvg: <WebsiteSolution />,
        title: "Teach Website Solution",
        description:
            "Visual graphic design is the art of using visual elements, such as images, typography, color, and layout, to convey a message, tell a story, or evoke emotions.",
    },
];
//------------------ANGEBOT----------------
export const angebotCardList = [
    {
        angebotsvg: <CorporateIdentity />,
        title: "Corporate Identity",
        description:
            "Viele verbinden damit in erster Linie Logo und Farben. Corporate Identity ist weitaus mehr...",
        cardBtn: "Mehr",
        Btnarrow: <MehrBtnArrow />,
    },
    {
        angebotsvg: <Redesign />,
        title: "Redesign",
        description:
            "Sie haben durch Ihren Service und Ihre Dienstleistungen bereits einen hohen Bekanntheitsgrad erreicht und möchten..",
        cardBtn: "Mehr",
        Btnarrow: <MehrBtnArrow />,
    },
    {
        angebotsvg: <WebDesign />,
        title: "Web design",
        description:
            "Zeitgemässe und schönes Design macht Kunden neugierig und weckt bereits innert kurzer Zeit mehr Vertrauen...",
        cardBtn: "Mehr",
        Btnarrow: <MehrBtnArrow />,
    },
    {
        angebotsvg: <DigitalMarketing />,
        title: "Digital Marketing",
        description:
            "Digitales Auftreten war für Unternehmen noch nie wichtiger als jetzt. Kunden, Partner und Lieferanten setzen von Tag zu Tag auf digitale Lösungen...",
        cardBtn: "Mehr",
        Btnarrow: <MehrBtnArrow />,
    },
    {
        angebotsvg: <DruckStick />,
        title: "Arbeitsbekleidungen - Druck & Stick",
        description:
            "Visual graphic design is the art of using visual elements, such as images, typography, color, and layout.",
        cardBtn: "Mehr",
        Btnarrow: <MehrBtnArrow />,
    },
    {
        angebotsvg: <Beschriftungen />,
        title: "Beschriftungen",
        description:
            "Lorem ipsum dolor sit amet consectetur. Urna feugiat et morbi risus nibh in sed. Felis nisl bibendum ut velit amet pharetra.",
        cardBtn: "Mehr",
        Btnarrow: <MehrBtnArrow />,
    },
]
//----------------- PORTFOLIO ------------------------
export const portfolioData = [
    {
        id: 1,
        image: Palokaag,
        name: "Anton Paloka",
        description: "Facility Management",
    },
    {
        id: 2,
        image: Palokaag,
        name: "Gut versichert ins leben.",
        description: "Wir helfen ihnen dabei",
    },
    {
        id: 3,
        image: Palokaag,
        name: "Anton Paloka",
        description: "Geschäftsführer",
    },
    {
        id: 4,
        image: Palokaag,
        name: "Mhill Paloka",
        description: "Leiter Administration",
    },
    {
        id: 5,
        image: Palokaag,
        name: "Id nisi elementum",
        description: "Lorem ipsum dolor  consectetur.",
    },
    {
        id: 6,
        image: Palokaag,
        name: "Augue tincidunt ipsum",
        description: "Ipsum dolor sit amet.",
    },
    {
        id: 7,
        image: Palokaag,
        name: "Amet consectetur Consequat",
        description: "Lorem sit amet consectetur.",
    },
    {
        id: 8,
        image: Palokaag,
        name: "Nunc tellus sed auctor nulla",
        description: "dolor sit amet consectetur.",
    },
    {
        id: 9,
        image: Palokaag,
        name: "Egestas faucs aliquam libero",
        description: "Lorem ipsum dolor ",
    },
    {
        id: 10,
        image: Palokaag,
        name: "Amet consectetur Consequat",
        description: "Lorem ipsum.",
    },
    {
        id: 11,
        image: Palokaag,
        name: "Nunc tellus sed auctor  nulla",
        description: "Lorem ipsum consectetur.",
    },

];
// -------------------OfferCards-------------------------//
export const offerCards = [
    {
        img: wireFrame,
        description: "Wireframing",
    },
    {
        img: webDesign,
        description: "Web Design",
    },
    {
        img: logoDesign,
        description: "Logo Design",
    },
    {
        img: appDesign,
        description: "App Design",
    },
]

// -----------------------DesignStrategy Data-----------------------//

export const designStrategyData = [
    {
        id: "1.",
        heading: "Understanding Your Vision",
        para: "We start by deeply understanding your goals, brand identity, and the needs of your target audience.",
    },
    {
        id: "2.",
        heading: "Research and Analysis",
        para: "Our team conducts thorough research, including market and competitor analysis, to inform our design decisions.",
    },
    {
        id: "3.",
        heading: "Wireframing and Prototyping",
        para: "We create wireframes and interactive prototypes to map out the layout and functionality of your project.",
    },
    {
        id: "4.",
        heading: "User Testing",
        para: "Real users provide invaluable feedback to refine the design, ensuring it aligns with user expectations.",
    },
]