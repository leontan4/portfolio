import React from "react";
import { Link } from "react-router-dom";
import ParticlesBackground from "../components/ParticlesBackground/ParticlesBackground";

const Error = () => {
	return (
		<div className="error-container">
			<ParticlesBackground />
			<div className="center_all">
				<h1 className="error-header">Oops! It's a Dead End</h1>
				<Link to="/">
					<button className="error-btn btn-animation">back home</button>
				</Link>
			</div>
		</div>
	);
};

export default Error;
