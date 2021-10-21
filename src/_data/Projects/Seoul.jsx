import Logo from "../img/Seoul_Content/_SeoulLogo.jsx"
import thumbnail from "../img/Seoul_Content/Seoul-Thumbnail.png"
import image1 from "../img/Seoul_Content/Seoul-11.gif"
import image2 from "../img/Seoul_Content/Seoul-12.jpg"
import image3 from "../img/Seoul_Content/Seoul-13.jpg"
import image4 from "../img/Seoul_Content/Seoul-14.gif"
import image5 from "../img/Seoul_Content/Seoul-15.gif"
import image6 from "../img/Seoul_Content/Seoul-16.gif"
import image7 from "../img/Seoul_Content/Seoul-17.gif"
import image8 from "../img/Seoul_Content/Seoul-18.gif"
import image9 from "../img/Seoul_Content/Seoul-19.jpg"
import image10 from "../img/Seoul_Content/Seoul-20.jpg"
import image11 from "../img/Seoul_Content/Seoul-21.jpg"


const title = "Seoul That We See"
const year = "Mar 2020"
const width = "45"
const height = "54"
const isLeft = true
const logo = <Logo/>
const color = "#DEDEDE"
const assign = {
    "eng" : "A website project to share about Seoul as seen by each person.",
    "kor" : "각자가 보는 서울에 대해 공유하는 웹 사이트 프로젝트",
}
const tag = [
    "Logo", 
    "Editorial", 
    "Infographic"
]
const mainText = 
    {
        "eng" : "Each region has a different meaning in each individual's experience. Therefore, the specific area I see may or may not be the same as the point of view of others. 'Seoul that we see' was made with this idea in mind. Seoul, the representative city of Korea, is a place where a large number of people come and go, so it has a relatively wide consensus compared to other cities. Therefore, even when looking at a specific area, Seoul can have a variety of perspectives, and sympathy or unfamiliar emotions can be felt in it. 'Seoul that we see' aims to visualize data that can be sympathetic by reconstructing different perspectives and memories. Through this, we want to draw an empathy map through emotional data of various people.",
        "kor" : "지역은 개개인의 경험 속 저마다의 다른 의미가 존재한다. 그렇기 때문에 내가 보는 특정 지역은 타인이 보는 관점과 다를 수도, 같을 수도 있다. 우리가 본 서울시 프로젝트는 이러한 아이디어에 착안하여 제작 되었다. 대한민국을 대표하는 도시 서울은 방대한 사람들이 오가는 곳이기에 타도시에 비해 비교적 넓은 공감대를 지니고 있다. 때문에 서울시는 특정지역을 보더라도 다양한 관점이 나올 수 있고, 그 속에서 공감 혹은 낯선 감정들을 느낄 수 있다. 우리가 본 서울시 프로젝트는 저마다의 다른 관점, 추억을 재구성하여 공감이 될 수 있는 데이터 시각화를 목표로 한다. 이를 통해 여러 사람들의 감정 데이터를 통한 공감지도를 그려보고자 한다.",
        "mark" : []
    }


const image = [
    {
        type: "image",
        image: image1
    },{
        type: "logo",
        paddingLR: {deskTop: "1", mobile: "10"},
        paddingTB: {deskTop: "60", mobile: "10"},
        color: color,
        logo: logo,
    },{
        type: "image",
        image: image2
    },{
        type: "image",
        image: image3
    },{
        type: "browser",
        image: image4
    },{
        type: "browser",
        image: image5
    },{
        type: "browser",
        image: image7
    },{
        type: "browser",
        image: image6
    },{
        type: "browser",
        image: image8
    },{
        type: "image",
        image: image9
    },{
        type: "image",
        image: image10
    },{
        type: "image",
        image: image11
    }
]

const contents = {
    thumbnail : thumbnail,
    mainText : mainText,
    keyColor : color,
    isLeft : isLeft,
    assign : assign,
    height : height,
    width : width,
    title : title, 
    image : image,
    logo : logo,
    year : year,
    tag : tag,
}

export default contents