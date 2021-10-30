import styled from "styled-components"

const Container = styled.div`
    ${({theme}) => theme.mobile` 
        letter-spacing: -.065rem;
        word-spacing: -.18rem;
        line-height: 1.85rem;
        font-size: 1.2rem;
        margin-left: 2%;
        width: 97%;
    `}
    ${({theme}) => theme.deskTop` 
        letter-spacing: -.03rem;
        word-spacing: -.02rem;
        line-height: 1.3rem;
        font-size: 1rem;
    `}
    color: ${({theme, isText}) =>  isText 
        ? "#000"
        : theme.colorObjs["cellEmptyTextColor"]
    };
    transition: all .2s;
    margin-top: 1.3rem;
    font-style: italic;
    font-weight: 700;
    cursor: pointer;

    .title {
        margin-right: 1rem;
    }
    .sub {
        ${({theme}) => theme.mobile` 
            letter-spacing: -.07rem;
            word-spacing: -.08rem;
            font-size: 1.1rem; 
        `}
        ${({theme}) => theme.deskTop` 
            letter-spacing: -.045rem;
            word-spacing: -.1rem;
            font-size: .85rem;
        `}
        font-weight: 400;
    }
`

const BottomTitle = ({title, sub, textHover, isText}) => {
    return (
        <Container
            onClick={textHover}
            isText={isText}
        >
            <span className="title">{title}</span>
            <span className="sub">{sub["eng"]}</span>
        </Container>
    )
}

export default BottomTitle