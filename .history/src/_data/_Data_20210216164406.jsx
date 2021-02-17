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


export const introDiv_introduce = <>
    <mark>Keesuk Lee</mark> is a <mark>graphic Designer</mark> and <mark>Developer</mark> living in Seoul, S.Korea.
</>

export const mentInEmptyCell = [
    "I'm thinking null", "It's been 1month..", "I love spongeBob..♥", "tOO mUCH iNFORMATION", "making useless words", "lololololo"
]
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
    title : "Pigeon Brand Book:",
    category : "Editorial",
    logo: <PigeonLogo/>,
    color : {
        "main" : colors["pigeonColor"],
        "subColor" : colors["hotPink"],
    },
    pageStyle : [
        "· intro", 
        "· output"
    ],
    marks : {
        "0" : {
            "title" : "festival",
            "num" : "1",
            "text" : "festival is that they are temporary and provide a similar experience to consumers",
        }
    },
    text : {
        "0" : {
            "eng" : "is that they are temporary and provide a similar experience to consumers, such as similar guests, every year. This happens because you cannot help but consider realistic aspects such as ticket power and customer base. Branded in 2017, the Grand Mint Festival not only had such chronic problems, but also had a clear lack of identity and expansion. In addition, the concept of the 2017 Grand Mint Festival was considered to be insufficient branding to convey the originally intended",
            "kor" : "페스티벌들의 한계는 한시적이고, 매년 비슷한 방식, 비슷한 게스트 등 소비자에게 유사할 수 밖에 없는 경험을 제공한다는 것입니다. 이는 티켓파워, 고객층 유지 등 현실적인 부분을 고려하지 않을 수 없기 때문에 발생합니다. 2017년 브랜딩된 ‘그랜드 민트 페스티벌’은 그러한 고질적인 문제를 담고 있었습니다. 인디밴드 플랫폼 민트페이퍼 산하의 페스티벌이고, 2007년 인디밴드 라인업으로 진행했던 체제와 다르게 2017년이 된 지금에서는 장르 분문 다양한 아티스트들이 출현 하고 있습니다."
        },
    },
    image : {
        "0" : Pigeon_Content1,
        "1" : Pigeon_Content2,
        "2" : Pigeon_Content3,
        "3" : Pigeon_Content4,
        "4" : Pigeon_Content5,
        "5" : Pigeon_Content6,
        "6" : Pigeon_Content7,
    }
}