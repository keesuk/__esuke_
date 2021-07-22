import { getDate,randomize  } from "./_Functions.jsx"
import theme from "../css/_Theme.jsx"

import Pigeon from "../pages/Pigeon.js"
import PigeonImg from "./img/Pigeon.png"
import PigeonLogo from "./img/_PigeonLogo.jsx"
import Pigeon_Content1 from "./img/Pigeon_Content/Pigeon-12.png"
import Pigeon_Content2 from "./img/Pigeon_Content/Pigeon-13.png"
import Pigeon_Content3 from "./img/Pigeon_Content/Pigeon-14.png"
import Pigeon_Content4 from "./img/Pigeon_Content/Pigeon-15.png"
import Pigeon_Content5 from "./img/Pigeon_Content/Pigeon-16.png"
import Pigeon_Content6 from "./img/Pigeon_Content/Pigeon-17.png"
import Pigeon_Content7 from "./img/Pigeon_Content/Pigeon-18.png"


import Ruler from "../pages/Ruler.js"
import RulerImg from "./img/Ruler.png"
import RulerLogo from "./img/_RulerLogo.jsx"
import Ruler_Content1 from "./img/Ruler_Content/Ruler-1.png"
import Ruler_Content2 from "./img/Ruler_Content/Ruler-12.png"
import Ruler_Content3 from "./img/Ruler_Content/Ruler-13.png"
import Ruler_Content4 from "./img/Ruler_Content/Ruler-14.png"
import Ruler_Content5 from "./img/Ruler_Content/Ruler-15.png"
import Ruler_Content6 from "./img/Ruler_Content/Ruler-16.png"


import Onvoyage from "../pages/Onvoyage.js"
import OnvoyageImg from "./img/Onvoyage.png"

import Gmf from "../pages/Gmf.js"
import GmfImg from "./img/Gmf.png"

import Samsara from "../pages/Samsara.js"
import SamsaraImg from "./img/Samsara.png"

import Seoul from "../pages/Seoul.js"
import SeoulImg from "./img/Seoul.png"
import SeoulLogo from "./img/_SeoulLogo.jsx"

//-------------홈페이지--------------
export const welcomeMention = <>
    Keesuk Lee is a <mark>Graphic Designer</mark> and <mark>Developer</mark> living in Seoul, S.Korea.
</>
export const welcomeMentionSub = <>
    Welcome! Happy that you spend precious time to me. And I Hope you enjoy with my folio.<br/><br/>
    thank you<br/>
    sincerely,
</>
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

