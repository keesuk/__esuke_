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
        left: 0;
        margin-top: 1.3rem; 
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
        order: ${({isLeft}) => isLeft  
            ? "1" 
            : "2"
        };
        font-family: ${theme.fontObjs["remark"]["eng"]["fontFamily"]};
        font-style: ${theme.fontObjs["remark"]["eng"]["fontStyle"]};
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