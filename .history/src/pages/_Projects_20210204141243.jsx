import styled from "styled-components";
import Introduce from "../components/Introduce.jsx"
import FolioList from "../components/FolioList.jsx"

const ProjectsDiv = styled.div`
    margin-left: 2vw;
    margin-right: 2vw;
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