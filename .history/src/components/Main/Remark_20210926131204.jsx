import styled from "styled-components";

const RemarkDiv = styled.div`

        margin-bottom: ${({marginBottom}) => marginBottom}rem; 
        margin-right: ${({marginRight}) => marginRight}rem; 
        margin-left: ${({marginLeft}) => marginLeft}rem; 
        margin-top: ${({marginTop}) => marginTop}rem; 
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
            font-weight: ${theme.fontObjs["remark"]["eng"]["fontWeight"]};
            font-size: ${theme.fontObjs["remark"]["eng"]["fontSize"]};
            letter-spacing: -.02rem;
            word-spacing: -.02rem;

            &:after {
                margin-left: -.1rem; 
                font-weight: 400;
                content: " / ";
            }
        `}
        ${({theme}) => theme.mobile`
            letter-spacing: -.03rem;
            word-spacing: -.02rem;
            font-weight: 700;
            font-size: 1rem;
            color: #999;

        `}
        font-family: ${({theme}) => theme.fontObjs["remark"]["eng"]["fontFamily"]};
        font-style: ${({theme}) => theme.fontObjs["remark"]["eng"]["fontStyle"]};
        order: ${({isLeft}) => isLeft  
            ? "1" 
            : "2"
        };
    }
    .remarkKor {
        ${({theme}) => theme.mobile`
            display: none;
        `}
        order: ${({isLeft}) => isLeft  
            ? "2" 
            : "1"
        };
        font-family: ${({theme}) => theme.fontObjs["remark"]["kor"]["fontFamily"]};
        font-size: ${({theme}) => theme.fontObjs["remark"]["kor"]["fontSize"]};
        letter-spacing: -.02rem;
        word-spacing: .1rem;
        margin-left: .2rem; 
    }    
`;

const Remark = ({remark}) => {
    return(
        <RemarkDiv
            marginBottom={remark.marginBottom}
            marginRight={remark.marginRight}
            marginLeft={remark.marginLeft}
            lineHeight={remark.lineHeight}
            marginTop={remark.marginTop}
            isLeft={remark.isLeft}
            color={remark.color}
        >
            <span className="remarkEng">{remark.text["txtEng"]}</span>
            <span className="remarkKor">{remark.text["txtKor"]}</span>
        </RemarkDiv>
    )
}

export default Remark;