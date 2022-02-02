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
					Hello there! My name is Leon and I am from Malaysia. I'm currently working at UNFI as a Data Engineer. 
					My day-to-day job involves maintaining data report pipeline, data cleaning and transforming data into a comprehendible story for the analyst team.
					Technology and tools that I often would use are Python, Alteryx and SQL.
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
