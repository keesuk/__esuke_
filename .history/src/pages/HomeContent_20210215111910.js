import styled from "styled-components";

import FolioList from "../components/FolioList.js";
import { RightDiv } from "../css/SMainLayout.js";
import { projects_link, introDiv_introduce } from "../_data/_Data.jsx";


const IntroduceDiv = styled.div`
    margin-top: 5%;
    margin-left: 7%;
    margin-right: 18%;

    .text {
        font-size: 2.6rem;
        letter-spacing: -.06rem;
        line-height: 4.4rem;
        
        mark {
            display: inline-block; 
            height: 1.4rem;
            line-height: 1.6rem;
            padding-top: -1rem;
            background-color: ${colors["yellow"]};
    }}
    .link { margin-top: 2rem; }
`;
const ALink = styled.a`
    font-size: .9rem;
    font-weight: 600;
    letter-spacing: -.025rem;
    margin-right: 2rem;

    &:hover {
        background-image: 
            linear-gradient(transparent, transparent),
            linear-gradient(transparent, transparent),
            linear-gradient(to right, ${props => props.color});
        background-repeat: no-repeat;
        background-position: 120%, 122%, 0 130%;
        background-size: 100% 1.5rem;
        color: white;
        z-index: 2;
    }
`;

const HomeContent = () => {
    return(
        <RightDiv>
            <IntroduceDiv>
                <div className="text">
                    {introDiv_introduce}
                </div>
                <div className="link">
                    {projects_link.map(v =>
                        <ALink 
                            color={v["color"]} 
                            href={v["link"]} 
                            key={v["title"]}
                        >
                            {v["title"]}
                        </ALink>
                    )}
                </div>  
            </IntroduceDiv>
            <FolioList/>
        </RightDiv>
    )
}

export default HomeContent;