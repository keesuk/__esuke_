import styled from 'styled-components';

const ProjectDiv = styled.div`
    margin-top: 5vh;
    font-size: 1.7em;
    letter-spacing: -.05em;
`;
const Ainsta = styled.a`
    all: unset;
    font-size: .5em;
    letter-spacing: 0em;
    font-weight: 500;

    &:hover {
        background-image: linear-gradient(transparent, transparent),linear-gradient(transparent, transparent),linear-gradient(to right, #30e8bf, #ff8235);
        background-repeat: no-repeat;
        background-position: 120%, 122%, 0 130%;
        background-size: 100% 2em;
        z-index: 2;
    }
`;


export default function Projects(){
    return(
        <ProjectDiv>
            <div>
                Keesuk Lee is graphic Designer and Developer based in S.Korea
            </div>
            <Ainsta href='https://www.instagram.com/keesukeeeeee/'>
                instagram
            </Ainsta>
        </ProjectDiv>
    )
}