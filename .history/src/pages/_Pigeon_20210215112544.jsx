import { useRef, createRef } from "react";
import ReactCursorPosition from "react-cursor-position";
import debounce from "lodash.debounce";

import Cursor from "../components/_Cursor.jsx";
import { RightDiv } from "../css/SMainLayout.js";
import { colors } from "../css/_Color.jsx";
import { TitleDiv, TitlePicDiv, MainText, ImgBox, BackgroundPicDiv, Marks } from "../css/SContent.js";

import PigeonLogo from "../_data/img/_PigeonLogo.jsx";
import PageStyle from "../components/_PageStyle.jsx";
import Pigeon_Content1 from "../_data/img/Pigeon_Content/Pigeon-12.png"
import Pigeon_Content2 from "../_data/img/Pigeon_Content/Pigeon-13.png"
import Pigeon_Content3 from "../_data/img/Pigeon_Content/Pigeon-14.png"
import Pigeon_Content4 from "../_data/img/Pigeon_Content/Pigeon-15.png"
import Pigeon_Content5 from "../_data/img/Pigeon_Content/Pigeon-16.png"
import Pigeon_Content6 from "../_data/img/Pigeon_Content/Pigeon-17.png"
import Pigeon_Content7 from "../_data/img/Pigeon_Content/Pigeon-18.png"



const _Pigeon = () => {
    const arr = ["· intro", "· output"]
    const styRefs = useRef([])
    styRefs.current = arr.map(i => styRefs.current[i] = createRef())
    const rcp = useRef()

    
    const reset = debounce(() => {
        rcp.current.reset()}, 250, { leading: false, trailing: true }
    )

    return(
    <RightDiv onScroll={reset}>
        <ReactCursorPosition ref={rcp}>
            <Cursor/>
            {arr.map((v, i) =>
                <PageStyle 
                    el={styRefs.current[i]} 
                    text={v}
                    key={i}
                    ord={i}
                />
            )}
            <TitleDiv>
                <mark>Pigeon Brand Book:</mark><br/>
                Editorial
            </TitleDiv> 
            <TitlePicDiv color={`${colors["pigeonColor"]}`}>
                <div className="logoBox">
                    <div className="logo">
                        <PigeonLogo/>
                    </div>
                </div>
            </TitlePicDiv>
            <MainText>
                <div className="engContents" ref={styRefs.current[0]}>
                    <Marks>
                        <span className="text">festival<span className="num">1</span></span>
                        <span className="marksIn">
                            festival is that they are temporary and provide a similar experience to consumers
                        </span>
                    </Marks> 
                    is that they are temporary and provide a similar experience to consumers, such as similar guests, every year. This happens because you cannot help but consider realistic aspects such as ticket power and customer base. Branded in 2017, the Grand Mint Festival not only had such chronic problems, but also had a clear lack of identity and expansion. In addition, the concept of the 2017 Grand Mint Festival was considered to be insufficient branding to convey the originally intended
                </div>
                <div className="korContents">
                    페스티벌들의 한계는 한시적이고, 매년 비슷한 방식, 비슷한 게스트 등 소비자에게 유사할 수 밖에 없는 경험을 제공한다는 것입니다. 이는 티켓파워, 고객층 유지 등 현실적인 부분을 고려하지 않을 수 없기 때문에 발생합니다. 2017년 브랜딩된 ‘그랜드 민트 페스티벌’은 그러한 고질적인 문제를 담고 있었습니다. 인디밴드 플랫폼 민트페이퍼 산하의 페스티벌이고, 2007년 인디밴드 라인업으로 진행했던 체제와 다르게 2017년이 된 지금에서는 장르 분문 다양한 아티스트들이 출현 하고 있습니다.
                </div>
            </MainText>
            <ImgBox marginTop={10} height={24}>
                <img className="img" alt="" src={Pigeon_Content1}/>
                <div className="remark">
                </div>
            </ImgBox>
            <BackgroundPicDiv color={"black"} ref={styRefs.current[1]}>
                <div className="box">
                    <img className="img" alt="" src={Pigeon_Content2}/>
                    <img className="img" alt="" src={Pigeon_Content3}/>
                    <img className="img" alt="" src={Pigeon_Content4}/>
                    <img className="img" alt="" src={Pigeon_Content5}/>
                    <img className="img" alt="" src={Pigeon_Content6}/>
                    <img className="img" alt="" src={Pigeon_Content7}/>
                </div>
            </BackgroundPicDiv>
        </ReactCursorPosition>
    </RightDiv>
)}

export default _Pigeon;

