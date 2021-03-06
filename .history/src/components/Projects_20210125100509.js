import styled from 'styled-components';
import { line_2, instaLink, instaColor, facebookLink, facebookColor } from './_Functions.jsx';

const IntroDiv = styled.div`
    margin-top: 5vh;
    font-size: 2em;
    letter-spacing: -.02em;
    line-height: 1.6em;
`;
const ALink = styled.a`
    font-size: .4em;
    letter-spacing: 0em;
    font-weight: 500;
    margin-right: 2em;

    &:hover {
        background-image: linear-gradient(transparent, transparent),linear-gradient(transparent, transparent),linear-gradient(to right, ${props => props.color});
        background-repeat: no-repeat;
        background-position: 120%, 122%, 0 130%;
        background-size: 100% 1.5em;
        color: white;
        z-index: 2;
    }
`;
const ProjectDiv = styled.div`
    border-top: ${line_2};
    
    margin-top: 10vh;
    height: 35vh;
`;
const Project_Inner = styled.div`
    height: 35vh;
    margin-top: 10vh;
    background-color: black;
`;

export default function Projects(){
    return(
        <div>
            <IntroDiv>
                <div>
                    Keesuk Lee is a graphic Designer and Developer living in Seoul, S.Korea.
                </div>
                <ALink
                    color={instaColor}
                    href={instaLink}
                >
                    Instagram
                </ALink>
                <ALink 
                    color={facebookColor}
                    href={facebookLink}
                >
                    Facebook
                </ALink>
            </IntroDiv>
            <ProjectDiv>
                <Project_Inner>

                </Project_Inner>
                <Project_Inner>

                </Project_Inner>
            </ProjectDiv>
        </div>
    )
}