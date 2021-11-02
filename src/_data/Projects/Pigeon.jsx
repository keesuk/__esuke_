import Logo from "../img/Pigeon_Content/_PigeonLogo.jsx"
import thumbnail from "../img/Pigeon_Content/Pigeon-Thumbnail.png"
import image1 from "../img/Pigeon_Content/Pigeon-11.jpg"
import image2 from "../img/Pigeon_Content/Pigeon-12.jpg"
import image3 from "../img/Pigeon_Content/Pigeon-13.jpg"
import image4 from "../img/Pigeon_Content/Pigeon-14.jpg"
import image5 from "../img/Pigeon_Content/Pigeon-15.jpg"
import image6 from "../img/Pigeon_Content/Pigeon-16.jpg"


const title = "Pigeon Brand Book"
const year = "Sep 2019"
const width = "84"
const height = "38"
const isLeft = false
const logo = <Logo/>
const color = "#ff677f"
const assign = {
    "eng" : "Lettering a new logo of Pigeon brand, Creating its brand book.",
    "kor" : "피죤의 새로운 로고 레터링과 브랜드북을 제작하였다.",
}
const tag = [
    "Logo", 
    "Editorial", 
    "Infographic"
]
const mainText = {
    "eng" : "Pigeon is a Korean chemical and detergent company. The logo currently being used was created in 1998, and the main selling product of Pigeon at that time was detergent. Due to business diversification, the product that Pigeon is currently trying to sell is a fabric softener that appears repeatedly on TV advertisements and on its website. However, Pigeon's logo is thought to remain the same as it was 30 years ago, which means the lack of appeal to the fragrance, which is the selling point of fabric softeners. So, through this project, I want to produce a logo that matches the sales strategy of Pigeon and a publication that can introduce the brand of Pigeon.",
    "kor" : "피죤은 대한민국 화확제품 및 세제 회사이다. 현재 사용되고 있는 로고는 1998년에 제작되었으며, 당시 피죤의 주력 판매 제품은 세제였다. 사업의 다각화로 현재 피죤이 주력으로 판매하고자 하는 상품은 TV광고나 홈페이지에 반복적으로 등장하는 섬유유연제라 판단된다. 그러나 피죤의 로고는 30년 전의 세제 느낌 그대로 머물러 있다 생각되며, 이는 섬유유연제의 셀링 포인트인 향기에 대한 어필의 부족을 뜻한다. 그래서 나는 본 프로젝트를 통해 피죤의 판매 전략과 결이 맞는 로고와 피죤이라는 브랜드를 소개할 수 있는 출판물을 제작하려 한다.",
    "mark" : [
        {
            "title" : "Pigeon",
            "num" : "1",
            "eng" : "Pigeon with the slogan 'Pigeon for laundry' is a Korean detergent company with 43 years of history. The products it sells cover a full range of products that target housewives, such as detergents, textiles, and kitchenware, and the main selling product is fabric softener.",
            "kor" : "'빨래엔 피죤'이라는 슬로건을 지닌 피죤은 43년의 역사를 지닌 대한민국의 세제 기업이다. 판매하는 제품은 세제, 섬유, 주방용품 등 주부들을 타겟으로 하는 전범위를 다루며, 주력 판매 제품은 섬유유연제이다.",
        }
    ]
}

const image = [
    {
        type: "logo",
        paddingLR: {deskTop: "4", mobile: "10"},
        paddingTB: {deskTop: "24", mobile: "10"},
        color: color,
        logo: logo,
    },{
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
    thumbnail : thumbnail,
    mainText : mainText,
    keyColor : color,
    assign : assign,
    height : height,
    isLeft : isLeft,
    width : width,
    title : title, 
    image : image,
    logo : logo,
    year : year,
    tag : tag,
}

export default contents