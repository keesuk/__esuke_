import image1 from "../img/WeCat_Content/WeCat-11.jpg"
import image2 from "../img/WeCat_Content/WeCat-12.jpg"
import image3 from "../img/WeCat_Content/WeCat-13.jpg"
import image4 from "../img/WeCat_Content/WeCat-14.jpg"
import image5 from "../img/WeCat_Content/WeCat-15.jpg"
import image6 from "../img/WeCat_Content/WeCat-16.jpg"



const title = "We Eat Catering"
const width = "54"
const height = "30"
const year = "Sep 2019"
const isLeft = true
const color = "#007336"
const assign = {
    "eng" : "Creating Brand identity and application that provides morning subscription service.",
    "kor" : "아침 구독 서비스를 제공하는 브랜드 아이덴티티 및 어플 제작.",
}
const tag = [
    "Logo", 
    "Editorial", 
    "Infographic"
]
const mainText = {
    "eng" : "We Eat is the main service of We Huddling Co., Ltd. company's mission is to ensure that everyone has a healthy diet. The average breakfast intake rate for Korean office workers is 52% of the total, and the rest skip or skip meals. Most of the reasons they couldn't have breakfast were because it was difficult to get a proper meal during rush hour. The meal difficulties of office workers, which are not easy to take off at convenience stores, let alone set meals, were viewed as the core pain point of the service, and We Eat Delight(after, We Del) was born to solve these problems.",
    "kor" : "위잇은 주식회사 위허들링의 메인 서비스이다. 회사의 미션은 모든 이들의 식사건강을 갖도록 하는 것이다. 대한민국 회사원 평균 조식 섭취비율은 전체 평균 52%, 나머지는 끼니를 거르거나 대충 떼운다. 그들이 아침 식사를 하지 못하는 대부분의 이유는 바쁜 출근시간에 끼니를 제대로 챙기기 어려움에 있었다. 정식은 고사하고 편의점에서 떼우는 것도 쉽지 않은 직장인들의 식사고충이 서비스의 페인포인트라고 보았고, 위잇 딜라이트(이하 위딜)는 그런 문제를 해결한다.",
    "mark" : [
        {
            "title" : "We Huddling",
            "num" : "1",
            "eng" : "festival is that they are temporary and provide a similar experience to consumers",
            "kor" : "페스티벌들의 한계는 한시적이고, 매년 비슷한 방식, 비슷한 게스트 등 소비자에게 유사할 수 밖에 없는 경험을 제공한다는 것",
        }
    ]
}

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
    },{
        type: "image",
        image: image5
    },{
        type: "image",
        image: image6
    }
]


const contents = {
    mainText : mainText,
    keyColor : color,
    assign : assign,
    height : height,
    isLeft : isLeft,
    width : width,
    title : title, 
    image : image,
    year : year,
    tag : tag,
}

export default contents