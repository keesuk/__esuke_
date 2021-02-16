import { useRef, createRef } from "react";
import ReactCursorPosition from "react-cursor-position";
import debounce from "lodash.debounce";

import Cursor from "../components/_Cursor.jsx";
import PageStyle from "../components/_PageStyle.jsx";

import { TitleDiv, TitlePicDiv, MainText, ImgBox, BackgroundPicDiv, Marks } from "../css/SContent.js";
import { RightDiv } from "../css/SMainLayout.js";
import { PigeonContents } from "../_data/_Data.jsx";


const _Pigeon = () => {
    const { pageStyle, marks, title, category, color, logo, text, image }  =  PigeonContents
    const rcp = useRef()
    const styRefs = useRef([])
    
    styRefs.current = pageStyle.map(i => styRefs.current[i] = createRef())

    const reset = debounce(() => {
        rcp.current.reset()}, 250, { leading: false, trailing: true }
    )

    return(
    <RightDiv onScroll={reset}>
        <ReactCursorPosition ref={rcp}>
            <Cursor/>
            {pageStyle.map((v, i) =>
                <PageStyle 
                    el={styRefs.current[i]} 
                    text={v}
                    key={i}
                    ord={i}
                />
            )}
            <TitleDiv>
                <mark>{title}</mark><br/>
                {category}
            </TitleDiv> 
            <TitlePicDiv color={color["main"]}>
                <div className="logoBox">
                    <div className="logo">
                        {logo}
                    </div>
                </div>
            </TitlePicDiv>
            <MainText>
                <div className="engContents" ref={styRefs.current[0]}>
                    <Marks>
                        <span className="text">{marks["0"]["title"]}<span className="num">{marks["0"]["num"]}</span></span>
                        <span className="marksIn">
                            {marks["0"]["text"]}
                        </span>
                    </Marks> 
                    {text["0"]["eng"]}
                </div>
                <div className="korContents">
                    {text["0"]["kor"]}
                </div>
            </MainText>
            <ImgBox marginTop={10} height={24}>
                <img className="img" alt="" src={image["0"]}/>
                <div className="remark">
                </div>
            </ImgBox>
            <BackgroundPicDiv color={"black"} ref={styRefs.current[1]}>
                <div className="box">
                    <img className="img" alt="" src={image["1"]}/>
                    <img className="img" alt="" src={image["2"]}/>
                    <img className="img" alt="" src={image["3"]}/>
                    <img className="img" alt="" src={image["4"]}/>
                    <img className="img" alt="" src={image["5"]}/>
                    <img className="img" alt="" src={image["6"]}/>
                </div>
            </BackgroundPicDiv>
        </ReactCursorPosition>
    </RightDiv>
)}

export default _Pigeon;

