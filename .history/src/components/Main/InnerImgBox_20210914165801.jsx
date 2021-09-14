import styled from "styled-components";
import theme from "../../css/_Theme.jsx"
import Remark from "./Remark.jsx"
import { marking, numbering } from "../../_data/_Functions.jsx";  

import Iphone from "../../_data/img/_Source/Iphone.png";
import VerticalBrowserWhite from "../../_data/img/_Source/VerticalBrowserWhite.png";
import HorizontalBrowserDark from "../../_data/img/_Source/HorizontalBrowserDark.png";

const InnerImgBoxDiv = styled.div`
    margin-left: 2.5vw;
    background-color: ${props => props.default
        ? theme.colorObjs["InnerBackgroundColor"]
        : props.color
    };
    width: calc(100%-2.5vw);
    margin-top: ${({marginTop}) => marginTop}vw;
    margin-bottom: ${({marginBottom}) => marginBottom}vw;
    padding-top: ${({paddingTop}) => paddingTop}vw;
    padding-left: ${({paddingLeft}) => paddingLeft}vw;
    padding-right: ${({paddingRight}) => paddingRight}vw;
    padding-bottom: ${({paddingBottom}) => paddingBottom}vw;

`;
const ImgDiv = styled.div`
    height: ${({height}) => height}vw;
    margin-top: ${({marginTop}) => marginTop}vw;
    margin-left: ${({marginLeft}) => marginLeft}vw;
    position: relative;
    .box {
        width: ${({width}) => width}%;
        float: ${({LorR}) => LorR === "L" ? "left" : "right"};
        .img {
            display: block;
            height: auto;
            width: 100%;
        }
    }
`;
const InnerIphoneMockupBox = styled.div`
    height: ${({width}) => width}vw;
    width: ${({width}) => width}%;
    margin-top: ${({marginTop}) => marginTop}vw;
    margin-left: ${({marginLeft}) => marginLeft}vw;
    margin-right: ${({marginRight}) => marginRight}vw;
    float: ${({LorR}) => LorR === "L" ? "left" : "right"};
    position: relative;

    .box {
        width: 115%;
        height: 100%;
        background-image: url("${Iphone}");
        background-position: center; 
        background-repeat: no-repeat;
        background-size: cover;
        .img {
            display: block;
            height: auto;
            width: 62%;
            float: right;
            margin-top: 21%;
            margin-right: 7%;
            border: .02rem solid #ccc;
        }
    }
`;
const InnerVerticalBrowserMockupBox  = styled.div`
    height: ${({width}) => width}vw;
    width: ${({width}) => width}%;
    margin-top: ${({marginTop}) => marginTop}vw;
    margin-left: ${({marginLeft}) => marginLeft}vw;
    margin-right: ${({marginRight}) => marginRight}vw;
    float: ${({LorR}) => LorR === "L" ? "left" : "right"};
    position: relative;

    .box {
        width: 110%;
        height: 102%;
        background-image: url("${VerticalBrowserWhite}");
        background-position: center; 
        background-repeat: no-repeat;
        background-size: cover;
        .img {
            display: block;
            height: auto;
            width: 86.2%;
            float: right;
            margin-top: 9.1%;
            margin-right: 4.2%;
        }  
    }
`;
const InnerHorizontalBrowserMockupBox = styled.div`
    width: ${({width}) => width}%;
    height: ${({width}) => width/3}vw;
    margin-top: ${({marginTop}) => marginTop}vw;
    margin-left: ${({marginLeft}) => marginLeft}vw;
    margin-right: ${({marginRight}) => marginRight}vw;
    float: ${({LorR}) => LorR === "L" ? "left" : "right"};
    position: relative;

    .box {
        width: 100%;
        height: 110%;
        background-image: url("${HorizontalBrowserDark}");
        background-position: center; 
        background-repeat: no-repeat;
        background-size: cover;
        .img {
            display: block;
            height: auto;
            width: 91.6%;
            float: right;
            margin-top: 5.7%;
            margin-right: 2.9%;
        }  
    }
`;

