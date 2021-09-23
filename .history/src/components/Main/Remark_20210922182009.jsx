import styled from "styled-components";
import theme from "../../css/_Theme.jsx"

const RemarkDiv = styled.div`
    ${({theme}) => theme.deskTop`
        margin-top: ${({marginTop}) => marginTop}rem; 
        margin-bottom: ${({marginBottom}) => marginBottom}rem; 
        margin-left: ${({marginLeft}) => marginLeft}rem; 
        margin-right: ${({marginRight}) => marginRight}rem; 
    `}
    ${({theme}) => theme.mobile`
        position: absolute;
        margin-top: 2rem; 
        margin-left: 2.7vw; 
        margin-right: 2.7vw; 
    `}
    color: ${({color}) => color};
    line-height: ${({lineHeight}) => lineHeight}rem;
    flex-direction: ${({isLeft}) => isLeft 
        ? "row"
        : "row-reverse"
    };
    display: flex;
    white-space: nowrap;
    
    .remarkEng {
        ${({theme}) => theme.deskTop`
            font-size: ${theme.fontObjs["remark"]["eng"]["fontSize"]};
        `}
        ${({theme}) => theme.mobile`
            font-size: 1rem;
        `}
        order: ${({isLeft}) => isLeft  
            ? "1" 
            : "2"
        };
        font-family: ${theme.fontObjs["remark"]["eng"]["fontFamily"]};
        font-weight: ${theme.fontObjs["remark"]["eng"]["fontWeight"]};
        font-style: ${theme.fontObjs["remark"]["eng"]["fontStyle"]};
        letter-spacing: -.02rem;
        word-spacing: -.02rem;
        &:after {
            content: " / ";
            font-weight: 400;
            margin-left: -.1rem; 
    }}
    .remarkKor {
        ${({theme}) => theme.mobile`display: none;`}
        order: ${({isLeft}) => isLeft  
            ? "2" 
            : "1"
        };
        font-size: ${theme.fontObjs["remark"]["kor"]["fontSize"]};
        font-family: ${theme.fontObjs["remark"]["kor"]["fontFamily"]};
        letter-spacing: -.02rem;
        word-spacing: .1rem;
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
            isLeft={remark.isLeft}
            lineHeight={remark.lineHeight}
            color={remark.color}
        >
            <span className="remarkEng">{remark.text["txtEng"]}</span>
            <span className="remarkKor">{remark.text["txtKor"]}</span>
        </RemarkDiv>
    )
}

export default Remark;