import styled from "styled-components";

import { projects_link, introDiv_introduce } from "../_data/_Functions.jsx";

const IntroduceDiv = styled.div`
    margin-top: 2.5vw;
    margin-left: 2.5vw;

    .text {
        font-size: 2.6rem;
        letter-spacing: -.038rem;
        line-height: 4rem;
        
        mark {
            display: inline-block; 
            height: 1.2rem;
            line-height: 1.6rem;
            padding-top: -1rem;
            background-color: #ffff11;
        }
    }
    .link {
        margin-top: 3.2rem;
    }
`;
const ALink = styled.a`
    font-size: 1rem;
    font-weight: 500;
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

const Introduce = () => {
    return(
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
    )
}

export default Introduce;