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
    background-color: ${props => props.color};
    margin-left: 2.5vw;
    margin-top: 2.5vw;
    width: calc(100%-2.5vw);
    padding: 16% 13%;

    .logo {
        width: 50vw;

        &:hover {

        }
    }
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

const _Pigeon = () => {
    return(<>
        <TitleDiv>
            <mark>Pigeon Brand Book:</mark><br/>
            Editorial
        </TitleDiv> 
        <TitlePicDiv color={"#ff677f"}>
            <div className="logo">
                <PigeonLogo color={["#ff677f", "white"]}/>
            </div>
        </TitlePicDiv>
        <MainText>
            <EngContentsDiv>
                festivals is that they are temporary and provide a similar experience to consumers, such as similar guests, every year. This happens because you cannot help but consider realistic aspects such as ticket power and customer base. Branded in 2017, the Grand Mint Festival not only had such chronic problems, but also had a clear lack of identity and expansion. In addition, the concept of the 2017 Grand Mint Festival was considered to be insufficient branding to convey the originally intended
            </EngContentsDiv>
            <KorContentsDiv>
                푸드테크 스타트업 위허들링의 전 서비스 위윗 브랙퍼스트는 서비스 실행에서 큰 볼륨으로 인한 물리적인 한계들이 존재했습니다. 이에 따라, 온라인에서 제공되는 부분을 제외한 오프라인으로만 제공되는 서비스를 구현하기 위해 가벼운 버전이라는 라이트 모델을 제작하였습니다. 아침 푸드 시장을 리서치한 결과 사무실 푸드배송 구독 서비스는 스낵24와 프레시코드 외 다양한 서비스가 제공되고 있었고 탄탄한 모델을 구현하여 소비자들의 만족을 얻고 있었습니다. 하지만 타브랜드들의 경험설계 측면에 있어서 아침 제공의 독특한 경험보단 기본적인 요건 충족
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