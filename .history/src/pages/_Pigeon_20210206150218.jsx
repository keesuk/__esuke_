import styled from 'styled-components';

import { pages_Margin } from "../_data/_Functions.jsx";

const TitleDiv = styled.div`
    margin-left: 5vw;
    padding-left: 3em;
    margin-right: 2.5vw;
    margin-bottom: 2.5vw;
    margin-top: 5vw;
    font-size: 3em;
    font-weight: 400;
    letter-spacing: -.05em;

    ${pages_Margin}
`;
const TitlePicDiv = styled.div`
    background-color: #ff677f;
    width: 100%;
    height: 50vh;
`;
const _Pigeon = () => {
    return(<>
        <TitleDiv>
            <strong>Pigeon Brand Book:</strong><br/>
            Editorial
        </TitleDiv> 
        <TitlePicDiv/>
    </>)
}

export default _Pigeon;