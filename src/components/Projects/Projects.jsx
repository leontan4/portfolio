import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

const Project = ({ projects }) => {
	const { ref, inView } = useInView({ threshold: 0.15 });
	const animation = useAnimation();
	const easing = [0.6, -0.05, 0.01, 0.99];

	useEffect(() => {
		if (inView) {
			animation.start({
				y: 1,
				opacity: 1,
				transition: {
					duration: 0.7,
					ease: easing,
				},
			});
		}
	}, [inView]);

	return (
		<motion.section className="project-section" id="projects">
			<motion.h1
				ref={ref}
				initial={{ y: 80, opacity: 0 }}
				animate={animation}
				className="project-header"
			>
				My Recent{" "}
				<strong style={{ color: "rgb(26, 163, 152)" }}>Projects</strong>
			</motion.h1>
			<motion.p
				ref={ref}
				initial={{ y: 100, opacity: 0 }}
				animate={animation}
				className="project-text"
			>
				Some of the projects I've worked on recently
			</motion.p>
			<div className="container">
				<Col className="project-container" lg={{ span: 10, offset: 1 }}>
					<div className="row">
						{projects.map((project) => {
							return <ProjectCard key={project.id} project={project} />;
						})}
					</div>
				</Col>
			</div>
		</motion.section>
	);
};

export default Project;
