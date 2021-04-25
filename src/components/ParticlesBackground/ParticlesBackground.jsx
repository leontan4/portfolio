import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "../../config/particle-config";

const ParticlesBackground = () => {
	return <Particles className="particles" params={ParticleConfig} />;
};

export default ParticlesBackground;
