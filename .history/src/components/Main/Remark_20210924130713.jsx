import styled from "styled-components";
import theme from "../../css/_Theme.jsx"

const RemarkDiv = styled.div`
    ${({theme}) => theme.deskTop`
        margin-bottom: ${({marginBottom}) => marginBottom}rem; 
        margin-right: ${({marginRight}) => marginRight}rem; 
        margin-left: ${({marginLeft}) => marginLeft}rem; 
        margin-top: ${({marginTop}) => marginTop}rem; 
    `}
    ${({theme}) => theme.mobile`
        margin-top: 1rem; 
        left: 0;
    `}
    flex-direction: ${({isLeft}) => isLeft 
        ? "row"
        : "row-reverse"
    };
    line-height: ${({lineHeight}) => lineHeight}rem;
    color: ${({color}) => color};
    white-space: nowrap;
    display: flex;
    
    .remarkEng {
        ${({theme}) => theme.deskTop`
            font-size: ${theme.fontObjs["remark"]["eng"]["fontSize"]};
            font-weight: ${theme.fontObjs["remark"]["eng"]["fontWeight"]};
            letter-spacing: -.02rem;
            word-spacing: -.02rem;

            &:after {
                content: " / ";
                font-weight: 400;
                margin-left: -.1rem; 
            }
        `}
        ${({theme}) => theme.mobile`
            font-size: 1rem;
            font-weight: 700;
            letter-spacing: -.03rem;
            word-spacing: -.02rem;
            color: #999;

        `}
        font-family: ${theme.fontObjs["remark"]["eng"]["fontFamily"]};
        font-style: ${theme.fontObjs["remark"]["eng"]["fontStyle"]};
        order: ${({isLeft}) => isLeft  
            ? "1" 
            : "2"
        };
    }
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