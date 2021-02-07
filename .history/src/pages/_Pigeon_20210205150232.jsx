import styled from 'styled-components';
import { pages_Margin } from ".../_data/_Functions.jsx";

const TitleDiv = styled.div`
    color: #f8526e;
    ${pages_Margin}
`;
const TitlePicDiv = styled.div`
    background-color: #f8526e;
    width: 100%;
    height: 20vh;
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