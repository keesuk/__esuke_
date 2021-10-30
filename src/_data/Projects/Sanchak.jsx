import image1 from "../img/Sanchak_Content/Sanchak-11.jpg"
import image2 from "../img/Sanchak_Content/Sanchak-12.jpg"
import image3 from "../img/Sanchak_Content/Sanchak-13.jpg"
import image4 from "../img/Sanchak_Content/Sanchak-14.jpg"

const title = "Walking Card"
const year = "Aug 2020"
const width = "54"
const height = "30"
const isLeft = true
const color = "#1c75bc"
const assign = {
    "eng" : "Brand identity and product development with companion animals.",
    "kor" : "반려동물과 함께하는 브랜드 아이덴티티와 해당 제품 개발.",
}
const tag = [
    "Logo", 
    "Editorial", 
    "Infographic"
]
const image = [
    {
        type: "image",
        image: image1
    },{
        type: "image",
        image: image2
    },{
        type: "image",
        image: image3
    },{
        type: "image",
        image: image4
    },
]
const mainText = {
    "eng" : "However, these macro-policies saw that it was difficult to meet the direct needs of companion animal owners. As a result of the questionnaire drawn on companion animal caregivers, the biggest difficulty in raising companion animals was the difficult conditions for taking a walk. As a result, attachment dolls and walking agency services were introduced to replace them, but they did not approach the fundamental problem solving. So, we launched the brand Sanchak, which helps pets and their owners get closer to each other, and produced the product San Check and for their memorial Sanchak Card.",
    "kor" : "하지만 이러한 거시적인 정책들은 반려동물 보유자의 직접적인 니즈 충족이 어렵다고 보았다. 반려동물 양육자 대상으로 도출된 설문결과 반려동물 양육의 가장 큰 고충은 산책을 시키기 어려운 여건이였다. 그에 따라 이를 대신할 애착인형이나 산책대행 서비스등이 나왔지만 근본적인 문제해결에 접근하지 못한다고 보았다. 그래서 '반려동물과 주인이 가까워지는 시간'을 갖을 수 있게 도와주는 브랜드 가까를 출시하고 제품 산체크와 추억을 위한 가까 카드를 제작하였다.",
    "mark" : [
        {
            "title" : "Sanchak",
            "num" : "1",
            "eng" : "It has two meanings: to be near and to go. This implies that pets and their owners get closer and go for a walk for this purpose.",
            "kor" : "가까는 가까운과 갈까, 두 가지 의미를 담고 있다. 이는 반려동물과 보호자가 가까워진다는 것과 이를 위해 산책을 가게함을 내포한다.",
        },{
            "title" : "San Check",
            "num" : "2",
            "eng" : "Sanchek means a record sheet for checking walks. One of the two close-up products. Details are described below.",
            "kor" : "산체크는 산책을 체크하는 기록지라는 뜻이다. 가까의 두 가지 제품 중 하나이다. 자세한 내용 후술되어 있다.",
        },{
            "title" : "Sanchak Card",
            "num" : "3",
            "eng" : "Sanchak card was made to post memories. One of the two close-up products. Details are described below.",
            "kor" : "가까 카드는 추억을 포스팅하기 위해 제작하였다. 가까의 두 가지 제품 중 하나이다. 자세한 내용 후술되어 있다.",
        }
    ]
}

const contents = {
    mainText : mainText,
    keyColor : color,
    isLeft : isLeft,
    assign : assign,
    height : height,
    width : width,
    title : title, 
    image : image,
    year : year,
    tag : tag,
}

export default contents