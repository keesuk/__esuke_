import { ProfileFront, ProfileBack } from "./img/_Source/_Profile_Card.jsx"
import { getDate } from "./_Functions.jsx"

import Samsara from "./Projects/Samsara.jsx"
import Sanchak from "./Projects/Sanchak.jsx"
import Pigeon from "./Projects/Pigeon.jsx"
import Seoul from "./Projects/Seoul.jsx"
import Ruler from "./Projects/Ruler.jsx"
import WeDel from "./Projects/WeDel.jsx"
import Gakka from "./Projects/Gakka.jsx"
import WeEat from "./Projects/WeEat.jsx"
import WeCat from "./Projects/WeCat.jsx"

export const portFolioContents = [
    // Gakka, 
    // Sanchak,
    Pigeon, 
    Seoul,
    Samsara,
    WeDel,
    WeCat,  
    // WeEat,
    // Ruler,
]

export const introTag = {
    text : {
        eng : "Welcome! This is my portfolio website and hope you would enjoy with it.\n\nThank You \nKeesuk Lee,",
        kor : "환영합니다! 이 곳은 저의 포트폴리오 웹사이트입니다. 좋은 시간 되세요.\n\n감사합니다\n이기석 드림,"
    },
    date : `${getDate().day}, ${getDate().month}, ${getDate().year}`,
    rotate : -4,
}

export const contact = {
    profile : {
        front: <ProfileFront/>, 
        back : <ProfileBack/>,
    },
    mail: "keesukee@naver.com",
}

export const welcomeMention = {
    text : "Keesuk Lee is a Graphic Designer and Developer living in Seoul, S.Korea.",
    mark : [
        { "title" : "Graphic Designer" },
        { "title" : "Developer" }
    ]
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
export const menuAboutMe = [
    {
        color : "#FFFF2F",
        width : "20",
        content : "",
    },{
        color : "#FFFF2F",
        width : "20",
        content : "",
    },
]