//-------------컴포넌트--------------
export const mentInEmptyCell = [
    "I'm thinking null", "It's been 1month..", "I love spongeBob..♥", "tOO mUCH iNFORMATION", "making useless words", "lololololo"
]
export const menuMenu = [
    {   
        "title" : "AboutMe", 
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
        "width" : "300px",
        "color" : "white",
        "borColor" : "#aaaaaa",
        "tape" : {
            "angle" : randomize([-30, -20, -10, -5, 2, 10, 20, 30]),
            "color" : randomize(theme.colorObjs["subMenuTapeColorUp"]),
            "length" :"80px",
        }
    },{
        "content" : "",
        "width" : "300px",
        "color" : "white",
        "borColor" : "#aaaaaa",
        "tape" : {
            "angle" : randomize([-36, -27, -13, -7, 5, 13, 27, 36]),
            "color" : randomize(theme.colorObjs["subMenuTapeColorDown"]),
            "length" : "160px",
        }
    },{   
        "content" : "",
        "width" : "200px",
        "color" : theme.colorObjs["subMenuColor"],
        "borColor" : theme.colorObjs["subMenuTapeColor"],
        "tape" : null,
    },{
        "content" : "",
        "width" : "200px",
        "color" : theme.colorObjs["subMenuColor"],
        "borColor" : theme.colorObjs["subMenuTapeColor"],
        "tape" : null,
    },{
        "content" : "",
        "width" : "200px",
        "color" : theme.colorObjs["subMenuColor"],
        "borColor" : theme.colorObjs["subMenuTapeColor"],
        "tape" : null,
    },{
        "content" : "",
        "width" : "200px",
        "color" : theme.colorObjs["subMenuColor"],
        "borColor" : theme.colorObjs["subMenuTapeColor"],
        "tape" : null,
    },{
        "content" : "",
        "width" : "200px",
        "color" : theme.colorObjs["subMenuColor"],
        "borColor" : theme.colorObjs["subMenuTapeColor"],
        "tape" : null,
    },{
        "content" : "",
        "width" : "200px",
        "color" : theme.colorObjs["subMenuColor"],
        "borColor" : theme.colorObjs["subMenuTapeColor"],
        "tape" : null,
    }
]
export const subPageIntroTag = {
    "text" : welcomeMentionSub,
    "date" : `${getDate()[0]}, ${getDate()[1]}, ${getDate()[2]}`,
    "sign" : null,
    "hoverColor" : "hotpink",
    "rotate" : -4,
}
//-------------포폴관련--------------
export const portFolioContents = {
    "Pigeon" : {
        "title": "Pigeon",
        "category": "Editorial",
        "mainColor" : theme.colorObjs["pigeonSubColor"],
        "backColor" : theme.colorObjs["pigeonBackColor"],
        "textColor" : theme.colorObjs["pigeonTextColor"],
        "year" : "2017",
        "img" : PigeonImg,
        "componentR" : Pigeon,
        "componentL" : null,
        "tag" : {
            "Assignment" : "This is a project that visualizes sentiment data for a region by utilizing the website UI.",
            "Solution" : "This is a project that visualizes sentiment data for a region by utilizing the website UI.",
            "Project Includes" : "Logo / Editorial / Infographic"
        }
    },
    "Samsara": {
        "title": "Samsara",
        "category": "Poster",
        "mainColor" : theme.colorObjs["samsaraSubColor"],
        "backColor" : theme.colorObjs["samsaraBackColor"],
        "textColor" : theme.colorObjs["samsaraTextColor"],
        "year" : "2017",
        "img" : SamsaraImg,
        "componentR" : Samsara,
        "componentL" : null,
        "tag" : {
            "Assignment" : "This is a project that visualizes sentiment data for a region by utilizing the website UI.",
            "Solution" : "This is a project that visualizes sentiment data for a region by utilizing the website UI.",
            "Project Includes" : "Logo / Editorial / Infographic"
        }
    },
    "Seoul That We Look": {
        "title": "Seoul That We Look",
        "category": "UI/UX",
        "mainColor" : theme.colorObjs["seoulSubColor"],
        "backColor" : theme.colorObjs["seoulBackColor"],
        "textColor" : theme.colorObjs["seoulTextColor"],
        "year" : "2017",
        "img" : SeoulImg,
        "componentR" : Seoul,
        "componentL" : null,
        "tag" : {
            "Assignment" : "This is a project that visualizes sentiment data for a region by utilizing the website UI.",
            "Solution" : "This is a project that visualizes sentiment data for a region by utilizing the website UI.",
            "Project Includes" : "Logo / Editorial / Infographic"
        }
    },
    "on Voyage": {
        "title": "on Voyage",
        "category": "UI/UX",
        "mainColor" : theme.colorObjs["onvoyageSubColor"],
        "backColor" : theme.colorObjs["onvoyageBackColor"],
        "textColor" : theme.colorObjs["onvoyageTextColor"],
        "year" : "2017",
        "img" : OnvoyageImg,
        "componentR" : Onvoyage,
        "componentL" : null,
        "tag" : {
            "Assignment" : "This is a project that visualizes sentiment data for a region by utilizing the website UI.",
            "Solution" : "This is a project that visualizes sentiment data for a region by utilizing the website UI.",
            "Project Includes" : "Logo / Editorial / Infographic"
        }
    },
    "GMF Festival": {
        "title": "GMF Festival",
        "category": "Branding",
        "mainColor" : theme.colorObjs["gmfSubColor"],
        "backColor" : theme.colorObjs["gmfBackColor"],
        "textColor" : theme.colorObjs["gmfTextColor"],
        "year" : "2017",
        "img" : GmfImg,
        "componentR" : Gmf,
        "componentL" : null,
        "tag" : {
            "Assignment" : "This is a project that visualizes sentiment data for a region by utilizing the website UI.",
            "Solution" : "This is a project that visualizes sentiment data for a region by utilizing the website UI.",
            "Project Includes" : "Logo / Editorial / Infographic"
        }
    },
    "Ruler": {
        "title": "Ruler",
        "category": "Editorial",
        "mainColor" : theme.colorObjs["rulerSubColor"],
        "backColor" : theme.colorObjs["rulerBackColor"],
        "textColor" : theme.colorObjs["rulerTextColor"],
        "year" : "2017",
        "img" : RulerImg,
        "componentR" : Ruler,
        "componentL" : null,
        "tag" : {
            "Assignment" : "This is a project that visualizes sentiment data for a region by utilizing the website UI.",
            "Solution" : "This is a project that visualizes sentiment data for a region by utilizing the website UI.",
            "Project Includes" : "Logo / Editorial / Infographic"
        }
    }
}
export const PigeonContents = {
    name : "Pigeon",
    title : "Pigeon Brand Book:",
    category : "Editorial",
    logo: <PigeonLogo/>,
    color : {
        "main" : theme.colorObjs["pigeonColor"],
        "sub" : theme.colorObjs["pigeonSubColor"],
        "TorB" : "B",
    },
    pageStyle : [
        "· intro", 
        "· output"
    ],
    mark : {
        "0" : {
            "title" : "festival",
            "num" : "1",
            "textEng" : "festival is that they are temporary and provide a similar experience to consumers",
            "textKor" : "페스티벌들의 한계는 한시적이고, 매년 비슷한 방식, 비슷한 게스트 등 소비자에게 유사할 수 밖에 없는 경험을 제공한다는 것",
        }
    },
    mainText : {
        "0" : {
            "eng" : "is that they are temporary and provide a similar experience to consumers, such as similar guests, every year. This happens because you cannot help but consider realistic aspects such as ticket power and customer base. Branded in 2017, the Grand Mint Festival not only had such chronic problems, but also had a clear lack of identity and expansion. In addition, the concept of the 2017 Grand Mint Festival was considered to be insufficient branding to convey the originally intended",
            "kor" : "페스티벌들의 한계는 한시적이고, 매년 비슷한 방식, 비슷한 게스트 등 소비자에게 유사할 수 밖에 없는 경험을 제공한다는 것입니다. 이는 티켓파워, 고객층 유지 등 현실적인 부분을 고려하지 않을 수 없기 때문에 발생합니다. 2017년 브랜딩된 ‘그랜드 민트 페스티벌’은 그러한 고질적인 문제를 담고 있었습니다. 인디밴드 플랫폼 민트페이퍼 산하의 페스티벌이고, 2007년 인디밴드 라인업으로 진행했던 체제와 다르게 2017년이 된 지금에서는 장르 분문 다양한 아티스트들이 출현 하고 있습니다."
        },
    },
    subText : {
        "0" : {
            "color" : "white",
            "eng" : "is that they are temporary and provide a similar experience to consumers, such as similar guests, every year. This happens because you cannot help but consider realistic aspects such as ticket power and customer base. Branded in 2017, the Grand Mint Festival not only had such chronic problems, but also had a clear lack of identity and expansion. In addition, the concept of the 2017 Grand Mint Festival was considered to be insufficient branding to convey the originally intended",
            "kor" : "페스티벌들의 한계는 한시적이고, 매년 비슷한 방식, 비슷한 게스트 등 소비자에게 유사할 수 밖에 없는 경험을 제공한다는 것입니다. 이는 티켓파워, 고객층 유지 등 현실적인 부분을 고려하지 않을 수 없기 때문에 발생합니다. 2017년 브랜딩된 ‘그랜드 민트 페스티벌’은 그러한 고질적인 문제를 담고 있었습니다. 인디밴드 플랫폼 민트페이퍼 산하의 페스티벌이고, 2007년 인디밴드 라인업으로 진행했던 체제와 다르게 2017년이 된 지금에서는 장르 분문 다양한 아티스트들이 출현 하고 있습니다."
        },
    },
    image : {
        "imgBoxBack" : theme.colorObjs["pigeonImgBoxBackColor"],
        "0" : {
            "img" : Pigeon_Content1,
            "txtEng" : "index page",
            "txtKor" : "목차 페이지",
            "color" : theme.colorObjs["remarksTextColor"],
        },
        "1" : {
            "img" : Pigeon_Content2,
            "txtEng" : "about Pigeon",
            "txtKor" : "피죤 브랜드 소개",
            "color" : "white",
        },
        "2" : {
            "img" : Pigeon_Content3,
            "txtEng" : "Commercials",
            "txtKor" : "피죤의 광고",
            "color" : "white",
        },
        "3" : {
            "img" : Pigeon_Content4,
            "txtEng" : "Brand Sound",
            "txtKor" : "브랜드 사운드",
            "color" : "white",
        },
        "4" : {
            "img" : Pigeon_Content5,
            "txtEng" : "Packaging",
            "txtKor" : "패키지구성",
            "color" : "white",
        },
        "5" : {
            "img" : Pigeon_Content6,
            "txtEng" : "Logo Redesign",
            "txtKor" : "로고 리디자인",
            "color" : "white",
        },
        "6" : {
            "img" : Pigeon_Content7,
            "txtEng" : "Fragrance Ranking",
            "txtKor" : "향기랭킹",
            "color" : "white",
        },
    }
}
export const RulerContents = {
    name : "Ruler",
    title : "Ruler Brand Book:",
    category : "Editorial",
    logo: <RulerLogo/>,
    color : {
        "main" : theme.colorObjs["rulerColor"],
        "sub" : theme.colorObjs["rulerSubColor"],
        "TorB" : "T",
    },
    pageStyle : [
        "· intro", 
        "· output"
    ],
    mark : {
        "0" : {
            "title" : "festival",
            "num" : "1",
            "textEng" : "festival is that they are temporary and provide a similar experience to consumers",
            "textKor" : "페스티벌들의 한계는 한시적이고, 매년 비슷한 방식, 비슷한 게스트 등 소비자에게 유사할 수 밖에 없는 경험을 제공한다는 것",
        }
    },
    mainText : {
        "0" : {
            "eng" : "is that they are temporary and provide a similar experience to consumers, such as similar guests, every year. This happens because you cannot help but consider realistic aspects such as ticket power and customer base. Branded in 2017, the Grand Mint Festival not only had such chronic problems, but also had a clear lack of identity and expansion. In addition, the concept of the 2017 Grand Mint Festival was considered to be insufficient branding to convey the originally intended",
            "kor" : "페스티벌들의 한계는 한시적이고, 매년 비슷한 방식, 비슷한 게스트 등 소비자에게 유사할 수 밖에 없는 경험을 제공한다는 것입니다. 이는 티켓파워, 고객층 유지 등 현실적인 부분을 고려하지 않을 수 없기 때문에 발생합니다. 2017년 브랜딩된 ‘그랜드 민트 페스티벌’은 그러한 고질적인 문제를 담고 있었습니다. 인디밴드 플랫폼 민트페이퍼 산하의 페스티벌이고, 2007년 인디밴드 라인업으로 진행했던 체제와 다르게 2017년이 된 지금에서는 장르 분문 다양한 아티스트들이 출현 하고 있습니다."
        },
    },
    subText : {
        "0" : {
            "color" : "white",
            "eng" : "is that they are temporary and provide a similar experience to consumers, such as similar guests, every year. This happens because you cannot help but consider realistic aspects such as ticket power and customer base. Branded in 2017, the Grand Mint Festival not only had such chronic problems, but also had a clear lack of identity and expansion. In addition, the concept of the 2017 Grand Mint Festival was considered to be insufficient branding to convey the originally intended",
            "kor" : "페스티벌들의 한계는 한시적이고, 매년 비슷한 방식, 비슷한 게스트 등 소비자에게 유사할 수 밖에 없는 경험을 제공한다는 것입니다. 이는 티켓파워, 고객층 유지 등 현실적인 부분을 고려하지 않을 수 없기 때문에 발생합니다. 2017년 브랜딩된 ‘그랜드 민트 페스티벌’은 그러한 고질적인 문제를 담고 있었습니다. 인디밴드 플랫폼 민트페이퍼 산하의 페스티벌이고, 2007년 인디밴드 라인업으로 진행했던 체제와 다르게 2017년이 된 지금에서는 장르 분문 다양한 아티스트들이 출현 하고 있습니다."
        },
    },
    image : {
        "imgBoxBack" : theme.colorObjs["rulerImgBoxBackColor"],
        "0" : {
            "img" : Ruler_Content1,
            "txtEng" : "index page",
            "txtKor" : "목차 페이지",
            "color" : theme.colorObjs["remarksTextColor"],
        },
        "1" : {
            "img" : Ruler_Content2,
            "txtEng" : "about Pigeon",
            "txtKor" : "피죤 브랜드 소개",
            "color" : "white",
        },
        "2" : {
            "img" : Ruler_Content3,
            "txtEng" : "Commercials",
            "txtKor" : "피죤의 광고",
            "color" : "white",
        },
        "3" : {
            "img" : Ruler_Content4,
            "txtEng" : "Brand Sound",
            "txtKor" : "브랜드 사운드",
            "color" : "white",
        },
        "4" : {
            "img" : Ruler_Content5,
            "txtEng" : "Packaging",
            "txtKor" : "패키지구성",
            "color" : "white",
        },
        "5" : {
            "img" : Ruler_Content6,
            "txtEng" : "Logo Redesign",
            "txtKor" : "로고 리디자인",
            "color" : "white",
        },
    }
}
export const SeoulContents = {
    name : "Seoul",
    title : "Seoul That We Look",
    category : "UI/UX",
    logo: <SeoulLogo/>,
    color : {
        "main" : theme.colorObjs["seoulColor"],
        "sub" : theme.colorObjs["seoulSubColor"],
        "TorB" : "T",
    },
    pageStyle : [
        "· intro", 
        "· output"
    ],
    mark : {
        "0" : {
            "title" : "festival",
            "num" : "1",
            "textEng" : "festival is that they are temporary and provide a similar experience to consumers",
            "textKor" : "페스티벌들의 한계는 한시적이고, 매년 비슷한 방식, 비슷한 게스트 등 소비자에게 유사할 수 밖에 없는 경험을 제공한다는 것",
        }
    },
    mainText : {
        "0" : {
            "eng" : "is that they are temporary and provide a similar experience to consumers, such as similar guests, every year. This happens because you cannot help but consider realistic aspects such as ticket power and customer base. Branded in 2017, the Grand Mint Festival not only had such chronic problems, but also had a clear lack of identity and expansion. In addition, the concept of the 2017 Grand Mint Festival was considered to be insufficient branding to convey the originally intended",
            "kor" : "페스티벌들의 한계는 한시적이고, 매년 비슷한 방식, 비슷한 게스트 등 소비자에게 유사할 수 밖에 없는 경험을 제공한다는 것입니다. 이는 티켓파워, 고객층 유지 등 현실적인 부분을 고려하지 않을 수 없기 때문에 발생합니다. 2017년 브랜딩된 ‘그랜드 민트 페스티벌’은 그러한 고질적인 문제를 담고 있었습니다. 인디밴드 플랫폼 민트페이퍼 산하의 페스티벌이고, 2007년 인디밴드 라인업으로 진행했던 체제와 다르게 2017년이 된 지금에서는 장르 분문 다양한 아티스트들이 출현 하고 있습니다."
        },
    },
    subText : {
        "0" : {
            "color" : "white",
            "eng" : "is that they are temporary and provide a similar experience to consumers, such as similar guests, every year. This happens because you cannot help but consider realistic aspects such as ticket power and customer base. Branded in 2017, the Grand Mint Festival not only had such chronic problems, but also had a clear lack of identity and expansion. In addition, the concept of the 2017 Grand Mint Festival was considered to be insufficient branding to convey the originally intended",
            "kor" : "페스티벌들의 한계는 한시적이고, 매년 비슷한 방식, 비슷한 게스트 등 소비자에게 유사할 수 밖에 없는 경험을 제공한다는 것입니다. 이는 티켓파워, 고객층 유지 등 현실적인 부분을 고려하지 않을 수 없기 때문에 발생합니다. 2017년 브랜딩된 ‘그랜드 민트 페스티벌’은 그러한 고질적인 문제를 담고 있었습니다. 인디밴드 플랫폼 민트페이퍼 산하의 페스티벌이고, 2007년 인디밴드 라인업으로 진행했던 체제와 다르게 2017년이 된 지금에서는 장르 분문 다양한 아티스트들이 출현 하고 있습니다."
        },
    },
    image : {
        "imgBoxBack" : theme.colorObjs["rulerImgBoxBackColor"],
        "0" : {
            "img" : Ruler_Content1,
            "txtEng" : "index page",
            "txtKor" : "목차 페이지",
            "color" : theme.colorObjs["remarksTextColor"],
        },
        "1" : {
            "img" : Ruler_Content2,
            "txtEng" : "about Pigeon",
            "txtKor" : "피죤 브랜드 소개",
            "color" : "white",
        },
        "2" : {
            "img" : Ruler_Content3,
            "txtEng" : "Commercials",
            "txtKor" : "피죤의 광고",
            "color" : "white",
        },
        "3" : {
            "img" : Ruler_Content4,
            "txtEng" : "Brand Sound",
            "txtKor" : "브랜드 사운드",
            "color" : "white",
        },
        "4" : {
            "img" : Ruler_Content5,
            "txtEng" : "Packaging",
            "txtKor" : "패키지구성",
            "color" : "white",
        },
        "5" : {
            "img" : Ruler_Content6,
            "txtEng" : "Logo Redesign",
            "txtKor" : "로고 리디자인",
            "color" : "white",
        },
    }
}