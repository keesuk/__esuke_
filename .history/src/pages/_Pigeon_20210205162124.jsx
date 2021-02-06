import styled from 'styled-components';

const TitleDiv = styled.div`
    margin-left: 2.5vw;
    margin-right: 2.5vw;
    font-size: 4em;
    font-weight: 600;
    letter-spacing: -.05em;
    color: hotpink;
`;
const TitlePicDiv = styled.div`
    background-color: #f8526e;
    width: 100%;
    height: 50vh;
`;
const _Pigeon = () => {
    return(<>
        <TitleDiv>
            Pigeon Brand Book:
            Editorial
        </TitleDiv> 
        <TitlePicDiv/>
    </>)
}

export default _Pigeon;