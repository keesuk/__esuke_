import { useRef, createRef } from "react";
import PageStyle from "../components/_PageStyle.jsx";

import { TitleDiv, TitlePicDiv, MainText, ImgBox, BackgroundPicDiv, Marks } from "../css/SContent.js";
import { RightDiv } from "../css/SMainLayout.js";
import { PigeonContents } from "../_data/_Data.jsx";


const _Pigeon = () => {
    const { pageStyle, marks, title, category, color, logo, text, image }  =  PigeonContents
    

    const styRefs = useRef([])
    
    styRefs.current = pageStyle.map(i => styRefs.current[i] = createRef())


    
    return(
    <RightDiv>
            {pageStyle.map((v, i) =>
                <PageStyle 
                    el={styRefs.current[i]}
                    text={v}
                    key={i}
                    ord={i}
            />)}
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
            <MainText ref={styRefs.current[0]}>
                <div className="engContents" >
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
            <BackgroundPicDiv color={"#000000"} ref={styRefs.current[1]}>
                <div className="box">
                    <img className="img" alt="" src={image["1"]}/>
                    <img className="img" alt="" src={image["2"]}/>
                    <img className="img" alt="" src={image["3"]}/>
                    <img className="img" alt="" src={image["4"]}/>
                    <img className="img" alt="" src={image["5"]}/>
                    <img className="img" alt="" src={image["6"]}/>
                </div>
            </BackgroundPicDiv>
    </RightDiv>
)}

export default _Pigeon;

