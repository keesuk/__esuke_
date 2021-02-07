import styled from "styled-components";
import PigeonLogo from "../_data/img/_PigeonLogo.jsx"

const TitleDiv = styled.div`
    margin-left: 5vw;
    margin-top: 3.5vw;
    font-size: 2.6rem;
    letter-spacing: -.06rem;
    line-height: 4.4rem;
    color: #ff677f;
`;
const TitlePicDiv = styled.div`
    background-color: #ff677f;
    margin-left: 2.5vw;
    margin-top: 2.5vw;
    width: calc(100%-2.5vw);
    padding: 10% 20%;

    .box {
    }
`;
const _Pigeon = () => {
    return(<>
        <TitleDiv>
            Pigeon Brand Book:<br/>
            Editorial
        </TitleDiv> 
        
        <TitlePicDiv>
            <div className="box">
                <PigeonLogo/>
            </div>
        </TitlePicDiv>
    </>)
}

export default _Pigeon;