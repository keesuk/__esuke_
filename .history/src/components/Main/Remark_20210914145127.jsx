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

const Remark = ({remark}) => {
    return(
        <RemarkDiv
            marginTop={remark.marginTop}
            marginBottom={remark.marginBottom}
            marginLeft={remark.marginLeft}
            marginRight={remark.marginRight}
            LorR={remark.LorR}
            lineHeight={remark.lineHeight}
            color={remark.color}
        >
            <span className="remarkEng">{remark.text["Eng"]}</span>
            <span className="remarkKor">{remark.text["Kor"]}</span>
        </RemarkDiv>
    )
}

export default Remark;