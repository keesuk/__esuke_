import theme from "../css/_Theme.jsx"

import { getDate } from "./_Functions.jsx"
import { ProfileFront, ProfileBack } from "./img/_Source/_Profile_Card.jsx"

import PigeonImg from "../img/Pigeon.png"

import RulerImg from "./img/Ruler.png"

import OnvoyageImg from "./img/Onvoyage.png"
import OnvoyageLogo from "./img/_OnvoyageLogo.jsx"
import Onvoyage_Content1 from "./img/Onvoyage_Content/Onvoyage-1.jpg"
import Onvoyage_Content2 from "./img/Onvoyage_Content/Onvoyage-12.jpg"
import Onvoyage_Content3 from "./img/Onvoyage_Content/Onvoyage-13.jpg"
import Onvoyage_Content4 from "./img/Onvoyage_Content/Onvoyage-14.jpg"
import Onvoyage_Content5 from "./img/Onvoyage_Content/Onvoyage-15.jpg"
import Onvoyage_Content6 from "./img/Onvoyage_Content/Onvoyage-16.jpg"
import Onvoyage_Content7 from "./img/Onvoyage_Content/Onvoyage-17.jpg"
import Onvoyage_Content8 from "./img/Onvoyage_Content/Onvoyage-18.jpg"
import Onvoyage_Content9 from "./img/Onvoyage_Content/Onvoyage-19.png"
import Onvoyage_Content10 from "./img/Onvoyage_Content/Onvoyage-20.jpg"

import SamsaraImg from "./img/Samsara.png"

import SeoulImg from "./img/Seoul.png"

import WeDelImg from "./img/Wedel.png"

