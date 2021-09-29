import theme from "../css/_Theme.jsx"

import { getDate } from "./_Functions.jsx"
import { ProfileFront, ProfileBack } from "./img/_Source/_Profile_Card.jsx"

import Pigeon from "./Projects/Pigeon.jsx"
import Samsara from "./Projects/Samsara.jsx"
import Onvoyage from "./Projects/Onvoyage.jsx"
import Seoul from "./Projects/Seoul.jsx"
import Ruler from "./Projects/Ruler.jsx"
import WeDel from "./Projects/WeDel.jsx"
import Gakka from "./Projects/Gakka.jsx"

export const portFolioContents = [
    Pigeon, 
    Samsara, 
    Ruler, 
    Onvoyage, 
    Gakka,
    WeDel,
    Seoul, 
]

export const welcomeMention = {
    "text" : "Keesuk Lee is a Graphic Designer and Developer living in Seoul, S.Korea.",
    "mark" : [
        { 
            "title" : "Graphic Designer"
        },{ 
            "title" : "Developer"
        }
    ]
}
export const mentInEmptyCell = [
    "Empty Cell",
    "Empty Cell",
    "Empty Cell",
    "Empty Cell",
]
export const menuButton = {   
    "title" : "About", 
    "color": theme.colorObjs["subMenuAboutMeColor"],
    "line" : theme.lines["subMenuAboutMeLine"],
    "order" : 1,
    "content" : [
        "About", 
        "Contact"
    ]
}
export const menuMenu = [
    {   
        "title" : "About", 
        "color": theme.colorObjs["subMenuAboutMeColor"],
        "line" : theme.lines["subMenuAboutMeLine"],
        "order" : 1,
    },{
        "title" : "Contact", 
        "color": theme.colorObjs["subMenuContactColor"],
        "line" : theme.lines["subMenuContactLine"],
        "order" : 2,
    }
]
export const menuAboutMe = [
    {
        "content" : "",
        "width" : "18rem",
        "color" : "#ffffff",
        "borColor" : "#aaaaaa",
        "img" : "",
    },{
        "content" : "",
        "width" : "18rem",
        "color" : "#ffffff",
        "borColor" : "#aaaaaa",
        "img" : "",
    },{   
        "content" : "",
        "width" : "12rem",
        "color" : "#A7EFFF",
        "borColor" : "#4DC2DC",
        "img" : null,
    },{
        "content" : "",
        "width" : "12rem",
        "color" : "#A7EFFF",
        "borColor" : "#4DC2DC",
        "img" : null,
    },{
        "content" : "",
        "width" : "12rem",
        "color" : theme.colorObjs["subMenuColor"],
        "borColor" : theme.colorObjs["subMenuBorColor"],
        "img" : null,
    },{
        "content" : "",
        "width" : "12rem",
        "color" : theme.colorObjs["subMenuColor"],
        "borColor" : theme.colorObjs["subMenuBorColor"],
        "img" : null,
    },{
        "content" : "",
        "width" : "12rem",
        "color" : theme.colorObjs["subMenuColor"],
        "borColor" : theme.colorObjs["subMenuBorColor"],
        "img" : null,
    },
]
export const menuContact = {
    "front" : <ProfileFront/>, 
    "back" : <ProfileBack/>,
    "mail" : "keesukee@naver.com",
}
export const subPageIntroTag = {
    "text" : {
        "eng" : <>
            Welcome! Happy that you spend precious time to me. And I hope you would enjoy.<br/><br/>
            Thank You<br/>
            Sincerely,
            </>,
        "kor" : <>
            환영합니다. 시간내어 들러주셔서 기쁩니다. 좋은 시간 되세요.<br/><br/>
            감사합니다.<br/>
            진심으로,
            </>
    },
    "date" : `${getDate()[0]}, ${getDate()[1]}, ${getDate()[2]}`,
    "rotate" : -4,
}
export const otherSiteLink = [
    {
        title: "Instagram", 
        link: "https://www.instagram.com/keesukeeeeee/", 
        color: "#F58529, #DD2A7B, #8134AF, #515BD4",
    },{
        title: "Github", 
        link: "https://github.com/keesuk", 
        color: "#216e39, #30a14e, #40c463",
    }
]