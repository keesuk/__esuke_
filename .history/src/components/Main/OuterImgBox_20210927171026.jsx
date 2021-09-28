import styled from "styled-components";

import { UseWindowSize, isMobile } from "../../_data/_Functions.jsx"
import Remark from "./Remark.jsx";


const OuterImgBoxDiv = styled.div`
    ${({theme, height, marginLeft, marginTop, marginRight}) => theme.deskTop`
        margin-right: ${marginRight.deskTop}vw;
        margin-left: ${marginLeft.deskTop}vw;
        margin-top: ${marginTop.deskTop}vw;
        height: ${height.deskTop}vw;
    `}
    ${({theme, height, marginLeft, marginTop, marginRight}) => theme.mobile`
        margin-right: ${marginRight.mobile}vw;
        margin-left: ${marginLeft.mobile}vw;
        margin-top: ${marginTop.mobile}vw;
        height: ${height.mobile}vw;
    `}
    position: relative;

    .box {
        ${({theme, width}) => theme.deskTop`
            width: ${({width}) => width.deskTop}%;
        `}
        ${({theme, width}) => theme.mobile`
            width: ${({width}) => width.mobile}%;
        `}
        float: ${({isLeft}) => isLeft 
            ? "left" 
            : "right"
        };

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
`
OuterImgBoxDiv.defaultProps = {
    marginLeft: "2.5",
    marginRight: "2.5"
}

const OuterImgBox = ({ marginBottom, marginRight, marginLeft, marginTop, isOutline, isFilter, height, width, isLeft, image,remark }) => {
    
    return(
        <OuterImgBoxDiv 
            marginBottom={marginBottom}
            marginRight={marginRight}
            marginLeft={marginLeft}
            marginTop={marginTop}
            height={height}
            width={width}
            isOutline={isOutline}
            isFilter={isFilter}
            isLeft={isLeft}
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