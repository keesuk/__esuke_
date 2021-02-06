import styled from 'styled-components';

const TitleDiv = styled.div`
    margin-left: 2.5vw;
    margin-right: 2.5vw;
    width: 40em;
    font-size: 4.5em;
    font-weight: 600;
    letter-spacing: -.05em;
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