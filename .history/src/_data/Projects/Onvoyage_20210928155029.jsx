import Logo from "./img/Onvoyage_Content/_OnvoyageLogo.jsx"
import thumbnail from "./img/Onvoyage_Content/Onvoyage-Thumbnail.png"
import image1 from "./img/Onvoyage_Content/Onvoyage-1.jpg"
import image2 from "./img/Onvoyage_Content/Onvoyage-12.jpg"
import image3 from "./img/Onvoyage_Content/Onvoyage-13.jpg"
import image4 from "./img/Onvoyage_Content/Onvoyage-14.jpg"
import image5 from "./img/Onvoyage_Content/Onvoyage-15.jpg"
import image6 from "./img/Onvoyage_Content/Onvoyage-16.jpg"
import image7 from "./img/Onvoyage_Content/Onvoyage-17.jpg"
import image8 from "./img/Onvoyage_Content/Onvoyage-18.jpg"
import image9 from "./img/Onvoyage_Content/Onvoyage-19.png"
import image10 from "./img/Onvoyage_Content/Onvoyage-20.jpg"


const title = "on Voyage(Conceptual)"
const name = "on Voyage"
const category = "UI/UX"
const year = "2016"
const logo = <Logo/>
const image = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
]
const color = {
    main : "#000000",
    sub : "#cccccc"
}
const tag = {
    "Assignment" : {
        "eng" : "Space and world travel content created through website.(Conceptual)",
        "kor" : "웹 사이트를 통해 우주와 전 세계 여행 컨텐츠 제작.(컨셉작업)",
    },
    "Project Includes" : [
        "Logo", 
        "Editorial", 
        "Infographic"
    ],
    "Information": "Sep 2016 / contribution: 100%",
}
const footnote = [
    "· Brief", 
    "· Output"
]
const mainText = [
    {
        "eng" : "What if you could make space travel like a game on your website? This project is a very personal and clear hobby work. It is a web metaverse project that was inspired by seeing Facebook's VR content in 2016, four years before the term metaverse appeared. Many of the visual motifs borrowed to express the screen were borrowed from Google and Iron Man, which implemented futuristic UI. Also, images with planetary textures or cosmic viewpoints were used that I thought were attractive.",
        "kor" : "우주여행을 웹 사이트에서 게임처럼 할 수 있다면 어떨까? 본 프로젝트는 지극히 개인적이고 추구하는 바가 명확한 취미 작업이다. 메타버스라는 용어가 등장하기 4년 전인 2016년 구글맵과 나사를 보고 영감을 받아 진행한 웹 메타버스 프로젝트다. 화면을 표현하기 위해 차용한 시각적인 모티브는 미래적인 UI를 구현한 구글과 아이언맨에서 다수 차용하였다. 또한, 매력적이라고 생각한 행성의 텍스쳐나 우주의 시점들을 지닌 이미지들을 활용하였다.",
        "mark" : []
    }
]
const subText = [
    {
        "eng" : "The story concept is for the user to become an astronaut and earth traveler. As an astronaut, you can see and feel different planets. When you find your own spot or unique terrain, you can connect with others by planting a flag, leaving a trail, and commenting. Earth traveler travels around the world and sees and observes real-world stores and terrain.",
        "kor" : "스토리 컨셉은 사용자가 우주비행사, 지구여행자가 되는 것이다. 우주비행사가 되어 여러 행성들을 보고 느낀다. 자신만의 스팟이나 독특한 지형을 발견하면 깃발을 꽂아 자취를 남기고 의견을 달아 다른 이들과 소통할 수 있다. 지구여행자는 세계를 돌아보며 실제로 구현된 상점이나 지형들을 보고 관찰한다."
    }
]

