import styled from "styled-components";
import theme from "../../css/_Theme.jsx";
import Remark from "./Remark.jsx";

const value = 1.45

const commonMargin = ({margin}) => `
    margin-left: ${margin.marginLeft * value}vw;
    margin-bottom: ${margin.marginBottom * value}vw;
    margin-right: ${margin.marginRight * value}vw;
    margin-top: ${margin.marginTop * value}vw;
`

const OuterImgBoxDiv = styled.div`
    ${({theme}) => theme.mobile`
        ${commonMargin({margin})}
    `}
    height: ${({height}) => height}vw;
    margin-left: ${({marginLeft}) => marginLeft}vw;
    margin-right: ${({marginRight}) => marginRight}vw;
    margin-top: ${({marginTop}) => marginTop}vw;
    position: relative;
    .box {
        width: ${({width}) => width}%;
        float: ${({isLeft}) => isLeft 
            ? "left" 
            : "right"
        };
        .img {
            display: block;
            height: auto;
            width: 100%;
            border: ${({isOutline}) => isOutline 
                ? theme.lines["pageModulesOuterImgBoxLine"]
                : ""
            };
            filter: ${({isFilter}) => isFilter 
                ? "brightness(97%)"
                : ""
            };
        }
    }
`;
OuterImgBoxDiv.defaultProps = {
    margin: {
        marginLeft: 2.7,
        marginRight: 2.5
    }
}

const OuterImgBox = ({marginTop, marginBottom, marginLeft, marginRight, width, height, isLeft, isOutline, isFilter, image, remark}) => {
    return(
        <OuterImgBoxDiv 
            margin={{
                marginLeft: marginLeft,
                marginRight: marginRight,
                marginTop: marginTop,
                marginBottom: marginBottom,
            }}
            width={width}
            height={height}
            isLeft={isLeft}
            isOutline={isOutline}
            isFilter={isFilter}
        >
            <div className="box">
                <img className="img" alt="" src={image}/>
                {remark === null 
                    ? null
                    : <Remark remark={remark}/>
                }
            </div>
        </OuterImgBoxDiv>
    )
}

export default OuterImgBox;