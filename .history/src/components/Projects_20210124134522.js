import styled from 'styled-components';

const ProjectDiv = styled.div`
    margin-top: 5vh;
    font-size: 1.7em;
    letter-spacing: -.05em;
`;
const ALink = styled.a`
    all: unset;
    font-size: .5em;
    letter-spacing: 0em;
    font-weight: 500;
    margin-right: 2em;

    &:hover {
        background-image: linear-gradient(transparent, transparent),linear-gradient(transparent, transparent),linear-gradient(to right, ${props => props.color});
        background-repeat: no-repeat;
        background-position: 120%, 122%, 0 130%;
        background-size: 100% 1.5em;
        z-index: 2;
    }
`;


export default function Projects(){
    return(
        <ProjectDiv>
            <div>
                Keesuk Lee is graphic Designer and Developer based in S.Korea
            </div>
            <ALink
                color={'#F58529, #DD2A7B, #8134AF, #515BD4'}
                href='https://www.instagram.com/keesukeeeeee/'
            >
                instagram
            </ALink>
            <ALink 
                color={'#3360FF, #5C79FF, #9EC9FF, #CCDEFF, #F8FBFF'}
                href='https://www.facebook.com/keesuk94/'
            >
                facebook
            </ALink>
        </ProjectDiv>
    )
}