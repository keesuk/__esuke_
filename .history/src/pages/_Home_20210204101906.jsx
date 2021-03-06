import styled from "styled-components";

import { line_4, projects_link, all_portFolio, introDiv_introduce } from "../_data/_Functions.jsx";

const ProjectsDiv = styled.div`
    margin-left: 2vw;
    margin-right: 2vw;

    .introduce {
        margin-top: 4vh;

        .text {
            font-size: 2.6em;
            letter-spacing: -.035em;
            line-height: 1.7em;
        }
        .link {
            margin-top: 3.2em;
        }
    }

    .portFolio {
        border-top: ${line_4};
        padding-top: 4vh;
        margin-top: 12vh;
        display: grid;
        
        @media all and (min-width:0px) and (max-width:1023px) {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: .9em;
            grid-auto-rows: minmax(5em, auto);
        }
        @media all and (min-width:1024px) and (max-width:1500px){
            grid-template-columns: repeat(3, 1fr);
            grid-gap: .9em;
            grid-auto-rows: minmax(5em, auto);
        }
        @media all and (min-width:1501px)and (max-width:1800px){
            grid-template-columns: repeat(4, 1fr);
            grid-gap: .6em;
            grid-auto-rows: minmax(5em, auto);
        }
        @media all and (min-width:1801px){
            grid-template-columns: repeat(5, 1fr);
            grid-gap: .6em;
            grid-auto-rows: minmax(5em, auto);
        }
        .img {
            width: 100%;
        }
        .content_text {
            font-size: .8em;
            padding-top: .2em;
            padding-bottom: 1.5em;
            letter-spacing: -.05em;
            font-weight: 400;
        
            strong {
                font-weight: 600;
                letter-spacing: -.03em;
        }}
        button {
            position: relative;
            width: 100%;
        }
    }
`;
const ALink = styled.a`
    font-size: .8em;
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

const Projects = () => {
    return(
        <ProjectsDiv>
            <div className="introduce">
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
            </div>
            <div className="portFolio">
                {all_portFolio.map(v => 
                    <button 
                        key={v["title"]}
                    >
                        <ImgButton color={v["color"]}/>
                        <img 
                            className="img" 
                            src={v["img"]} 
                            alt={""} 
                        />
                        <div className="content_text">
                            <strong>{v["title"]}</strong> {v["category"]}
                        </div>
                    </button>
                )}
            </div>
        </ProjectsDiv>
    )
}

export default Projects;