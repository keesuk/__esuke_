import Pigeon from "../img/Pigeon.png"
import Ruler from "../img/Ruler.png"
import Onvoyage from "../img/Onvoyage.png"
import Gmf from "../img/Gmf.png"
import Samsara from "../img/Samsara.png"

export const yellow = "#ffff2f"
export const deepYellow = "#ccaa66"

export const purple = "rgba(200, 100, 250, .8)"
export const red = "rgba(250, 100, 250, .8)"
export const cyan = "rgba(100, 250, 250, .8)"
export const green = "rgba(150, 250, 80, .8)"

export const pink = "hotpink"
export const rainbow = "linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet)"

export const paperTexture = "https://media.istockphoto.com/photos/paper-texture-background-picture-id667786998?b=1&k=6&m=667786998&s=612x612&w=0&h=8lcKr0m8Vs8JUUHGa7Dz7CZa5ln-xsD5on7nLFKRg8c="

export const blueS = (opacity) => `rgba(0, 0, 250, ${opacity})`
export const redS = (opacity) => `rgba(250, 60, 0, ${opacity})`
export const greenS = (opacity) => `rgb(0, 250, 0, ${opacity})`

export const line_1 = ".19em solid black"
export const line_2 = ".13em solid"
export const line_3 = "2px solid black"
export const line_4 = ".15em dotted black"

export const introDiv_introduce = "Keesuk Lee is a graphic Designer and Developer living in Seoul, S.Korea."

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
    },{
        "title": "GMF Festival",
        "category": "Branding",
        "color" : "#30a6a6",
        "img" : Gmf,
    },{
        "title": "Samsara",
        "category": "Poster",
        "color" : "purple",
        "img" : Samsar,
    },
]
export const app_menu = [
    {   
        "title" : "AboutMe", 
        "color": yellow,
        "left" : "122px",
        "leftText" : "86px",
        "height" : "66px",
        "margin" : "-95px",
        "marginText" : "-57px",
        "width" : "90px"
    }, {
        "title" : "Contact", 
        "color": pink,
        "left" : "48px",
        "leftText" : "13px",
        "height" : "139px",
        "margin" : "-168px",
        "marginText" : "-130px",
        "width" : "16px"
    }
]
export const app_aboutMe = [
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

export function move(arr, from, to){
    return arr.splice(to, 0, arr.splice(from, 1)[0])
}