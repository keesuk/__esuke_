import styled from "styled-components";
import Introduce from "../components/Introduce.js"
import FolioList from "../components/FolioList.js"

import { pages_Margin } from "./_data/_Function.jsx"

const ProjectsDiv = styled.div`
    ${ProjectsDiv}
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