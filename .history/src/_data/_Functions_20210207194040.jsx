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

export const yellow = "#ffff2f"
export const deepYellow = "#ccaa66"
export const pink = "#fe70b3"
export const deepPink = "#ee2267"

export const purple = "rgba(200, 100, 250, .8)"
export const red = "rgba(250, 100, 250, .8)"
export const cyan = "rgba(100, 250, 250, .8)"
export const green = "rgba(150, 250, 80, .8)"

export const rainbow = "linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet)"

export const paperTexture = "https://media.istockphoto.com/photos/paper-texture-background-picture-id667786998?b=1&k=6&m=667786998&s=612x612&w=0&h=8lcKr0m8Vs8JUUHGa7Dz7CZa5ln-xsD5on7nLFKRg8c="
export const boardTexture = "https://storage.googleapis.com/webdesignledger.pub.network/WDL/retro-paper-texture.jpg"

export const blueS = (opacity) => `rgba(0, 0, 250, ${opacity})`
export const redS = (opacity) => `rgba(250, 60, 0, ${opacity})`
export const greenS = (opacity) => `rgba(0, 250, 0, ${opacity})`

export const line_1 = ".2rem solid black"
export const line_2 = ".13rem solid"
export const line_3 = "2px solid black"
export const line_4 = "2rem solid rgba(250, 250, 0, .8)"

export const introDiv_introduce = <><mark>Keesuk Lee</mark> is a <mark>graphic Designer</mark> and <mark>Developer</mark> living in Seoul, S.Korea.</>

export const all_div = {
    "LWidth" : "29",
    "RWidth" : "71",
}
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

export function findObject(obj, boolean) {
    let arr = obj

    if (!Array.isArray(arr)) arr = Object.values(arr)
    
    return arr.find((value) => {
        return value.bool === boolean
    })
}

