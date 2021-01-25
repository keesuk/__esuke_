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

    &:hover {
        text-decoration-line: line-through;
        text-decoration-thickness: .05em;
        text-decoration-color: linear-gradient(left, transparent 0%,#444 50%,transparent 100%);
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