import Pigeon from "../img/Pigeon.png"
import Ruler from "../img/Ruler.png"
import Onvoyage from "../img/Onvoyage.png"


export const line_1 = ".12em solid black"
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
        "title" : "About Me", 
        "color": "#ffff22"
    }, {
        "title" : "Contact", 
        "color": "hotpink"
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