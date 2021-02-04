import styled from "styled-components";

import { projects_link, introDiv_introduce } from "../_data/_Functions.jsx";

const IntroduceDiv = styled.div`
    .text {
        font-size: 2.6em;
        letter-spacing: -.035em;
        line-height: 1.7em;
    }
    .link {
        margin-top: 3.2em;
    }
`;
const ALink = styled.a`
    font-size: 1em;
    font-weight: 500;
    letter-spacing: -.02em;
    margin-right: 2em;

    &:hover {
        background-image: 
            linear-gradient(transparent, transparent),
            linear-gradient(transparent, transparent),
            linear-gradient(to right, ${props => props.color});
        background-repeat: no-repeat;
        background-position: 120%, 122%, 0 130%;
        background-size: 100% 1.5em;
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