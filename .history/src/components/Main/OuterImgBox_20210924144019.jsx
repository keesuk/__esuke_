import styled from "styled-components";
import media from "../../css/_Media.jsx";
import Remark from "./Remark.jsx";

const value = theme.layoutRatio["ratio"]
const marginLayout = theme.layoutRatio["leftMargin"]

const OuterImgBoxDiv = styled.div`
    ${media.mobile`
        height: ${({height}) => height * value}vw;
        margin-left: ${({marginLeft}) => marginLeft * value}vw;
        margin-right: ${({marginRight}) => marginRight * value}vw;
        margin-top: ${({marginTop}) => marginTop * value}vw;
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
            border: ${({theme, isOutline}) => isOutline 
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
                {remark === null 
                    ? null
                    : <Remark remark={remark}/>
                }
            </div>
        </OuterImgBoxDiv>
    )
}

export default OuterImgBox