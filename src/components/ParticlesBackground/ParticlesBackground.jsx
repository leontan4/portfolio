import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "../../config/particle-config";

const ParticlesBackground = () => {
	return <Particles height="99.4vh" width="100vw" params={ParticleConfig} />;
};

export default ParticlesBackground;
