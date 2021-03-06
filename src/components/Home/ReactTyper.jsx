import React from "react";
import TypeWriter from "react-typing-effect";

const ReactTyping = () => {
	return (
		<TypeWriter
			text={[
				"MERN Stack Developer.",
				"React Web Developer.",
				"Strive to Thrive.",
				"Always be Curious.",
			]}
			speed={50}
			eraseSpeed={50}
			eraseDelay={3000}
			typingDelay={1500}
		/>
	);
};

export default ReactTyping;
