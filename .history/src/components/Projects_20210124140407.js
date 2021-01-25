import styled from 'styled-components';

const ProjectDiv = styled.div`
    margin-top: 5vh;
    font-size: 2em;
    letter-spacing: -.02em;
    line-height: 1.6em;
`;
const ALink = styled.a`
    font-size: .3em;
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


export default function Projects(){
    return(
        <ProjectDiv>
            <div>
                Keesuk Lee is a graphic Designer and Developer lived in Seoul, S.Korea.
            </div>
            <ALink
                color={'#F58529, #DD2A7B, #8134AF, #515BD4'}
                href='https://www.instagram.com/keesukeeeeee/'
            >
                Instagram
            </ALink>
            <ALink 
                color={'#3360FF, #5C79FF, #9EC9FF, #CCDEFF'}
                href='https://www.facebook.com/keesuk94/'
            >
                Facebook
            </ALink>
            <div>

            </div>
        </ProjectDiv>
    )
}