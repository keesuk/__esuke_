import styled from "styled-components";
import theme from "../../css/_Theme.jsx";
import Remark from "./Remark.jsx";

import { media, commonMargin } from "../../css/_Media.jsx";

const OuterImgBoxDiv = styled.div`
    ${({margin}) => media.mobile[commonMargin(margin, 1.45)]}
    height: ${({height}) => height}vw;
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
        marginLeft: "2.7",
        marginRight: "2.5"
    }
}

const OuterImgBox = ({marginTop, marginBottom, marginLeft, marginRight, width, height, isLeft, isOutline, isFilter, image, remark}) => {
    return(
        <OuterImgBoxDiv 
            margin={{
                marginTop: marginTop,
                marginLeft: marginLeft,
                marginRight: marginRight,
                marginBottom: marginBottom
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