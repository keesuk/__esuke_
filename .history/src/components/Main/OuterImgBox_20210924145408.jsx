import styled from "styled-components";
import Remark from "./Remark.jsx";
import { UseWindowSize, isMobile } from "../../_data/_Functions.jsx"


const OuterImgBoxDiv = styled.div`
    ${({height, marginLeft, marginRight, marginTop}) => `
        margin-right: ${marginRight}vw;
        margin-left: ${marginLeft}vw;
        margin-top: ${marginTop}vw;
        height: ${height}vw;
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