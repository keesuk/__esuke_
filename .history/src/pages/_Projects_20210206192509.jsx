import styled from "styled-components";
import Introduce from "../components/Introduce.js"
import FolioList from "../components/FolioList.js"

const ProjectsDiv = styled.div`
    margin-left: 2.5vw;
    margin-right: 2.5vw;
`;

const Projects = () => {
    return(
        <ProjectsDiv>
            
            <FolioList/>
        </ProjectsDiv>
    )
}

export default Projects;