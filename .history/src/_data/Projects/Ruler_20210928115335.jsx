import RulerLogo from "./img/_RulerLogo.jsx"
import Ruler_Content1 from "./img/Ruler_Content/Ruler-1.png"
import Ruler_Content2 from "./img/Ruler_Content/Ruler-12.jpg"
import Ruler_Content3 from "./img/Ruler_Content/Ruler-13.png"
import Ruler_Content4 from "./img/Ruler_Content/Ruler-14.png"
import Ruler_Content5 from "./img/Ruler_Content/Ruler-15.png"
import Ruler_Content6 from "./img/Ruler_Content/Ruler-16.png"

const name = "Magnified Ordinary Things"
const title = "Magnified Ordinary Things, Ruler"
const year = "2018"
const category = "Editorial"
const logo =  <RulerLogo/>
const color = {
    "main" : "#3B44AC",
    "sub" : "#0000FF",
}
const footnote = [
    "· Brief", 
    "· Output"
]
const mainText = [
    {
        "eng" : "There are things around us that we didn't know well because we were used to it. Dolls, cameras, bicycles, erasers, etc. are familiar, but we do not know deeply about these things.",
        "kor" : "우리 주변에는 익숙하기 때문에 제대로 알지 못했던 사물들이 있다. 인형, 사진기, 자전거 등등 익숙하지만 우리는 이들에 대해 깊게 알고 있지 않는다.",
        "mark" : []
    },{
        "eng" : "Magnified Ordinary Things is a group project that reinterprets the familiar but missed objects around us. Each of them composed content that could give an interesting interpretation of the given object, and edited 8 pages to match it. Among them, I approached the ruler, and also dealt with expandable objects such as protractors and figures connected to the ruler. The approach used the visual language of analysis to actively express the growing physical properties, and the logical expression method of disassembling and recombining it appropriate for this was mainly shown.",
        "kor" : "확대해석 본은 이처럼 익숙하지만 놓치고 있던 우리 주변의 물건들에 대해 다시 해석하는 단체 프로젝트이다. 각자 주어진 물건에 대해 재밌는 해석을 줄 수 있는 내용을 구성하고 그에 맞는 8페이지의 편집작업을 진행하였다. 그 중 나는 자에 대해 접근하였고, 더불어 자와 연결되는 각도기나 도형 등 같이 확장될 수 있는 물건들도 함께 다루었다. 접근은 자라는 물성을 적극적으로 표현하기 위해 분석이라는 시각적 언어를 활용하였고, 이에 걸맞는 분해하고 재조합하는 논리적인 표현방식이 주로 나타났다. ",
        "mark" : [{
            "title" : "Magnified Ordinary Things",
            "num" : "1",
            "eng" : "A total of 8 categories and 90 objects were dealt with, each classified under the names of ‘personality’, ‘safety’, knowledge’, ‘relationship’, ‘collection’, ‘consumption’, and ‘order’ expansion. ‘I’ belongs to the extension of ‘order’.",
            "kor" : "총 8가지의 카테고리, 90개의 물건들을 다루며 각각 ‘개성’, ‘안전’, 지식’, ‘관계’, ‘수집’, ‘섭취’, ‘질서’의 확대라는 명칭으로 분류하였다. ‘자’는 ‘질서’의 확대에 속한다. ",
        }]
    },
]
const subText = [
    {
        "eng" : "The main graphical point of the composition is the object extending from the growing object. In order to express the elements that make up the ruler, numbers, scales, ornaments, materials, etc. appearing on actual commercial rulers are decomposed, and those elements are recombined so that we can have a new perspective on the viewer. The content point is to observe the use of the ruler. You can measure the length of the ruler in reverse and see how long the different rulers are. We can also compare the units we are using with other units to see how long or short they really are. Lastly, aspects such as drawing and quilting that are practically used in our daily life were considered.",
        "kor" : "구성의 주된 그래픽적인 포인트는 자라는 물건으로부터 확장된 오브젝트에 있다. 자를 이루는 요소들 표현하기 위해 실제 시중의 자에 나타난 숫자, 눈금, 오너먼트, 재질등을 분해하기도 하며, 그러한 요소들을 재조합하여 우리가 보는 자에 대해 새로운 시각을 갖을 수 있도록 작업하였다. 내용적인 포인트는 자의 사용에 대해 관찰해보는 것에 있다. 길이를 재기위한 자를 역으로 재어보며 제 각기 다른 자는 얼마나 긴지에 대한 부분들을 볼 수 있다. 또한 우리가 사용하는 단위가 실제로 얼만큼 길거나 짧은지를 알아보기 위해 다른 단위랑 비교해볼 수 있다. 마지막으로 자가 실질적으로 우리 생활에 활용되는 작도나 퀼트같은 면도 고려하였다. "
    },
]
const bottomText = [
    {
        "eng" : "Ruler Object",
        "kor" : "오브젝트 구성",
    },
]
const image = [
    Ruler_Content1,
    Ruler_Content2,
    Ruler_Content3,
    Ruler_Content4,
    Ruler_Content5,
    Ruler_Content6,
]


