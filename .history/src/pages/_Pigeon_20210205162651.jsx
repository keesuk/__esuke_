import styled from 'styled-components';

const TitleDiv = styled.div`
    margin-left: 2.5vw;
    margin-right: 2.5vw;
    margin-bottom: 2.5vw;
    margin-top: 5vw;
    font-size: 4em;
    font-weight: 400;
    letter-spacing: -.05em;
    color: hotpink;
`;
const TitlePicDiv = styled.div`
    background-color: hotpink;
    width: 100%;
    height: 50vh;
`;
const _Pigeon = () => {
    return(<>
        <TitleDiv>
            <strong>Pigeon Brand Book:</strong> <br/>
            Editorial
        </TitleDiv> 
        <TitlePicDiv/>
    </>)
}

export default _Pigeon;