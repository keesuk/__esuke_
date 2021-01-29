import styled from "styled-components";
import { line_2, projects_introDiv, all_portFolio, introDiv_introduce } from "./_Functions.jsx";


const IntroDiv = styled.div`
    margin-top: 5vh;

    .introduce {
        font-size: 2em;
        letter-spacing: -.03em;
        line-height: 1.6em;
    }
    .link {
        margin-top: 2em;
    }
`;
const ALink = styled.a`
    font-size: .7em;
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
    padding-top: 5vh;
    margin-top: 10vh;
    display: grid;

    @media all and (min-width:0px) and (max-width:1023px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1em;
        grid-auto-rows: minmax(5em, auto);
    }

    @media all and (min-width:1024px) and (max-width:1500px){
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1em;
        grid-auto-rows: minmax(5em, auto);
    }

    @media all and (min-width:1501px){
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1em;
        grid-auto-rows: minmax(5em, auto);
    }

    .img {
        width: 100%;
    }
    .content_text {
        font-size: 1em;
        letter-spacing: -.06em;
        font-weight: 400;

        strong {
            font-weight: 600;
            letter-spacing: -.03em;
        }
    }
    button {
        position: relative;
        width: 100%;
    }

`;

const ImgButton = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    &:after { 
        content: "";
        position: absolute;
        border-top: 0.25em solid ${props => props.color};
        height: 95%;
        width: 100%;
        transform: translateY(50%);
        visibility: hidden;
    }
    &:hover:after { 
        visibility: visible;
    }
`;

export default function Projects(){
    return(
        <>
            <IntroDiv>
                <div className="introduce">
                    {introDiv_introduce}
                </div>
                <div className="link">
                    {projects_introDiv.map(v =>
                        <ALink color={v.color} href={v.link} key={v.title}>
                            {v.title}
                        </ALink>
                    )}
                </div>
            </IntroDiv>
            <ProjectDiv>
                {all_portFolio.map(v => 
                    <button key={v.title}>
                        <ImgButton color={v.color}/>
                        <img className="img" alt={""} src={v.img}/>
                        <div className="content_text">
                            <strong>{v.title}</strong> {v.category}
                        </div>
                    </button>
                )}
            </ProjectDiv>
        </>
    )
}