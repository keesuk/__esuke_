import styled from 'styled-components';

const ProjectDiv = styled.div`
    margin-top: 5vh;
    font-size: 1.7em;
    letter-spacing: -.05em;
`;
const Ainsta = styled.a`
    all: unset;
    font-size: .5em;
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