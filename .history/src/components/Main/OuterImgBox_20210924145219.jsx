import styled from "styled-components";
import Remark from "./Remark.jsx";
import { UseWindowSize, isMobile } from "../../_data/_Functions.jsx"


const OuterImgBoxDiv = styled.div`
    ${({theme, height, marginLeft, marginRight, marginTop}) => theme.deskTop`
        margin-right: ${marginRight}vw;
        margin-left: ${marginLeft}vw;
        margin-top: ${marginTop}vw;
        height: ${height}vw;
    `}
    ${({theme, height, marginLeft, marginRight, marginTop}) => theme.mobile`
        margin-right: ${marginRight * theme.layoutRatio["ratio"]}vw;
        margin-left: ${marginLeft * theme.layoutRatio["ratio"]}vw;
        margin-top: ${marginTop * theme.layoutRatio["ratio"]}vw;
        height: ${height * theme.layoutRatio["ratio"]}vw;
    `}
    position: relative;

    .box {
        float: ${({isLeft}) => isLeft 
            ? "left" 
            : "right"
        };
        width: ${({width}) => width}%;

        .img {
            border: ${({theme, isOutline}) => isOutline 
                ? theme.lines["pageModulesOuterImgBoxLine"]
                : ""
            };
            filter: ${({isFilter}) => isFilter 
                ? "brightness(97%)"
                : ""
            };
            display: block;
            height: auto;
            width: 100%;
        }
    }
`;
OuterImgBoxDiv.defaultProps = {
    marginLeft: "2.7",
    marginRight: "2.5"
}

const OuterImgBox = ({marginTop, marginBottom, marginLeft, marginRight, width, height, isLeft, isOutline, isFilter, image, remark}) => {
    
    return(
        <OuterImgBoxDiv 
            marginBottom={marginBottom}
            marginRight={marginRight}
            marginLeft={marginLeft}
            marginTop={marginTop}
            isOutline={isOutline}
            isFilter={isFilter}
            isLeft={isLeft}
            height={height}
            width={width}
        >
            <div className="box">
                <img 
                    src={image}
                    className="img" 
                    alt="" 
                />
                {remark
                    ? <Remark remark={remark}/>
                    : null
                }
            </div>
        </OuterImgBoxDiv>
    )
}

export default OuterImgBox