import React from "react";
import { Col } from "react-bootstrap";

const LanguageCard = ({ logo }) => {
	return (
		<Col className="tech-icons">
			<i className={`devicon-${logo} tech-icon-images`}></i>
		</Col>
	);
};

export default LanguageCard;
