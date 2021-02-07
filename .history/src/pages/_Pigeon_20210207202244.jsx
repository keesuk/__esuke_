import styled from "styled-components";
import PigeonLogo from "../_data/img/_PigeonLogo.jsx"

const TitleDiv = styled.div`
    margin-left: 5vw;
    margin-top: 3.5vw;
    font-size: 2.6rem;
    letter-spacing: -.06rem;
    line-height: 4.4rem;
    color: #ff677f;

    mark {
        display: inline-block; 
        height: 1.4rem;
        line-height: 1.6rem;
        padding-top: -1rem;
        background-color: hotpink;
    }
`;
const TitlePicDiv = styled.div`
    background-color: #ff677f;
    margin-left: 2.5vw;
    margin-top: 2.5vw;
    width: calc(100%-2.5vw);
    padding: 16% 13%;

    .box {
        width: 50vw;
    }
`;
const _Pigeon = () => {
    return(<>
        <TitleDiv>
            <mark>Pigeon Brand Book:</mark><br/>
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