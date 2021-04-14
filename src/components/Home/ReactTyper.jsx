import React from "react";
import TypeWriter from "react-typing-effect";

const ReactTyping = () => {
	return (
		<TypeWriter
			text={["MERN Stack Developer.", "React Web Developer."]}
			speed={50}
			eraseSpeed={50}
			eraseDelay={3000}
			typingDelay={1500}
		/>
	);
};

export default ReactTyping;
