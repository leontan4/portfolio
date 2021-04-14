import React from "react";
import { Row, Col } from "react-bootstrap";
import Hobby from "./Hobby";

const AboutCard = ({ hobbies }) => {
	return (
		<Row className="summary-section">
			<Col style={{ textAlign: "justify" }}>
				<p>
					Hello there! My name is Leon and I am from Malaysia. I'm currently in
					my last semester pursuing Master's in Software Engineering at
					University of St. Thomas.
				</p>
				<p>
					I started learning web development in 2018 but never really made any
					great progress due to busy work and lack of commitment. However, this
					lockdown has given me the opportunity to explore programming to the
					best of my capabilities.
				</p>
				<Hobby hobbies={hobbies} />
			</Col>
			<Col>
				<img src="./images/profile.jpg" alt="profile" className="profile-img" />
			</Col>
		</Row>
	);
};

export default AboutCard;
