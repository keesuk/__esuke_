import theme from "../css/_Theme.jsx"

import { getDate } from "./_Functions.jsx"
import { ProfileFront, ProfileBack } from "./img/_Source/_Profile_Card.jsx"

import Pigeon from "./Projects/Pigeon.jsx"
import Samsara from "./Projects/Samsara.jsx"
import Seoul from "./Projects/Seoul.jsx"
import Ruler from "./Projects/Ruler.jsx"
import WeDel from "./Projects/WeDel.jsx"
import Gakka from "./Projects/Gakka.jsx"

export const portFolioContents = [
    Pigeon, 
    Ruler,
    Samsara, 
    Seoul, 
    WeDel,
    // Gakka, 
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
export const menuContact = {
    profile : {
        front: <ProfileFront/>, 
        back : <ProfileBack/>,
    },
    mail: "keesukee@naver.com",
}
export const menuAboutMe = [
    {
        borColor : "#aaaaaa",
        color : "#ffffff",
        width : "18",
        content : "",
        image : "",
    },{
        borColor : "#aaaaaa",
        color : "#ffffff",
        width : "18",
        content : "",
        image : "",
    },{   
        borColor : "#4DC2DC",
        color : "#A7EFFF",
        width : "12",
        content : "",
        image : null,
    },{
        borColor : "#4DC2DC",
        color : "#A7EFFF",
        width : "12",
        content : "",
        image : null,
    },{
        borColor : theme.colorObjs["subMenuBorColor"],
        color : theme.colorObjs["subMenuColor"],
        width : "12",
        content : "",
        image : null,
    },{
        borColor : theme.colorObjs["subMenuBorColor"],
        color : theme.colorObjs["subMenuColor"],
        width : "12",
        content : "",
        image : null,
    },{
        borColor : theme.colorObjs["subMenuBorColor"],
        color : theme.colorObjs["subMenuColor"],
        width : "12",
        content : "",
        image : null,
    },
]

export const subPageIntroTag = {
    text : {
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
    date : `${getDate()[0]}, ${getDate()[1]}, ${getDate()[2]}`,
    rotate : -4,
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