import GakkaImg from "./img/Gakka.png"
import GakkaLogo from "./img/_GakkaLogo.jsx"
import Gakka_Content1 from "./img/Gakka_Content/Gakka-1.jpg"
import Gakka_Content2 from "./img/Gakka_Content/Gakka-12.png"
import Gakka_Content3 from "./img/Gakka_Content/Gakka-13.png"
import Gakka_Content4 from "./img/Gakka_Content/Gakka-14.png"
import Gakka_Content5 from "./img/Gakka_Content/Gakka-15.jpg"
import Gakka_Content6 from "./img/Gakka_Content/Gakka-16.png"
import Gakka_Content7 from "./img/Gakka_Content/Gakka-17.jpg"
import Gakka_Content8 from "./img/Gakka_Content/Gakka-18.png"
import Gakka_Content9 from "./img/Gakka_Content/Gakka-19.png"
import Gakka_Content10 from "./img/Gakka_Content/Gakka-20.jpg"
import Gakka_Content11 from "./img/Gakka_Content/Gakka-21.jpg"
import Gakka_Content12 from "./img/Gakka_Content/Gakka-22.jpg"
import Gakka_Content13 from "./img/Gakka_Content/Gakka-23.png"
import Gakka_Content14 from "./img/Gakka_Content/Gakka-24.jpg"



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
export const OnvoyageContents = {
    name : "on Voyage",
    title : "on Voyage(Conceptual)",
    category : "UI/UX",
    logo: <OnvoyageLogo/>,
    color : {
        "main" : theme.colorObjs["onvoyageColor"],
        "sub" : "#cccccc",
        "TorB" : "B",
    },
    footnote : [
        "· Brief", 
        "· Output"
    ],
    mainText : {
        "0" : {
            "eng" : "What if you could make space travel like a game on your website? This project is a very personal and clear hobby work. It is a web metaverse project that was inspired by seeing Facebook's VR content in 2016, four years before the term metaverse appeared. Many of the visual motifs borrowed to express the screen were borrowed from Google and Iron Man, which implemented futuristic UI. Also, images with planetary textures or cosmic viewpoints were used that I thought were attractive.",
            "kor" : "우주여행을 웹 사이트에서 게임처럼 할 수 있다면 어떨까? 본 프로젝트는 지극히 개인적이고 추구하는 바가 명확한 취미 작업이다. 메타버스라는 용어가 등장하기 4년 전인 2016년 구글맵과 나사를 보고 영감을 받아 진행한 웹 메타버스 프로젝트다. 화면을 표현하기 위해 차용한 시각적인 모티브는 미래적인 UI를 구현한 구글과 아이언맨에서 다수 차용하였다. 또한, 매력적이라고 생각한 행성의 텍스쳐나 우주의 시점들을 지닌 이미지들을 활용하였다.",
            "mark" : []
        },
    },
    subText : {
        "0" : {
            "eng" : "The story concept is for the user to become an astronaut and earth traveler. As an astronaut, you can see and feel different planets. When you find your own spot or unique terrain, you can connect with others by planting a flag, leaving a trail, and commenting. Earth traveler travels around the world and sees and observes real-world stores and terrain.",
            "kor" : "스토리 컨셉은 사용자가 우주비행사, 지구여행자가 되는 것이다. 우주비행사가 되어 여러 행성들을 보고 느낀다. 자신만의 스팟이나 독특한 지형을 발견하면 깃발을 꽂아 자취를 남기고 의견을 달아 다른 이들과 소통할 수 있다. 지구여행자는 세계를 돌아보며 실제로 구현된 상점이나 지형들을 보고 관찰한다."
        },
    },
    bottomText :{
    },
    image : {
        "0" : Onvoyage_Content1,
        "1" : Onvoyage_Content2,
        "2" : Onvoyage_Content3,
        "3" : Onvoyage_Content4,
        "4" : Onvoyage_Content5,
        "5" : Onvoyage_Content6,
        "6" : Onvoyage_Content7,
        "7" : Onvoyage_Content8,
        "8" : Onvoyage_Content9,
        "9" : Onvoyage_Content10,
    }
}
export const GakkaContents = {
    name : "Gakka",
    title : "Walk Task Force, Gakka",
    category : "Branding",
    logo: <GakkaLogo/>,
    color : {
        "main" : theme.colorObjs["gakkaColor"],
        "sub" : theme.colorObjs["gakkaSubColor"],
        "TorB" : "B",
    },
    footnote : [
        "· Brief", 
        "· Identity", 
        "· Output", 
        "· Brief", 
        "· Output"
    ],
    mainText : {
        "0" : {
            "eng" : "As of 2020, the number of households raising companion animals in Korea exceeded 6.04 million households, and the market size exceeded KRW 3 trillion in 2018, growing at a rate of 50% every year. However, the level of awareness of companion animals is far below that of the Animal Protection Act enacted by Germany in 1987. The 2020 policy report points out this and promotes national policies to improve awareness.",
            "kor" : "대한민국 반려동물 양육 가구는 2020년 기준 604만 가구, 시장 규모는 2018년 기준 3조원을 돌파, 매년 50%씩 성장하고있다. 그러나 반려동물에 대한 인식수준은 1987년 독일이 제정한 동물보호법에 한참 못 미치는 수준이다. 2020년 정책보고서에는 이를 지적하며 인식수준을 개선할 국가단위의 정책들을 추진하고 있다.",
            "mark" : []
        },
        "1" : {
            "eng" : "However, these macro-policies saw that it was difficult to meet the direct needs of companion animal owners. As a result of the questionnaire drawn on companion animal caregivers, the biggest difficulty in raising companion animals was the difficult conditions for taking a walk. As a result, attachment dolls and walking agency services were introduced to replace them, but they did not approach the fundamental problem solving. So, we launched the brand Gakka, which helps pets and their owners get closer to each other, and produced the product San Check and for their memorial Gakka Card.",
            "kor" : "하지만 이러한 거시적인 정책들은 반려동물 보유자의 직접적인 니즈 충족이 어렵다고 보았다. 반려동물 양육자 대상으로 도출된 설문결과 반려동물 양육의 가장 큰 고충은 산책을 시키기 어려운 여건이였다. 그에 따라 이를 대신할 애착인형이나 산책대행 서비스등이 나왔지만 근본적인 문제해결에 접근하지 못한다고 보았다. 그래서 '반려동물과 주인이 가까워지는 시간'을 갖을 수 있게 도와주는 브랜드 가까를 출시하고 제품 산체크와 추억을 위한 가까 카드를 제작하였다.",
            "mark" : [{
                    "title" : "Gakka",
                    "num" : "1",
                    "eng" : "It has two meanings: to be near and to go. This implies that pets and their owners get closer and go for a walk for this purpose.",
                    "kor" : "가까는 가까운과 갈까, 두 가지 의미를 담고 있다. 이는 반려동물과 보호자가 가까워진다는 것과 이를 위해 산책을 가게함을 내포한다.",
                },{
                    "title" : "San Check",
                    "num" : "2",
                    "eng" : "Sanchek means a record sheet for checking walks. One of the two close-up products. Details are described below.",
                    "kor" : "산체크는 산책을 체크하는 기록지라는 뜻이다. 가까의 두 가지 제품 중 하나이다. 자세한 내용 후술되어 있다.",
                },{
                    "title" : "Gakka Card",
                    "num" : "3",
                    "eng" : "Gakka card was made to post memories. One of the two close-up products. Details are described below.",
                    "kor" : "가까 카드는 추억을 포스팅하기 위해 제작하였다. 가까의 두 가지 제품 중 하나이다. 자세한 내용 후술되어 있다.",
            }],
        },
        "2" : {
            "eng" : "For logo production, the contrast between straight lines and curves, which are frequently seen among various shapes that symbolize dogs, was actively used in the logo type. In addition, the closeness of the dog owner and the dog was symbolized through connecting lines and combinations. Tone and manners was referenced in quilting. The unique charm and lyrical elements of quilts have the same texture as a warm companionship that you want to express up close.",
            "kor" : "로고 제작은 강아지를 상징하는 여러 형태들 중 빈번히 보여지는 직선과 곡선의 대비감을 로고 타입에 적극적으로 활용하였다. 또한 견주와 반려견의 가까움을 연결되는 선과 결합을 통해 상징화하였다. 톤앤매너는 퀼트에서 참고하였다. 퀼트의 독특한 매력과 서정적인 요소는 가까가 표현하고자 하는 따뜻한 반려의 느낌과 같은 결을 지닌다.",
            "mark" : [],
        },
    },
    subText : {
        "0" : {
            "eng" : "Sanchek is a diary for recording your walks. Elements such as flowers, trees, grass, and clouds that can be seen while taking a walk are provided as stickers, allowing an emotional approach to walking and memories. In addition, the record sheet was left so that it could be decorated by yourself, except for the most basic information, to give a feeling of creating together.",
            "kor" : "산체크는 산책을 기록하기 위한 다이어리이다. 산책을 하면서 볼 수 있는 꽃, 나무, 풀, 구름과 같은 요소들을 스티커로 제공하며 이를 통해 산책과 추억에 대해 감성적으로 접근할 수 있게 작업하였다. 또한 기록지는 함께 만들어가는 느낌을 줄 수 있도록 가장 기본적인 정보를 제외하고 직접 꾸밀 수 있도록 남겨두었다."
        },
        "1" : {
            "eng" : "The close card was created for those who lack content to enjoy with their pets every day. The mission is written on the presented triangular card, and the user completes the mission and takes an authentication shot as if tagging the card in the lower left corner to succeed. Unlike the san check, the close card was sensibly produced to maximize the lyrical part. This is an element to appeal to special memories, and we tried to fill the daily mission with newness through the different atmospheres of each card.",
            "kor" : "가까 카드는 매일 반려동물과 함께 즐길 컨텐츠가 부족한 이들을 위해 제작되었다. 제시된 삼각형의 카드에 미션이 적혀있고, 사용자는 그 미션을 수행하고 카드를 좌측 하단에 태그하듯 인증샷을 찍으면 성공이다. 가까 카드는 산체크와 달리 서정적인 부분을 극대화하기 위해 감각적으로 제작되었다. 이는 특별한 추억을 어필하기 위한 요소로 각각의 카드의 서로 다른 분위기를 통해 매일 매일의 미션을 새로움으로 채우고자 했다."
        },
    },
    bottomText :{
        "0" : {
            "txtEng" : "Walking Log Sheet",
            "txtKor" : "산책 기록지",
        },
        "1" : {
            "txtEng" : "Walking Sticker",
            "txtKor" : "산책 스티커",
        }
    },
    image : {
        "0" : Gakka_Content1,
        "1" : Gakka_Content2,
        "2" : Gakka_Content3,
        "3" : Gakka_Content4,
        "4" : Gakka_Content5,
        "5" : Gakka_Content6,
        "6" : Gakka_Content7,
        "7" : Gakka_Content8,
        "8" : Gakka_Content9,
        "9" : Gakka_Content10,
        "10" : Gakka_Content11,
        "11" : Gakka_Content12,
        "12" : Gakka_Content13,
        "13" : Gakka_Content14,
    }
}
