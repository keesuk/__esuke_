import styled from 'styled-components';

const TitleDiv = styled.div`
    margin-left: 2.5vw;
    margin-right: 2.5vw;
    font-size: 4.5em;
    letter-spacing: -.01em;
    color: #f8526e;
`;
const TitlePicDiv = styled.div`
    background-color: #f8526e;
    width: 100%;
    height: 50vh;
`;
const _Pigeon = () => {
    return(<>
        <TitleDiv>
            PIGEON BRAND BOOK:
            Editorial
        </TitleDiv> 
        <TitlePicDiv/>
    </>)
}

export default _Pigeon;