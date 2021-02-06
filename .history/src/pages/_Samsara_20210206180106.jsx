import styled from 'styled-components';


const TitleDiv = styled.div`
    margin-left: 5vw;
    margin-right: 2.5vw;
    margin-bottom: 2.5vw;
    margin-top: 2.5vw;
    font-size: 2.6em;
    letter-spacing: -.038em;
    line-height: 1.8em;
    color: #52307c;
`;
const TitlePicDiv = styled.div`
    background-color: #52307c;
    margin-left: 2.5vw;
    width: 100%;
    height: 50vh;
`;
const _Samsara = () => {
    return(<>
        <TitleDiv>
            Samsara :<br/>
            Poster
        </TitleDiv> 
        <TitlePicDiv/>
    </>)
}

export default _Samsara;