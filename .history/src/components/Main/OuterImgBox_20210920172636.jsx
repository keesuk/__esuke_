import styled from "styled-components";
import theme from "../../css/_Theme.jsx";
import Remark from "./Remark.jsx";

import media from "../../css/_Media.jsx";

const OuterImgBoxDiv = styled.div`
    ${media.mobile`
        height: ${({height}) => height * }vw;
        margin-left: ${({marginLeft}) => marginLeft* 1.5}vw;
        margin-right: 2.5vw;
        margin-top: ${({marginTop}) => marginTop* 1.5}vw;
    `};
    ${media.deskTop`
        height: ${({height}) => height}vw;
        margin-left: ${({marginLeft}) => marginLeft}vw;
        margin-right: 2.5vw;
        margin-top: ${({marginTop}) => marginTop}vw;
    `};
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
    marginLeft: "2.5"
}

const OuterImgBox = ({marginTop, marginLeft, width, height, isLeft, isOutline, isFilter, image, remark}) => {
    return(
        <OuterImgBoxDiv 
            marginTop={marginTop}
            marginLeft={marginLeft}
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