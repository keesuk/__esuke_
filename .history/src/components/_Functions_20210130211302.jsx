import Pigeon from "../img/Pigeon.png"
import Ruler from "../img/Ruler.png"
import Onvoyage from "../img/Onvoyage.png"

import AboutMe from './AboutMe';
import Contact from './Contact';


export const line_1 = ".13em solid black"
export const line_2 = ".12em solid black"
export const line_3 = ".12em solid black"
export const rainbow = "linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet)"

export const introDiv_introduce = "Keesuk Lee is a graphic Designer and Developer living in Seoul, S.Korea."

export const all_portFolio = [
    {
        "title": "Pigeon",
        "category": "Editorial",
        "color" : "hotpink",
        "img" : Pigeon,
    },{
        "title": "Ruler",
        "category": "Editorial",
        "color" : "blue",
        "img" : Ruler,
    },{
        "title": "on Voyage",
        "category": "VR UI/UX",
        "color" : "white",
        "img" : Onvoyage,
    },
]

export const projects_introDiv = [
    {
        "title" : "Instagram", 
        "link" : "https://www.instagram.com/keesukeeeeee/", 
        "color": "#F58529, #DD2A7B, #8134AF, #515BD4"
    }, {
        "title" : "Facebook", 
        "link" : "https://www.facebook.com/keesuk94/", 
        "color": "#3360FF, #5C79FF, #9EC9FF"
    }
]

export const app_menu = [
    {   
        "component" : <AboutMe/>,
        "title" : "About Me", 
        "color": "#ffff22",
        "left" : "7.17em",
        "leftText" : "9.6em",
        "height" : "3.8em",
        "margin" : "-5.1em",
        "marginText" : "-6em",
        "width" : "5em"
    }, {
        "component" : <Contact/>,
        "title" : "Contact", 
        "color": "hotpink",
        "left" : "3.6em",
        "leftText" : "2.3em",
        "height" : "7.5em",
        "margin" : "-8.8em",
        "marginText" : "-13.3em",
        "width" : "1.46em"
    }
]


export function randomize(items) {
    const item = items[Math.floor(Math.random() * items.length)]
    return item
}

export function change(items) {
    let i = 0

    function changeRe(items){
        i = (i+1) % items.length
        return items[i]
    }
    return changeRe(items)
}