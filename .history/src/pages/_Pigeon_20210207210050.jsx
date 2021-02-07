import styled from "styled-components";
import PigeonLogo from "../_data/img/_PigeonLogo.jsx"

const TitleDiv = styled.div`
    margin-left: 5vw;
    margin-top: 3.5vw;
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
    background-color: #ff677f;
    margin-left: 2.5vw;
    margin-top: 2.5vw;
    width: calc(100%-2.5vw);
    padding: 16% 13%;

    .box {
        width: 50vw;
    }
`;
const ContentsDiv = styled.div`
    width: 40%;
    margin-left: 5vw;
    margin-top: 5vw;
    font-size: .8rem;
`;
const _Pigeon = () => {
    return(<>
        <TitleDiv>
            <mark>Pigeon Brand Book:</mark><br/>
            Editorial
        </TitleDiv> 
        <TitlePicDiv>
            <div className="box">
                <PigeonLogo/>
            </div>
        </TitlePicDiv>
        <ContentsDiv>
        festivals is that they are temporary and provide a similar experience to consumers, such as similar guests, every year. This happens because you cannot help but consider realistic aspects such as ticket power and customer base. Branded in 2017, the Grand Mint Festival not only had such chronic problems, but also had a clear lack of identity and expansion. In addition, the concept of the 2017 Grand Mint Festival was considered to be insufficient branding to convey the originally intended
        </ContentsDiv>
        <ContentsDiv>
            푸드테크 스타트업 위허들링의 전 서비스 위윗 브랙퍼스트는 서비스 실행에서 큰 볼륨으로 인한 물리적인 한계들이 존재했습니다. 이에 따라, 온라인에서 제공되는 부분을 제외한 오프라인으로만 제공되는 서비스를 구현하기 위해 가벼운 버전이라는 라이트 모델을 제작하였습니다. 아침 푸드 시장을 리서치한 결과 사무실 푸드배송 구독 서비스는 스낵24와 프레시코드 외 다양한 서비스가 제공되고 있었고 탄탄한 모델을 구현하여 소비자들의 만족을 얻고 있었습니다. 하지만 타브랜드들의 경험설계 측면에 있어서 아침 제공의 독특한 경험보단 기본적인 요건 충족
        </ContentsDiv>
    </>)
}

export default _Pigeon;