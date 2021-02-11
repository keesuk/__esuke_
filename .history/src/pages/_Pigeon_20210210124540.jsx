import styled from "styled-components";
import PigeonLogo from "../_data/img/_PigeonLogo.jsx"

import Pigeon_Content1 from "../_data/img/Pigeon_Content/Pigeon-12.png"
import Pigeon_Content2 from "../_data/img/Pigeon_Content/Pigeon-13.png"
import Pigeon_Content3 from "../_data/img/Pigeon_Content/Pigeon-14.png"
import Pigeon_Content4 from "../_data/img/Pigeon_Content/Pigeon-15.png"
import Pigeon_Content5 from "../_data/img/Pigeon_Content/Pigeon-16.png"
import Pigeon_Content6 from "../_data/img/Pigeon_Content/Pigeon-17.png"
import Pigeon_Content7 from "../_data/img/Pigeon_Content/Pigeon-18.png"

const TitleDiv = styled.div`
    margin-top: 5%;
    margin-left: 7%;
    margin-right: 18%;
    font-size: 2.6rem;
    letter-spacing: -.06rem;
    line-height: 4.4rem;
    color: black;

    mark {
        display: inline-block; 
        height: 1.4rem;
        line-height: 1.6rem;
        padding-top: -1rem;
        background-color: hotpink;
    }
`;
const TitlePicDiv = styled.div`
    pointer-events: none;
    background-color: ${props => props.color};
    margin-left: 2.5vw;
    margin-top: 2.5vw;
    width: calc(100%-2.5vw);
    padding: 16% 13%;
    transition: all .2s;

    .logo {
        pointer-events: auto;
        width: 50vw;
        .logoType {
            fill: white;
    }}
    &:hover {
        background-color: white;
        .logoType { 
            fill: black; 
    }}
`;
const ImgBox = styled.div`
    margin-left: 2.5vw;
    margin-right: 2.5vw;
    margin-top: ${props => props.marginTop}vw;

    .img {
        width: 60%;
        border: .05rem solid #999;
    }
`;
const MainText = styled.div`
    display: inline-flex;
    margin-left: 15%;
    margin-right: 5%;
    margin-top: 5vw;

    div {
        margin: 0 4vw 0 0;
    }
    div:nth-child(2n) {
        margin-right: 0;
    }
`;
const EngContentsDiv = styled.div`
    font-family: 'Cormorant Garamond', serif;
    font-weight: 500;
    word-spacing: .2rem;
    width: 52%;
    line-height: 2.2rem;
    letter-spacing: -.025rem;
    font-size: 1.4rem;
`;
const KorContentsDiv = styled.div`
    width: 35%;
    font-weight: 400;
    word-spacing: -.25rem;
    letter-spacing: -.25rem;
    line-height: 2.2rem;
    letter-spacing: 0rem;
    font-size: .95rem;
    text-align: justify;
`;
const BackgroundPicDiv = styled.div`
    background-color: ${props => props.color};
    margin-left: 2.5vw;
    margin-top: ${props => props.marginTop}vw;
    width: calc(100%-2.5vw);
    padding: 16% 13%;

    .img {
        width: 50vw;
    }
`;

const Marks = styled.mark`
    display: inline-block;
    height: 1.4rem;
    line-height: 1.6rem;
    padding-top: -1rem;
    background-color: hotpink;
    transition: all .1s;

    .marksIn {
        @supports (backdrop-filter: none) {
            backdrop-filter: blur(.4rem);
            background-color: rgba(255, 255, 250, .1);  
        }
        transition: all .2s;
        pointer-events: none;
        font-family: 'IBM Plex Mono', monospace;
        box-shadow: .15rem .15rem .15rem rgba(0, 0, 0, .4);
        font-style: italic;
        font-size: .8rem;
        border: .05rem solid #aaa;
        border-radius: .5rem;
        display: block;
        padding: 5px 0;
        max-width: 15rem;
        position: absolute;
        margin-top: .3rem;
        margin-left: 1rem;
        z-index: 1000;
        padding: 1.4rem 2rem;
        text-align: center;
        opacity: 0;
    }

    &:hover {
        background-color: yellow;

        .marksIn {
            opacity: 1;
        }
    }
`;

const _Pigeon = () => {
    return(<>
        <TitleDiv>
            <mark>Pigeon Brand Book:</mark><br/>
            Editorial
        </TitleDiv> 
        <TitlePicDiv color={"#ff677f"}>
            <div className="logoBox">
                <div className="logo">
                    <PigeonLogo/>
                </div>
            </div>
        </TitlePicDiv>
        <MainText>
            <EngContentsDiv>
                <Marks>
                    festivals
                    <div className="marksIn">
                        festival is that they are temporary and provide a similar experience to consumers
                    </div>
                </Marks> 
                is that they are temporary and provide a similar experience to consumers, such as similar guests, every year. This happens because you cannot help but consider realistic aspects such as ticket power and customer base. Branded in 2017, the Grand Mint Festival not only had such chronic problems, but also had a clear lack of identity and expansion. In addition, the concept of the 2017 Grand Mint Festival was considered to be insufficient branding to convey the originally intended
            </EngContentsDiv>
            <KorContentsDiv>
                페스티벌들의 한계는 한시적이고, 매년 비슷한 방식, 비슷한 게스트 등 소비자에게 유사할 수 밖에 없는 경험을 제공한다는 것입니다. 이는 티켓파워, 고객층 유지 등 현실적인 부분을 고려하지 않을 수 없기 때문에 발생합니다. 2017년 브랜딩된 ‘그랜드 민트 페스티벌’은 그러한 고질적인 문제를 담고 있었습니다. 인디밴드 플랫폼 민트페이퍼 산하의 페스티벌이고, 2007년 인디밴드 라인업으로 진행했던 체제와 다르게 2017년이 된 지금에서는 장르 분문 다양한 아티스트들이 출현 하고 있습니다.
            </KorContentsDiv>
        </MainText>
        <ImgBox marginTop={10}>
            <img className="img" alt="" src={Pigeon_Content1}/>
            <div className="remark">
            </div>
        </ImgBox>
        <BackgroundPicDiv color={"black"}>
            <div className="box">
                <img className="img" alt="" src={Pigeon_Content2}/>
                <img className="img" alt="" src={Pigeon_Content3}/>
                <img className="img" alt="" src={Pigeon_Content4}/>
                <img className="img" alt="" src={Pigeon_Content5}/>
                <img className="img" alt="" src={Pigeon_Content6}/>
                <img className="img" alt="" src={Pigeon_Content7}/>
            </div>
        </BackgroundPicDiv>
    </>)
}

export default _Pigeon;



        // &:before {
        //     content: "";
        //     width: 0;
        //     height: 0;
        //     border-style: solid;
        //     border-width: 0 1rem 1rem 1rem;
        //     border-color: transparent transparent #aaa transparent;
        //     position: absolute;
        //     left: 0;
        //     top: 0;
        //     margin-top: -1rem;
                
        // }