import styled from "styled-components";
import Introduce from "../components/Introduce.js"
import FolioList from "../components/FolioList.js"

import { pagesMargin } from "../_data/_Functions.jsx";

const ProjectsDiv = styled.div`
    ${pagesMargin}
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