import theme from "../css/_Theme.jsx"

import { getDate } from "./_Functions.jsx"
import { ProfileFront, ProfileBack } from "./img/_Source/_Profile_Card.jsx"

import PigeonImg from "../img/Pigeon.png"
import RulerImg from "./img/Ruler.png"
import OnvoyageImg from "./img/Onvoyage.png"
import SamsaraImg from "./img/Samsara.png"
import SeoulImg from "./img/Seoul.png"
import WeDelImg from "./img/Wedel.png"
import GakkaImg from "./img/Gakka.png"


export const welcomeMention = {
    "title" : "Keesuk Lee is a Graphic Designer and Developer living in Seoul, S.Korea.",
    "mark" : [{
        "title" : "Graphic Designer"
    },{
        "title" : "Developer"
    }]
}
export const otherSiteLink = [
    {
        "title" : "Instagram", 
        "link" : "https://www.instagram.com/keesukeeeeee/", 
        "color": theme.colorObjs["instagramColor"]
    },{
        "title" : "Github", 
        "link" : "https://github.com/keesuk", 
        "color": theme.colorObjs["githubColor"],
    }
]


export const mentInEmptyCell = [
    "Empty Cell","Empty Cell","Empty Cell","Empty Cell",
]
export const menuButton = {   
        "title" : "About", 
        "color": theme.colorObjs["subMenuAboutMeColor"],
        "line" : theme.lines["subMenuAboutMeLine"],
        "order" : 1,
        "content" : ["About", "Contact"]
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
        "color" : "white",
        "borColor" : "#aaaaaa",
        "img" : "",
    },{
        "content" : "",
        "width" : "18rem",
        "color" : "white",
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
    "sign" : null,
    "hoverColor" : "hotpink",
    "rotate" : -4,
}

export const portFolioContents = {
    "Pigeon" : {
        "title": "Pigeon",
        "category": "Editorial",
        "mainColor" : theme.colorObjs["pigeonSubColor"],
        "backColor" : theme.colorObjs["pigeonBackColor"],
        "textColor" : theme.colorObjs["pigeonTextColor"],
        "year" : "2019",
        "img" : PigeonImg,
        "componentR" : Pigeon,
        "componentL" : null,
        "tag" : {
            "Assignment" : {
                "eng" : "Lettering a new logo of Pigeon brand, Creating its brand book.",
                "kor" : "피죤의 새로운 로고 레터링과 브랜드북을 제작하였다.",
            },
            "Project Includes" : ["Logo", "Editorial", "Infographic"],
            "Information": "Sep 2019 / contribution: 100%",
        }
    },
    "Samsara": {
        "title": "Samsara",
        "category": "Poster",
        "mainColor" : theme.colorObjs["samsaraSubColor"],
        "backColor" : theme.colorObjs["samsaraBackColor"],
        "textColor" : theme.colorObjs["samsaraTextColor"],
        "year" : "2019",
        "img" : SamsaraImg,
        "componentR" : Samsara,
        "componentL" : null,
        "tag" : {
            "Assignment" : {
                "eng" : "Posters symbolizing the creatures of the cycle of suffering in Buddhism.",
                "kor" : "불교의 윤회 세계를 상징하는 존재자들에 대한 포스터를 제작했다.",
            },
            "Project Includes" : ["Poster", "Graphic"],
            "Information": "Mar 2019 / contribution: 100%",
        }
    },
    "Ruler": {
        "title": "Ruler",
        "category": "Editorial",
        "mainColor" : theme.colorObjs["rulerSubColor"],
        "backColor" : theme.colorObjs["rulerBackColor"],
        "textColor" : theme.colorObjs["rulerTextColor"],
        "year" : "2018",
        "img" : RulerImg,
        "componentR" : Ruler,
        "componentL" : null,
        "tag" : {
            "Assignment" : {
                "eng" : "Editorial work approaching the ruler in an analytical and graphical way",
                "kor" : "자에 대해 분석적인, 그래픽적인 방법으로 접근한 편집작업.",
            },
            "Project Includes" : ["Editorial", "Infographic", "Graphic"],
            "Information": "Mar 2018 / contribution: 100%",
        }
    },
    "on Voyage": {
        "title": "on Voyage",
        "category": "UI/UX",
        "mainColor" : theme.colorObjs["onvoyageSubColor"],
        "backColor" : theme.colorObjs["onvoyageBackColor"],
        "textColor" : theme.colorObjs["onvoyageTextColor"],
        "year" : "2016",
        "img" : OnvoyageImg,
        "componentR" : Onvoyage,
        "componentL" : null,
        "tag" : {
            "Assignment" : {
                "eng" : "Space and world travel content created through website.(Conceptual)",
                "kor" : "웹 사이트를 통해 우주와 전 세계 여행 컨텐츠 제작.(컨셉작업)",
            },
            "Project Includes" : ["Logo", "Editorial", "Infographic"],
            "Information": "Sep 2016 / contribution: 100%",
        }
    },
    "Gakka": {
        "title": "Gakka",
        "category": "Branding",
        "mainColor" : theme.colorObjs["gakkaSubColor"],
        "backColor" : theme.colorObjs["gakkaBackColor"],
        "textColor" : theme.colorObjs["gakkaTextColor"],
        "year" : "2020",
        "img" : GakkaImg,
        "componentR" : Gakka,
        "componentL" : null,
        "tag" : {
            "Assignment" : {
                "eng" : "Brand identity and product development with companion animals.",
                "kor" : "반려동물과 함께하는 브랜드 아이덴티티와 해당 제품 개발.",
            },
            "Project Includes" : ["Logo", "Editorial", "Infographic"],
            "Information": "Aug 2020 / contribution: 70%",
        }
    },
    "We Eat Delight": {
        "title": "We Eat Delight",
        "category": "Branding",
        "mainColor" : theme.colorObjs["weDelSubColor"],
        "backColor" : theme.colorObjs["weDelBackColor"],
        "textColor" : theme.colorObjs["weDelTextColor"],
        "year" : "2018",
        "img" : WeDelImg,
        "componentR" : WeDel,
        "componentL" : null,
        "tag" : {
            "Assignment" : {
                "eng" : "Creating Brand identity and application that provides morning subscription service.",
                "kor" : "아침 구독 서비스를 제공하는 브랜드 아이덴티티 및 어플 제작.",
            },
            "Project Includes" : ["Logo", "Editorial", "Infographic"],
            "Information": "Sep 2018 / contribution: 70%",
        }
    },
    "Seoul That We See": {
        "title": "Seoul That We See",
        "category": "UI/UX",
        "mainColor" : theme.colorObjs["seoulSubColor"],
        "backColor" : theme.colorObjs["seoulBackColor"],
        "textColor" : theme.colorObjs["seoulTextColor"],
        "year" : "2020",
        "img" : SeoulImg,
        "componentR" : Seoul,
        "componentL" : null,
        "tag" : {
            "Assignment" : {
                "eng" : "A website project to share about Seoul as seen by each person.",
                "kor" : "각자가 보는 서울에 대해 공유하는 웹 사이트 프로젝트",
            },
            "Project Includes" : ["Logo", "Editorial", "Infographic"],
            "Information": "Mar 2020 / contribution: 100%",
        }
    },
}

export const portFolios = [
    {title: }
]