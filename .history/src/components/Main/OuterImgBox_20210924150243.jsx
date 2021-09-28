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
    marginLeft: "0",
    marginRight: "2.5"
}

const OuterImgBox = ({marginTop, marginBottom, marginLeft, marginRight, width, height, isLeft, isOutline, isFilter, image, remark}) => {
    
    return(
        <OuterImgBoxDiv 
            marginBottom={isMobile(UseWindowSize(), marginBottom)}
            marginRight={isMobile(UseWindowSize(), marginRight)}
            marginLeft={isMobile(UseWindowSize(), marginLeft)}
            marginTop={isMobile(UseWindowSize(), marginTop)}
            height={isMobile(UseWindowSize(), height)}
            width={isMobile(UseWindowSize(), width)}
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