/**
 * Projects.js
 * @author [Keisuke Suzuki](https://github.com/Ks5810)
 */
import React from "react";
import { Container, Row } from "react-bootstrap";
import ProjectsItem from "./ProjectsItem";


const Projects = React.forwardRef(({
        projectData,
        ...props
    }, ref) => (
        <Container ref={ ref } className="projects">
            <h2 className="projects-heading">Projects</h2>
            <Row className="projects-list">
                {
                    projectData.projects.map((node, ind) =>
                        <ProjectsItem key={ ind } node={ node } ind={ ind }/>
                    )
                }
            </Row>
        </Container>
    )
);

export default Projects;