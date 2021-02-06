import styled from "styled-components";
import Introduce from "../components/Introduce.js"
import FolioList from "../components/FolioList.js"

const ProjectsDiv = styled.div`
    margin-left: 2.2vw;
    margin-right: 2.2vw;
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