const comp = [
    { 
        type: "MainTitle",
        color: color.sub,
        category: category,
        isThin: false,
        text: title,
    },{ 
        type: "Logo",
        color: color.main,
        paddingTop: {deskTop: "14", mobile: "13"},
        paddingBottom: {deskTop: "14", mobile: "13"},
        paddingLeft: {deskTop: "26", mobile: "6"},
        paddingRight: {deskTop: "26", mobile: "6"},
        logo: logo,
    },{ 
        type: "Footnote",
        marginTop: "8",
        detailTop: "0",
        interval: "0",
        text: footnote[0],
    },{ 
        type: "MainText",
        text: mainText[0],
        color: color.sub,
        marginBottom: "0",
        marginTop: "8",
    },{ 
        type: "OuterImg",
        marginBottom: {deskTop: null, mobile: null},
        marginRight: {deskTop: null, mobile: "10"},
        marginLeft: {deskTop: "0", mobile: "10"},
        marginTop: {deskTop: "7", mobile: "15"},
        height: {deskTop: "40",  mobile: "80"},
        width: {deskTop: "60", mobile: "100"},
        image: image[0],
        isOutline: false,
        isFilter: false,
        isLeft: false,
        remark: null,
    },{ 
        type: "Footnote",
        marginTop: "0",
        interval: "4",
        text: footnote[1],
    },{ 
        type: "InnerImg",
        paddingBottom: {deskTop: "13", mobile: "10"},
        paddingRight: {deskTop: "5", mobile: "2"},
        paddingLeft: {deskTop: "5", mobile: "2"},
        paddingTop: {deskTop: "5", mobile: "20"},
        marginBottom: {deskTop: "0", mobile: null},
        marginTop: {deskTop: "0", mobile: "0"},
        color: "#242424",
        contents: [{
            marginBottom: {deskTop: null, mobile: null},
            marginRight: {deskTop: null, mobile: "0"},
            marginLeft: {deskTop: "10", mobile: "8"},
            marginTop: {deskTop: "8", mobile: "3"}, 
            height: {deskTop: "20", mobile: "40"},
            width: {deskTop: "80", mobile: "90"}, 
            image: image[8],
            type: "Img", 
            isLeft: true, 
            remark: null
        },{
            marginBottom: {deskTop: null, mobile: null},
            marginRight: {deskTop: null, mobile: "0"},
            marginLeft: {deskTop: "-2", mobile: "8"},
            marginTop: {deskTop: "8", mobile: "3"}, 
            height: {deskTop: null, mobile: null},
            width: {deskTop: "100", mobile: "90"}, 
            image: image[1],
            type: "Browser",
            isHorizon: true,
            isLeft: true, 
        },{
            marginBottom: {deskTop: null, mobile: null},
            marginRight: {deskTop: "-2", mobile: "0"},
            marginLeft: {deskTop: "2", mobile: "8"},
            marginTop: {deskTop: "10", mobile: "3"}, 
            height: {deskTop: null, mobile: null},
            width: {deskTop: "100", mobile: "90"}, 
            image: image[2],
            isHorizon: true,
            isLeft: false, 
            type: "Browser",
        },{
            type: "Text", 
            marginTop: "405", 
            marginBottom: "0",
            marginLeft: "0",
            marginRight: "0",
            width: "50",
            isLeft: false,
            isHorizon: false,
            color: "white",
            text: subText[0]
        },{
            type: "Browser",
            width: "55", 
            isLeft: true, 
            isHorizon: true,
            marginTop: "4", 
            marginLeft:"-2",
            marginRight: "",
            image: image[3]
        },{
            type: "Browser",
            width: "55", 
            isLeft: true, 
            isHorizon: true,
            marginTop: "0", 
            marginLeft:"-2",
            marginRight: "0",
            image: image[5]
        },{
            type: "Browser",
            width: "55", 
            isLeft: true, 
            isHorizon: true,
            marginTop: "0", 
            marginLeft:"-2",
            marginRight: "0",
            image: image[4]
        },{
            type: "Browser",
            width: "100", 
            isLeft: false, 
            isHorizon: true,
            marginTop: "10", 
            marginLeft:"0",
            marginRight: "-2",
            image: image[6]
        },{
            type: "Browser",
            width: "55", 
            isLeft: true, 
            isHorizon: true,
            marginTop: "4", 
            marginLeft:"-2",
            marginRight: "0",
            image: image[9]
        },{
            type: "Browser",
            width: "55", 
            isLeft: true, 
            isHorizon: true,
            marginTop: "0", 
            marginLeft:"-2",
            marginRight: "0",
            image: image[7]
        }
    ]}
]

const contents = {
    thumbnail : thumbnail, 
    keyColor : color.sub,
    category : category,
    title : title,
    name : name,
    year : year,
    comp : comp,
    tag : tag
}

export default contents
