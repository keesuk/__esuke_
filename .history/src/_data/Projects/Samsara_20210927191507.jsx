import SamsaraLogo from "./img/_SamsaraLogo.jsx"
import Samsara_Content1 from "./img/Samsara_Content/Samsara-1.jpg"
import Samsara_Content2 from "./img/Samsara_Content/Samsara-12.png"
import Samsara_Content3 from "./img/Samsara_Content/Samsara-13.png"
import Samsara_Content4 from "./img/Samsara_Content/Samsara-14.png"

const contents = {
    name : "Samsara",
    title : "The Cycle Of Suffering",
    category : "Poster",
    logo: <SamsaraLogo/>,
    color : {
        "main" : theme.colorObjs["samsaraColor"],
        "sub" : theme.colorObjs["samsaraSubColor"],
        "TorB" : "B",
    },
    footnote : [
        "· Brief", 
        "· Output",
    ],
    mainText : {
        "0" : {
            "eng" : "Buddhism is an Indian religion founded by Siddhartha Gautama in the 6th century BC. Samsara, the core doctrine of Buddhism, has their own unique worldview. I thought that the charm of their worldview was both fantasy and serious. I thought that it was caused by a certain image of Buddhism, and I saw that wit could be found in such seriousness. This project was intended to induce ironic wit through playful and fun expressions of the solemn or majestic aura of tanhwa or existing statues.",
            "kor" : "불교는 기원전 6세기경 인도의 고타마 싯다르타에 의해 창시된 종교이다. 불교의 핵심 교리인 윤회는 그들만의 독특한 세계관을 지니고 있다. 나는 이들의 세계관이 지닌 그들만의 매력이 무거움에 반감된다 생각하며 그것은 불교가 지닌 어떠한 이미지에서 유발한다 보았다. 그렇기에 본 프로젝트에서 기존 탱화가 지닌 엄숙함의 아우라를 장난스럽고 재미있는 표현을 통해 아이러니적 위트를 유발하고자 한다.",
            "mark" : [{
                "title" : "Samsara",
                "num" : "1",
                "eng" : "Samsara is a Sanskrit word for reincarnation. The Buddhist worldview of reincarnation is divided into six categories, called the Six Ways Reincarnation. It is divided into Hell, Demon, Beast, Asura, Human, and Heaven. When you become a Buddha, you become a being that transcends these worlds.",
                "kor" : "삼사라는 윤회를 뜻하는 산스크리트어이다. 불교의 윤회 세계관은 여섯가지로 나뉘어져있으며, 육도윤회라고 부른다. 지옥도, 아귀도, 축생도, 아수라도, 인간도, 천상도로 나뉘어지며, 부처가 되면 이러한 세계를 초월한 존재자가 된다.",
            }]
        },
        "1" : {
            "eng" : "In the Buddhist thought of reincarnation, I worked on Arahan, Angel, the God of Fire who symbolize the human, Asura, and celestial ways that one would go to if they had accumulated good deeds.",
            "kor" : "나는 불교의 윤회 사상에서 선업을 쌓으면 가게되는 인간도, 아수라도, 천상도를 상징하는 나한, 예적금강, 천녀를 대상으로 작업하였다.",
            "mark" : []
        },
    },
    bottomText :{
        "0" : {
            "txtEng" : "Arahan, Angel, the God of Fire",
            "txtKor" : "나한, 천녀, 예적금강",
        },
        "1" : {
            "txtEng" : "Arahan",
            "txtKor" : "나한",
        },
        "2" : {
            "txtEng" : "the God of Fire",
            "txtKor" : "예적금강",
        },
        "3" : {
            "txtEng" : "Angel",
            "txtKor" : "천녀",
        }
    },
    image : {
        "0" : Samsara_Content1,
        "1" : Samsara_Content2,
        "2" : Samsara_Content3,
        "3" : Samsara_Content4,
    }
}

            <MainTitle
                color={color["sub"]}
                category={category}
                isThin={false}
                title={title}
            />
            <LogoBox 
                paddingTopBottom={{deskTop: "5", mobile: "2"}}
                paddingLeftRight={{deskTop: "32", mobile: "25"}}
                backGroundColor={color["main"]}
                logo={logo}
            />
            <Footnote
                text={footnote[0]}
                marginTop={"8"}
                interval={"0"}
            />
            <MainText 
                mainText={mainText["0"]}
                color={color["sub"]}
                colorWidth={"8.5"}
                colorSpeed={"1.2"}
                marginBottom={"0"}
                marginTop={"8"}
            />
            <MainText 
                mainText={mainText["1"]}
                marginBottom={"0"}
                marginTop={"0"}
            />
            <OuterImgBox 
                marginLeft={{deskTop: "37", mobile: "12"}}
                marginTop={{deskTop: "5", mobile: "10"}}
                height={{deskTop: "40",  mobile: "110"}}
                width={{deskTop: "80", mobile: "75"}}
                image={image["0"]}
                isOutline={false}
                isFilter={false}
                isLeft={true}
                remark={{
                    text: bottomText["0"],
                    marginBottom: "0",
                    marginRight: "0",
                    marginLeft: "0",
                    marginTop: "0",
                    lineHeight: "1.4",
                    color: "",
                    isLeft: true,
                }}
            />
            <Footnote
                text={footnote[1]}
                marginTop={"9.5"}
                interval={"4"}
            />
            <InnerImgBox
                paddingBottom={{deskTop: "5", mobile: "10"}}
                paddingRight={{deskTop: "5", mobile: "4"}}
                paddingLeft={{deskTop: "5", mobile: "4"}}
                paddingTop={{deskTop: "10", mobile: "25"}}
                marginBottom={{deskTop: "0", mobile: null}}
                marginTop={{deskTop: "5", mobile: "5"}}
                color={"black"}
                contents={[{ 
                        marginLeft: {deskTop: null, mobile: "2"},
                        marginTop: {deskTop: "0", mobile: "5"}, 
                        height: {deskTop: "60", mobile: "130"},
                        width: {deskTop: "65", mobile: "98"}, 
                        img: image["1"],
                        type: "Img",
                        isLeft: true, 
                        remark: {
                            text: bottomText["1"],
                            marginBottom: "0",
                            marginRight: "0",
                            marginLeft: "0",
                            marginTop: "0",
                            lineHeight: "1.4",
                            color: "white",
                            isLeft: false,
                    }},{
                        marginLeft: {deskTop: null, mobile: "2"},
                        marginTop: {deskTop: "0", mobile: "5"}, 
                        height: {deskTop: "60", mobile: "130"},
                        width: {deskTop: "65", mobile: "98"}, 
                        img: image["2"],
                        type: "Img",
                        isLeft: true, 
                        remark: {
                            text: bottomText["2"],
                            marginBottom: "0",
                            marginRight: "0",
                            marginLeft: "0",
                            marginTop: "0",
                            lineHeight: "1.4",
                            color: "white",
                            isLeft: false,
                    }},{
                        marginLeft: {deskTop: null, mobile: "2"},
                        marginTop: {deskTop: "0", mobile: "5"}, 
                        height: {deskTop: "60", mobile: "130"},
                        width: {deskTop: "65", mobile: "98"}, 
                        img: image["3"],
                        type: "Img",
                        isLeft: true, 
                        remark: {
                            text: bottomText["3"],
                            marginBottom: "0",
                            marginRight: "0",
                            marginLeft: "0",
                            marginTop: "0",
                            lineHeight: "1.4",
                            color: "white",
                            isLeft: false,
                }}]}
            />
            <FolioList
                category={category}
                exceptionName={name}
                marginTop={"4"}
                marginLeft={"10"}
                marginRight={"5"}
                marginBottom={"5"}
                subTitle={{
                    text:"see More",
                    marginTop: "10",
                    marginLeft: "10"
                }}
            />

        </MainLayout>
    )
}

export default _Samsara;