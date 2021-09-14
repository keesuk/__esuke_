import styled from "styled-components";
import theme from "../../css/_Theme.jsx"

const RemarkDiv = styled.div`
    display: flex;
    line-height: ${({lineHeight}) => lineHeight}rem;
    flex-direction: ${({LorR}) => LorR === "L" 
        ? "row"
        : "row-reverse"
    };
    margin-top: ${({marginTop}) => marginTop}rem; 
    margin-bottom: ${({marginBottom}) => marginBottom}rem; 
    margin-left: ${({marginLeft}) => marginLeft}rem; 
    margin-right: ${({marginRight}) => marginRight}rem; 
    color: ${({color}) => color};
    .remarkEng {
        order: ${({LorR}) => LorR === "L" ? "1" : "2"};
        font-size: ${fontObjs["remark"]["eng"]["fontSize"]};
        font-family: ${fontObjs["remark"]["eng"]["fontFamily"]};
        font-weight: ${fontObjs["remark"]["eng"]["fontWeight"]};
        font-style: ${fontObjs["remark"]["eng"]["fontStyle"]};
        letter-spacing: -.002rem;
        &:after {
            content: " / ";
            margin-left: -.1rem; 
    }}
    .remarkKor {
        order: ${({LorR}) => LorR === "L" ? "2" : "1"};
        font-size: ${fontObjs["remark"]["kor"]["fontSize"]};
        font-family: ${fontObjs["remark"]["kor"]["fontFamily"]};
        letter-spacing: -.002rem;
        margin-left: .2rem; 
    }    
`;

const Remark = ({marginTop, marginBottom, marginLeft, marginRight, LorR, lineHeight, color, textEng, textKor}) => {
    return(
        <RemarkDiv
            marginTop={marginTop}
            marginBottom={marginBottom}
            marginLeft={marginLeft}
            marginRight={marginRight}
            LorR={LorR}
            lineHeight={lineHeight}
            color={color}
        >
            <span className="remarkEng">{textEng}</span>
            <span className="remarkKor">{textKor}</span>
        </RemarkDiv>
    )
}

export default Remark;