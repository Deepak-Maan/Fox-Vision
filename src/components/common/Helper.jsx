import { Facebook, Instagram, PlatformIntegration, SoftwareDevelopment, WebsiteSolution } from "./Icons";

//------------------FOOTER---------------
export const footerIcons = [
    {
        link: "https://www.facebook.com/",
        footersvg: <Facebook/>,
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