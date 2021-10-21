import thumbnail from "../img/Samsara_Content/Samsara-Thumbnail.png"
import image1 from "../img/Samsara_Content/Samsara-11.jpg"
import image2 from "../img/Samsara_Content/Samsara-12.jpg"
import image3 from "../img/Samsara_Content/Samsara-13.jpg"


const title = "Samsara Poster"
const year = "Mar 2019"
const width = "55"
const height = "50"
const isLeft = false
const color = "#662583"
const assign = {
    "eng" : "Posters symbolizing the creatures of the cycle of suffering in Buddhism.",
    "kor" : "불교의 윤회 세계를 상징하는 존재자들에 대한 포스터를 제작했다.",
}
const tag = [
    "Poster", 
    "Graphic"
]

const mainText = 
    {
        "eng" : "Buddhism is an Indian religion founded by Siddhartha Gautama in the 6th century BC. Samsara, the core doctrine of Buddhism, has their own unique worldview. I thought that the charm of their worldview was both fantasy and serious. I thought that it was caused by a certain image of Buddhism, and I saw that wit could be found in such seriousness. This project was intended to induce ironic wit through playful and fun expressions of the solemn or majestic aura of tanhwa or existing statues. In the Buddhist thought of reincarnation, I worked on Arahan, Angel, the God of Fire who symbolize the human, Asura, and celestial ways that one would go to if they had accumulated good deeds.",
        "kor" : "불교는 기원전 6세기경 인도의 고타마 싯다르타에 의해 창시된 종교이다. 불교의 핵심 교리인 윤회는 그들만의 독특한 세계관을 지니고 있다. 나는 이들의 세계관이 지닌 그들만의 매력이 무거움에 반감된다 생각하며 그것은 불교가 지닌 어떠한 이미지에서 유발한다 보았다. 그렇기에 본 프로젝트에서 기존 탱화가 지닌 엄숙함의 아우라를 장난스럽고 재미있는 표현을 통해 아이러니적 위트를 유발하고자 한다. 나는 불교의 윤회 사상에서 선업을 쌓으면 가게되는 인간도, 아수라도, 천상도를 상징하는 나한, 예적금강, 천녀를 대상으로 작업하였다.",
        "mark" : [
            {
                "title" : "Samsara",
                "num" : "1",
                "eng" : "Samsara is a Sanskrit word for reincarnation. The Buddhist worldview of reincarnation is divided into six categories, called the Six Ways Reincarnation. It is divided into Hell, Demon, Beast, Asura, Human, and Heaven. When you become a Buddha, you become a being that transcends these worlds.",
                "kor" : "삼사라는 윤회를 뜻하는 산스크리트어이다. 불교의 윤회 세계관은 여섯가지로 나뉘어져있으며, 육도윤회라고 부른다. 지옥도, 아귀도, 축생도, 아수라도, 인간도, 천상도로 나뉘어지며, 부처가 되면 이러한 세계를 초월한 존재자가 된다.",
            }
        ]
    }

const image = [
    {
        type: "image",
        image: image2
    },{
        type: "image",
        image: image1
    },{
        type: "image",
        image: image3
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
    year : year,
    tag : tag,
}

export default contents
