import React from "react";
import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import Hobby from "./Hobby";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
	initial: {
		y: 60,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.6,
			ease: easing,
		},
	},
};

const AboutCard = ({ hobbies }) => {
	return (
		<motion.div variants={fadeInUp} className="row summary-section">
			<Col style={{ textAlign: "justify" }}>
				<motion.p>
				Greetings! I'm Leon, a Data Engineer with invaluable experience gained while working at UNFI. 
				My day-to-day responsibilities encompassed maintaining data report pipelines, performing data cleaning, and transforming data into comprehensible stories for the analyst team, all achieved using Python, AWS, and SQL.
				</motion.p>
				<motion.p>
					I started learning Web Development in 2018 and the lockdown in 2020
					has given me better opportunity to explore programming to the best of
					my capabilities.
				</motion.p>
				<Hobby hobbies={hobbies} />
			</Col>
			<Col>
				<motion.img
					src="./images/profile.jpg"
					alt="profile"
					className="profile-img"
				/>
			</Col>
		</motion.div>
	);
};

export default AboutCard;
