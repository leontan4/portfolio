import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "./Modal";

const ProjectCard = ({ project }) => {
	const modalRef = useRef();

	const { ref, inView } = useInView({ threshold: 0.15 });
	const animation = useAnimation();
	const easing = [0.6, -0.05, 0.01, 0.99];

	useEffect(() => {
		if (inView) {
			animation.start({
				y: 1,
				opacity: 1,
				transition: {
					duration: 0.5,
					ease: easing,
				},
			});
		}
	}, [inView]);

	const { img, title } = project;
	return (
		<React.Fragment>
			<motion.div
				ref={ref}
				initial={{ y: 100, opacity: 0 }}
				animate={animation}
				className="col-md-6 project-container"
			>
				<div className="card h-100 project-card-section">
					<img
						className="card-img-top project-img img-fluid"
						src={img}
						alt={title}
					/>
					<div className="card-body d-flex align-items-stretch">
						<button
							type="button"
							className="mt-auto btn btn-lg btn-block project-btn btn-animation-project"
							onClick={() => modalRef.current.open()}
						>
							View Project
						</button>
					</div>
				</div>
			</motion.div>
			<Modal ref={modalRef} {...project} />
		</React.Fragment>
	);
};

export default ProjectCard;
