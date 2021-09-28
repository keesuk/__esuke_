import styled from "styled-components";
import Remark from "./Remark.jsx";


const OuterImgBoxDiv = styled.div`
    ${({theme, height, marginLeft, marginRight, marginTop}) => theme.mobile`
        margin-right: ${marginRight * theme.layoutRatio["ratio"]}vw;
        margin-left: ${marginLeft * theme.layoutRatio["ratio"]}vw;
        margin-top: ${marginTop * theme.layoutRatio["ratio"]}vw;
        height: ${height * theme.layoutRatio["ratio"]}vw;
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