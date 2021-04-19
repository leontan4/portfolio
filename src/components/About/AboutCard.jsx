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
					Hello there! My name is Leon and I am from Malaysia. I'm currently in
					my last semester pursuing Master's in Software Engineering at
					University of St. Thomas.
				</motion.p>
				<motion.p>
					I started learning web development in 2018 but never really made any
					great progress due to busy work and lack of commitment. However, this
					lockdown has given me the opportunity to explore programming to the
					best of my capabilities.
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
