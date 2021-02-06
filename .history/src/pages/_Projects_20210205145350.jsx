import styled from "styled-components";
import Introduce from "../components/Introduce.js"
import FolioList from "../components/FolioList.js"

import { Margin } from "../data/Function.jsx"

const ProjectsDiv = styled.div`
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