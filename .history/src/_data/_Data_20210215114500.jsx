import Pigeon from "../pages/_Pigeon.jsx"
import PigeonImg from "./img/Pigeon.png"
import PigeonLogo from "./img/_PigeonLogo.jsx";
import Pigeon_Content1 from "./img/Pigeon_Content/Pigeon-12.png"
import Pigeon_Content2 from "./img/Pigeon_Content/Pigeon-13.png"
import Pigeon_Content3 from "./img/Pigeon_Content/Pigeon-14.png"
import Pigeon_Content4 from "./img/Pigeon_Content/Pigeon-15.png"
import Pigeon_Content5 from "./img/Pigeon_Content/Pigeon-16.png"
import Pigeon_Content6 from "./img/Pigeon_Content/Pigeon-17.png"
import Pigeon_Content7 from "./img/Pigeon_Content/Pigeon-18.png"


import Ruler from "../pages/_Ruler.jsx"
import RulerImg from "./img/Ruler.png"

import Onvoyage from "../pages/_Onvoyage.jsx"
import OnvoyageImg from "./img/Onvoyage.png"

import Gmf from "../pages/_Gmf.jsx"
import GmfImg from "./img/Gmf.png"

import Samsara from "../pages/_Samsara.jsx"
import SamsaraImg from "./img/Samsara.png"

import { randomize } from "./_Functions.jsx";
import { colors } from "../css/_Color.jsx";


export const introDiv_introduce = <><mark>Keesuk Lee</mark> is a <mark>graphic Designer</mark> and <mark>Developer</mark> living in Seoul, S.Korea.</>
export const projects_link = [
    {
        "title" : "Instagram", 
        "link" : "https://www.instagram.com/keesukeeeeee/", 
        "color": colors["instagramColor"]
    },{
        "title" : "Github", 
        "link" : "https://github.com/keesuk", 
        "color": colors["githubColor"],
    }
]
export const all_portFolio = [
    {
        "title": "Pigeon",
        "category": "Editorial",
        "color" : colors["hotPink"],
        "img" : PigeonImg,
        "componentR" : Pigeon,
        "componentL" : null,
    },{
        "title": "Samsara",
        "category": "Poster",
        "color" : colors["purpleDeep"],
        "img" : SamsaraImg,
        "componentR" : Samsara,
        "componentL" : null,
    },{
        "title": "Ruler",
        "category": "Editorial",
        "color" : colors["blue"],
        "img" : RulerImg,
        "componentR" : Ruler,
        "componentL" : null,
    },{
        "title": "on Voyage",
        "category": "VR UI/UX",
        "color" : "#ffffff",
        "img" : OnvoyageImg,
        "componentR" : Onvoyage,
        "componentL" : null,
    },{
        "title": "GMF Festival",
        "category": "Branding",
        "color" : colors["mint"],
        "img" : GmfImg,
        "componentR" : Gmf,
        "componentL" : null,
    }
]
export const menu_menu = [
    {   
        "title" : "AboutMe", 
        "color": colors["yellow"],
        "deepColor": colors["deepYellow"],
        "left" : "134px",
        "leftText" : "101px",
        "height" : "67px",
        "margin" : "-101px",
        "marginText" : "-68px",
        "width" : "102px"
    },{
        "title" : "Contact", 
        "color": colors["pink"],
        "deepColor": colors["deepPink"],
        "left" : "48px",
        "leftText" : "15px",
        "height" : "150px",
        "margin" : "-184px",
        "marginText" : "-150px",
        "width" : "16px"
    }
]
export const menu_aboutMe = [
    {
        "content" : "",
        "width" : "300px",
        "color" : "white",
        "borColor" : "#aaaaaa",
        "tape" : {
            "angle" : randomize([-30, -20, -10, -5, 2, 10, 20, 30]),
            "color" : randomize([colors["purple"], colors["red"]]),
            "length" :"80px",
        }
    },{
        "content" : "",
        "width" : "300px",
        "color" : "white",
        "borColor" : "#aaaaaa",
        "tape" : {
            "angle" : randomize([-36, -27, -13, -7, 5, 13, 27, 36]),
            "color" : randomize([colors["cyan"], colors["green"]]),
            "length" : "160px",
        }
    },{   
        "content" : "",
        "width" : "200px",
        "color" : colors["yellow"],
        "borColor" : colors["deepYellow"],
        "tape" : null,
    },{
        "content" : "",
        "width" : "200px",
        "color" : colors["yellow"],
        "borColor" : colors["deepYellow"],
        "tape" : null,
    },{
        "content" : "",
        "width" : "200px",
        "color" : colors["yellow"],
        "borColor" : colors["deepYellow"],
        "tape" : null,
    },{
        "content" : "",
        "width" : "200px",
        "color" : colors["yellow"],
        "borColor" : colors["deepYellow"],
        "tape" : null,
    },{
        "content" : "",
        "width" : "200px",
        "color" : colors["yellow"],
        "borColor" : colors["deepYellow"],
        "tape" : null,
    },{
        "content" : "",
        "width" : "200px",
        "color" : colors["yellow"],
        "borColor" : colors["deepYellow"],
        "tape" : null,
    }
]

export const PigeonContents = {
    pageStyle : [
        "· intro", 
        "· output"
    ],
    marks : [
        {
            title : "festival",
            num : "1",
            content : "festival is that they are temporary and provide a similar experience to consumers",
        },
    ],
    title : "Pigeon Brand Book:",
    category : "Editorial",
    color : {
        main : colors["pigeonColor"],
        subColor : colors["hotPink"],
    },
    logo: <PigeonLogo/>,

}