export function Pigeon(){
    return(
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2779.32 411.84">
            <rect style={{fill : "white"}} x="454.54" y="26.66" width="278.51" height="16.3" rx="0.44"/>
            <rect style={{fill : "white"}} x="389.35" y="232.42" width="397.02" height="16.3" rx="0.44"/>
            <rect style={{fill : "white"}} x="13.58" y="41.99" width="242.85" height="16.3" rx="0.44"/>
            <path style={{fill : "white"}} d="M317.13,0h37.36a.53.53,0,0,1,.58.44v411a.53.53,0,0,1-.58.45H317.13a.53.53,0,0,1-.58-.45V.44A.53.53,0,0,1,317.13,0Z"/>
            <path style={{fill : "white"}} d="M507.92,174.37h37.21c.36,0,.65.2.65.44V238.4c0,.24-.29.44-.65.44H507.92c-.36,0-.66-.2-.66-.44V174.81C507.26,174.57,507.56,174.37,507.92,174.37Z"/>
            <path style={{fill : "white"}} d="M633.57,167.67h37.21c.36,0,.65.2.65.45V238.4c0,.24-.29.44-.65.44H633.57c-.36,0-.66-.2-.66-.44V168.12C632.91,167.87,633.21,167.67,633.57,167.67Z"/>
            <path style={{fill : "white"}} d="M0,327l24.32,30a.43.43,0,0,0,.66.07c25.12-23.79,49.18-46.76,122.23-44,53.3,2,110.52-10.79,132.5-61.13.09-.19,0-.21.09-.41a.44.44,0,0,0-.18-.33c-.12-.05-.34.13-.37.18a.78.78,0,0,1-.14.27c-15.16,21-47.16,51-135.9,40.23C84.9,284.84,39,288.91,0,327"/>
            <path style={{fill : "white"}} d="M417,174.79a.09.09,0,0,1,0-.17c150.31-47,155.83-133.37,155.83-133.37h57.77C591.39,148.48,434.81,178.37,427.92,179.9Z"/>
            <path style={{fill : "white"}} d="M593.89,81.1s87.29,4,118.66,98.43a.28.28,0,0,0,.45.11l37.31-29.7a.45.45,0,0,0,.09-.6c-3.65-5.31-47.35-68.5-147.94-76.41Z"/>
            <rect style={{fill : "white"}} x="293.85" width="41.96" height="8.57"/>
            <path style={{fill : "white"}} d="M304.81,8.57s12.26.47,11.74,14.76h14.56V8.57Z"/>
            <g>
                <path style={{fill : "white"}} d="M754.06,379.25h-263V280.66a.62.62,0,0,0-.56-.67H449.77a.44.44,0,0,0-.44.44v96.76a18.35,18.35,0,0,0,18.35,18.35H754.06a.44.44,0,0,0,.44-.44V379.69A.44.44,0,0,0,754.06,379.25Z"/>
                <rect style={{fill : "white"}} x="426.63" y="279.99" width="41.96" height="8.57"/>
                <path style={{fill : "white"}} d="M437.6,288.56s12.26.47,11.74,14.76H463.9V288.56Z"/>
            </g>
            <path style={{fill : "white"}} d="M92.77,80.78c0-.24-.29-.44-.65-.44H54.91c-.36,0-.66.2-.66.44V284a160.92,160.92,0,0,1,38.52-5.79Z"/>
            <path style={{fill : "white"}} d="M177.88,74.41h37.21c.36,0,.66.2.66.45V300.63c0,.24-.3.44-.66.44H177.88c-.36,0-.65-.2-.65-.44V74.86C177.23,74.61,177.52,74.41,177.88,74.41Z"/>
            <path style={{fill : "white"}} d="M2741.05,411.06c-104.41,0-90.56-149.13-92.32-199.07V197.21c0-96.13-20.34-138.8-56.57-149.26a77.69,77.69,0,0,0-27.57-2.36v350.3c0,7.41.85,10,10.1,10H2580v5.15h-42.29v-5.15H2543c9.54,0,10.1-2.41,10.1-10V15.59c0-6.63-1.92-8-7.41-8h-8v-5h36.65c88.12,0,107.43,85,107.43,198.9V218c-.12,58.35-11.56,175.81,70.65,177.33V15.59c0-5.56-1.73-8-6-8H2737v-5h42.29v5h-9.38c-4.12,0-6,2.34-6,8V411.06Z"/>
            <path style={{fill : "white"}} d="M1332.62,187.7c-16.9,10.73-39.87,16.05-59.89,16.05H1213.8V10.4h67.44c14.79,0,32.65,3.34,45.72,10.27,22.12,11.74,46.9,36.77,46.9,90,0,40.63-20.62,63.89-41.24,77M1296.13,2.6h-138v5h15.06c3.95,0,6,2.32,6,8v376c0,8.71,1,13.6-10.09,14.28h-11v5.15h76.8v-5.15h-11c-10.67-.47-10.1-5.57-10.1-14.28,0-1.55,0-180,0-180l68.89,0A157.59,157.59,0,0,0,1340.24,201c30.6-12,65.55-37.93,65.55-90C1405.79,4.27,1296.13,2.6,1296.13,2.6"/>
            <path style={{fill : "white"}} d="M1415.62,2.6v5h15.06c4.59,0,6,2.84,6,7.64V391.63c0,8.71-.18,14.28-10.1,14.28h-11v5.15h76.8v-5.15h-11c-9.41,0-10.1-5.57-10.1-14.28V15.2c0-4.43,1.51-7.64,6-7.64h15.06v-5Z"/>
            <path style={{fill : "white"}} d="M1909.52,158.07c-21.67,23.87-32.5,35.65-75.54,32.2-29.76-2.39-89.68-14.94-119.64,37.26a.29.29,0,0,0,0,.35l28.88,30c.07.08.23.07.24,0s13.8-51,76-51c31.9,0,49.75-.28,65.28-17.51,13.22,53.48,4.25,119.22-43.83,162.38-89.24,80.1-207.09,15.6-247.12-23.86-73.59-72.53-91.18-186.1-18.11-259.16,28-28,62.83-45.28,99-50.09,83.69-10.15,148.92,45.75,172.69,88V18.53h-6.48V33.27c0,7.48-3,11.37-9.19,6.16C1798.5,14.64,1759.54.14,1714.2.14c-114,0-206.36,92.68-205.85,206.8.51,113.48,94,205.19,207.51,204.9C1834.84,411.52,1930.46,308.38,1909.52,158.07Z"/>
            <path style={{fill : "white"}} d="M2125.13,46.66h6.37V2.6H1924.11v5h15.06c4.89.37,5.7,2,6,8V390.21c0,8.71-.89,15.7-13.29,15.7h-7.77v5.24H2131.5V367.09h-6.37v14.77c0,18.7-13.44,19.59-19.86,19.79H1979.85V200.9h84.48c14.82,0,13.05,26.79,13.21,26.79h6.08V164.47h-6.08c-.16,0,2.36,27.21-13.21,27.21h-84.48V11.82h125.74c6.69.23,19.54.82,19.54,16.94Z"/>
            <path style={{fill : "white"}} d="M2461.17,344.15c-71.37,71.37-188.78,54.75-260.16-16.61s-87.81-188.62-16.44-260,188.64-54.78,260,16.59,88,188.64,16.59,260M2322.87,0C2209.19,0,2117,92.16,2117,205.85s92.17,205.85,205.85,205.85,205.85-92.16,205.85-205.85S2436.56,0,2322.87,0"/>
        </svg>
    )
}