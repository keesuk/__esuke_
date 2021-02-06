import styled from 'styled-components';


const TitleDiv = styled.div`
    margin-left: 5vw;
    margin-right: 2.5vw;
    margin-bottom: 2.5vw;
    margin-top: 5vw;
    font-size: 2.6em;
    letter-spacing: -.038em;
    line-height: 1.8em;
`;
const TitlePicDiv = styled.div`
    background-color: #ff677f;
    width: 100%;
    height: 50vh;
`;
const _Pigeon = () => {
    return(<>
        <TitleDiv>
            Pigeon Brand Book:<br/>
            Editorial
        </TitleDiv> 
        <TitlePicDiv/>
    </>)
}

export default _Pigeon;