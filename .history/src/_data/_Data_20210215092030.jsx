import Pigeon from "../pages/_Pigeon.jsx"
import Ruler from "../pages/_Ruler.jsx"
import Onvoyage from "../pages/_Onvoyage.jsx"
import Gmf from "../pages/_Gmf.jsx"
import Samsara from "../pages/_Samsara.jsx"

import PigeonImg from "./img/Pigeon.png"
import RulerImg from "./img/Ruler.png"
import OnvoyageImg from "./img/Onvoyage.png"
import GmfImg from "./img/Gmf.png"
import SamsaraImg from "./img/Samsara.png"

export const introDiv_introduce = <><mark>Keesuk Lee</mark> is a <mark>graphic Designer</mark> and <mark>Developer</mark> living in Seoul, S.Korea.</>
export const projects_link = [
    {
        "title" : "Instagram", 
        "link" : "https://www.instagram.com/keesukeeeeee/", 
        "color": "#F58529, #DD2A7B, #8134AF, #515BD4"
    },{
        "title" : "Github", 
        "link" : "https://github.com/keesuk", 
        "color": "#216e39, #30a14e, #40c463"
    }
]
export const all_portFolio = [
    {
        "title": "Pigeon",
        "category": "Editorial",
        "color" : "hotpink",
        "img" : PigeonImg,
        "componentR" : Pigeon,
        "componentL" : null,
    },{
        "title": "Samsara",
        "category": "Poster",
        "color" : "purple",
        "img" : SamsaraImg,
        "componentR" : Samsara,
        "componentL" : null,
    },{
        "title": "Ruler",
        "category": "Editorial",
        "color" : "blue",
        "img" : RulerImg,
        "componentR" : Ruler,
        "componentL" : null,
    },{
        "title": "on Voyage",
        "category": "VR UI/UX",
        "color" : "white",
        "img" : OnvoyageImg,
        "componentR" : Onvoyage,
        "componentL" : null,
    },{
        "title": "GMF Festival",
        "category": "Branding",
        "color" : "#3EB489",
        "img" : GmfImg,
        "componentR" : Gmf,
        "componentL" : null,
    }
]
export const menu_menu = [
    {   
        "title" : "AboutMe", 
        "color": yellow,
        "deepColor": deepYellow,
        "left" : "134px",
        "leftText" : "101px",
        "height" : "67px",
        "margin" : "-101px",
        "marginText" : "-68px",
        "width" : "102px"
    },{
        "title" : "Contact", 
        "color": pink,
        "deepColor": deepPink,
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
        "borColor" : "#aaa",
        "tape" : {
            "angle" : randomize([-30, -20, -10, -5, 2, 10, 20, 30]),
            "color" : randomize([purple, red]),
            "length" :"80px",
        }
    },{
        "content" : "",
        "width" : "300px",
        "color" : "white",
        "borColor" : "#aaa",
        "tape" : {
            "angle" : randomize([-36, -27, -13, -7, 5, 13, 27, 36]),
            "color" : randomize([cyan, green]),
            "length" : "160px",
        }
    },{   
        "content" : "",
        "width" : "200px",
        "color" : yellow,
        "borColor" : deepYellow,
        "tape" : null,
    },{
        "content" : "",
        "width" : "200px",
        "color" : yellow,
        "borColor" : deepYellow,
        "tape" : null,
    },{
        "content" : "",
        "width" : "200px",
        "color" : yellow,
        "borColor" : deepYellow,
        "tape" : null,
    },{
        "content" : "",
        "width" : "200px",
        "color" : yellow,
        "borColor" : deepYellow,
        "tape" : null,
    },{
        "content" : "",
        "width" : "200px",
        "color" : yellow,
        "borColor" : deepYellow,
        "tape" : null,
    },{
        "content" : "",
        "width" : "200px",
        "color" : yellow,
        "borColor" : deepYellow,
        "tape" : null,
    }
]