import React from "react";
import ProjectCard from "../components/Projects/ProjectCard";
import { Container, Col } from "react-bootstrap";

const Project = ({ projects }) => {
	return (
		<React.Fragment>
			<section className="project-section" id="projects">
				<h1 className="project-header">
					My Recent{" "}
					<strong style={{ color: "rgb(26, 163, 152)" }}>Works</strong>
				</h1>
				<p className="project-text">
					Some of the projects I've worked on recently
				</p>
				<Container>
					<Col className="project-container" lg={{ span: 10, offset: 1 }}>
						<div
							className="row"
							// style={{
							// 	display: "flex",
							// 	flexDirection: "row",
							// 	justifyContent: "center",
							// }}
						>
							{projects.map((project) => {
								return <ProjectCard key={project.id} project={project} />;
							})}
						</div>
					</Col>
				</Container>
			</section>
		</React.Fragment>
	);
};

export default Project;