const component = [
    {
        type: "MainTitle",
        color: color["sub"],
        category: category,
        isThin: true,
        title: title,
    },{
        type: "Logo",
        paddingTopBottom: {deskTop: "13", mobile: "13"},
        paddingLeftRight: {deskTop: "10", mobile: "0"},
        backGroundColor: color["main"],
        logo: logo
    },{
        type: "Footnote",
        text: footnote[0],
        marginTop: "8",
        detailTop: "0",
        interval: "0",
    },{
        type: "MainText",
        mainText: mainText["0"],
        color: color["sub"],
        colorWidth: "16",
        colorSpeed: "1.2",
        marginBottom: "0",
        marginTop: "8",
    },{
        type: "MainText",
        mainText: mainText["1"],
        color: color["sub"],
        colorWidth: "16",
        colorSpeed: "1.2",
        marginBottom: "0",
        marginTop: "0",
    },{
        type: "OuterImg", 
        marginBottom: {deskTop: null, mobile: null},
        marginRight: {deskTop: null, mobile: null},
        marginLeft: {deskTop: null, mobile: "5"},
        marginTop: {deskTop: "10", mobile: "20"},
        height: {deskTop: "30",  mobile: "55"},
        width: {deskTop: "70", mobile: "85"},
        image: image["0"],
        isOutline: true,
        isFilter: false,
        isLeft: true,
        remark: null,
    },{
        type: "OuterImg",
        marginBottom: {deskTop: null, mobile: null},
        marginRight: {deskTop: null, mobile: "2"},
        marginLeft: {deskTop: null, mobile: "5"},
        marginTop: {deskTop: "8", mobile: "10"},
        height: {deskTop: "80",  mobile: "150"},
        width: {deskTop: "75", mobile: "90"},
        image: image["1"],
        isOutline: false,
        isFilter: false,
        isLeft: false,
        remark: {
            text: bottomText["0"],
            marginBottom: "0",
            marginRight: "3.5",
            marginLeft: "0",
            marginTop: "-0.5",
            lineHeight: "0",
            color: "black",
            isLeft: false,
        }
    },{
        type: "Footnote",
        marginTop: "10",
        interval: "4.5",
        text: footnote[1],
    },{
        type: "InnerImg",
        paddingBottom: {deskTop: "10", mobile: "10"},
        paddingRight: {deskTop: "5", mobile: "4"},
        paddingLeft: {deskTop: "5", mobile: "4"},
        paddingTop: {deskTop: "13", mobile: "20"},
        marginBottom: {deskTop: "0", mobile: null},
        marginTop: {deskTop: "0", mobile: "5"},
        color: "black",
        contents: [{
                marginLeft: {deskTop: null, mobile: "2"},
                marginTop: {deskTop: "0", mobile: "0"}, 
                height: {deskTop: "39", mobile: "61"},
                width: {deskTop: "90", mobile: "96"}, 
                img: image["2"],
                type: "Img", 
                isLeft: true,  
                remark: null
            },{
                marginLeft: {deskTop: null, mobile: "2"},
                marginTop: {deskTop: "0", mobile: "0"}, 
                height: {deskTop: "39", mobile: "61"},
                width: {deskTop: "90", mobile: "96"}, 
                img: image["3"],
                type: "Img", 
                isLeft: true,  
                remark: null
            },{
                marginLeft: {deskTop: null, mobile: "2"},
                marginTop: {deskTop: "0", mobile: "0"}, 
                height: {deskTop: "39", mobile: "61"},
                width: {deskTop: "90", mobile: "96"}, 
                img: image["4"],
                type: "Img", 
                isLeft: true,  
                remark: null
            },{
                marginLeft: {deskTop: null, mobile: "2"},
                marginTop: {deskTop: "0", mobile: "0"}, 
                height: {deskTop: "39", mobile: "61"},
                width: {deskTop: "90", mobile: "96"}, 
                img: image["5"],
                type: "Img", 
                isLeft: true,  
                remark: null
            },{
                marginBottom: {deskTop: "5", mobile: "15"},
                marginRight: {deskTop: "0", mobile: "5"},
                marginLeft: {deskTop: "0", mobile: "5"},
                marginTop: {deskTop: "10", mobile: "15"}, 
                width: {deskTop: "50", mobile: "100"}, 
                text: subText["0"],
                type: "Text", 
                isHorizon: false,
                isLeft: false,
                color: "white",
        }]
    }
]

const ruler = {
    name,
    category,

}

export default ruler