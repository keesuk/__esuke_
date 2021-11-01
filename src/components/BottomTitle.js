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
        word-spacing: -.1rem;
        line-height: 1.7rem;
        margin-left: 2rem;
        font-size: 1rem;
    `}
    border: .15rem dashed ${({theme, isText}) => isText
        ? "#999"
        : "#77D1E4"
    };
    color: ${({theme, isText}) =>  isText 
        ? "#000"
        : theme.colorObjs["cellEmptyTextColor"]
    };
    background-color: ${({theme, isText}) => isText
        ? "#eee"
        : theme.colorObjs["pageBackColor"]
    };
    padding: 1.2rem 2rem 1.4rem 2rem;
    transition: all .2s;
    margin-top: -.4rem;
    font-weight: 700;
    cursor: pointer;

    .title {
        margin-right: .8rem;
    }
    .sub {
        ${({theme}) => theme.mobile` 
            letter-spacing: -.07rem;
            word-spacing: -.08rem;
            font-size: 1.1rem; 
        `}
        ${({theme}) => theme.deskTop` 
            letter-spacing: -.06rem;
            word-spacing: -.1rem;
            font-size: 1rem;
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