const TextDiv = styled.div`
    user-select: text;
    display: flex;
    gap: 2.5vw;
    flex-direction: ${({HorV}) => HorV === "H" ? "row" : "column"};
    justify-content: ${({LorR}) => LorR === "L" ? "flex-start" : "flex-end"};
    margin-left: ${({marginLeft}) => marginLeft}%;
    margin-right: ${({marginRight}) => marginRight}%;
    margin-top: ${({marginTop}) => marginTop}%;
    margin-bottom: ${({marginBottom}) => marginBottom}%;
    color: ${({color}) => color};
    line-height: 1.8rem;
    vertical-align: top;
    
    .titleContents {
        display: flex;
        flex-direction: row;
        width: ${({width}) => width}%;
        align-self: ${({LorR, HorV}) => 
            LorR === "L" ? "flex-start" : (
            HorV === "V" ? "flex-end" : "flex-start"
        )};

        .eng {
            order: 1;
            font-size: ${theme.fontObjs["subText"]["title"]["eng"]["fontSize"]};
            font-family: ${theme.fontObjs["subText"]["title"]["eng"]["fontFamily"]};
            font-weight: ${theme.fontObjs["subText"]["title"]["eng"]["fontWeight"]};
            letter-spacing: -.05rem;
            &:after {
                content: " / ";
                margin-left: -.6rem; 
        }}
        .kor {
            order: 2;
            font-size: ${theme.fontObjs["subText"]["title"]["kor"]["fontSize"]};
            font-weight: ${theme.fontObjs["subText"]["title"]["kor"]["fontWeight"]};
            font-family: ${theme.fontObjs["subText"]["title"]["kor"]["fontFamily"]};
            letter-spacing: -.1rem;
            margin-left: .2rem; 
            margin-top: .15rem;
        }  
    }
    .engContents {
        font-size: ${theme.fontObjs["subText"]["eng"]["fontSize"]};
        font-family: ${theme.fontObjs["subText"]["eng"]["fontFamily"]};
        font-weight: ${theme.fontObjs["subText"]["eng"]["fontWeight"]};
        font-style: ${theme.fontObjs["subText"]["eng"]["fontStyle"]};
        align-self: ${({LorR, HorV}) => 
            LorR === "L" ? "flex-start" : (
            HorV === "V" ? "flex-end" : "flex-start"
        )};
        text-align: justify;
        word-spacing: -0.08rem;
        letter-spacing: -.0265rem;
        width: ${({textWidth}) => textWidth}%;
    }
    .korContents {
        font-size: ${theme.fontObjs["subText"]["kor"]["fontSize"]};
        font-family: ${theme.fontObjs["subText"]["kor"]["fontFamily"]};
        font-weight: ${theme.fontObjs["subText"]["kor"]["fontWeight"]};
        align-self: ${({LorR, HorV}) => 
            LorR === "L" ? "flex-start" : (
            HorV === "V" ? "flex-end" : "flex-start"
        )};
        letter-spacing: -.015rem;
        word-spacing: .16rem;
        width: ${({width}) => width}%;
        text-align: justify;

        .korNum {
            font-size: ${theme.fontObjs["subText"]["kor"]["num"]["fontSize"]};
            font-family: ${theme.fontObjs["subText"]["kor"]["num"]["fontFamily"]};
            font-weight: ${theme.fontObjs["subText"]["kor"]["num"]["fontWeight"]};
        }
    }
    .titleContents, .korContents, .engContents {
        &::selection {
            color: black;
            background-color: ${theme.colorObjs["mark"]};
        }
    }
`;
const Text = ({marginTop, marginBottom, marginLeft, marginRight, width, LorR, HorV, color, text}) => {
    return(
        <TextDiv
                marginTop={marginTop}  
                marginBottom={marginBottom}  
                marginLeft={marginLeft}  
                marginRight={marginRight}
                width={width}
                LorR={LorR}
                HorV={HorV}
                color={color}
        >
            <div className="engContents">
                {text["eng"]}
            </div>
            <div 
                className="korContents"
                dangerouslySetInnerHTML={{
                    __html : 
                        numbering(text["kor"],
                        `<span class="korNum">`,
                        `</span>`
                )}}
            />
        </TextDiv>
    )
}
const Img = ({marginTop, marginLeft, width, height, LorR, outlineYorN, filterYorN, image, remark}) => {
    return(
        <ImgDiv 
            width={width}
            height={height}
            LorR={LorR}
            marginTop={marginTop}
        >
            <div className="box">
                <img className="img" alt="" src={image}/>
                {remark === null 
                    ? null
                    : <Remark remark={remark}/>
                }
            </div>
        </ImgDiv>
    )
}

const InnerImgBox = ({paddingTop, paddingRight, paddingLeft, paddingBottom, marginTop, marginBottom, color, contents}) => {
    return(
        <InnerImgBoxDiv 
            paddingTop={paddingTop}
            paddingBottom={paddingBottom}
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
            marginTop={marginTop}
            marginBottom={marginBottom}
            color={color}
        >
            {contents.map((v, i) => {
                let Component

                if(v.type === "Img"){Component = Img}
                else if(v.type === "Text"){Component = Text}

                return(
                    <Component
                        width={v.width}
                        height={v.height}
                        LorR={v.LorR}
                        marginTop={v.marginTop}
                        marginBottom={v.marginBottom}
                        marginLeft={v.marginLeft}
                        marginRight={v.marginRight}
                        HorV={v.HorV}
                        color={v.color}
                        key={i}
                    />
                )
            })}
        </InnerImgBoxDiv>
    )
}

export default InnerImgBox;