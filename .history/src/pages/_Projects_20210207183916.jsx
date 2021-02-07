import styled from "styled-components";
import Introduce from "../components/Introduce.js"
import FolioList from "../components/FolioList.js"

const ProjectsDiv = styled.div`
    margin-left: 5vw;
    margin-right: 2.5vw;
`;

const Projects = () => {
    return(
        <ProjectsDiv>
            <Introduce/>
            <FolioList/>
        </ProjectsDiv>
    )
}

export default Projects;