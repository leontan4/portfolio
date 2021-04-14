import React, { useRef } from "react";
import Modal from "./Modal";

const ProjectCard = ({ project }) => {
	const modalRef = useRef();

	const { img } = project;
	return (
		<div className="col-md-6 project-container">
			<div className="card h-100 project-card-section">
				<img
					className="card-img-top project-img img-fluid"
					src={img}
					alt="Card image cap"
				/>
				<div className="card-body d-flex align-items-stretch">
					{/* <button
						type="button"
						className="project-btn"
						onClick={() => modalRef.current.open()}
					>
						View Project
					</button> */}
					<button
						type="button"
						className="mt-auto btn btn-lg btn-block project-btn btn-animation-project"
						onClick={() => modalRef.current.open()}
					>
						View Project
					</button>
				</div>
			</div>
			<Modal ref={modalRef} {...project} />
		</div>
	);
};

export default ProjectCard;
