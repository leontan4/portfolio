import React from "react";
import AboutCard from "./AboutCard.jsx";
import LanguageCard from "./LanguageCard.jsx";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
	initial: {
		y: 60,
		opacity: 0,
	},
	animate: {
		y: 1,
		opacity: 1,
		transition: {
			duration: 1,
			ease: easing,
		},
	},
};

const About = ({ languagesUse, hobbies }) => {
	return (
		<section className="about-section" id="about">
			<Container
				style={{
					paddingTop: "60px",
					paddingBottom: "60px",
					overflow: "hidden",
				}}
			>
				<Col md={{ span: 12, offset: 1 }}>
					<Row className="justify-content-md-center">
						<Col>
							<motion.h1 variants={fadeInUp} className="about-header">
								About <strong style={{ color: "rgb(26, 163, 152)" }}>Me</strong>
							</motion.h1>
						</Col>
					</Row>
					<AboutCard hobbies={hobbies} />
				</Col>
			</Container>
			<Container className="professional-skillset">
				<motion.h1
					variants={fadeInUp}
					className="skillset-header"
					style={{ padding: "10px" }}
				>
					<span style={{ color: "black" }}>Professional</span>{" "}
					<strong>SkillSet</strong>
				</motion.h1>
				<motion.div
					variants={fadeInUp}
					className="row"
					style={{
						justifyContent: "center",
						paddingBottom: "50px",
						marginRight: "15px",
					}}
				>
					{languagesUse.map((language) => {
						return (
							<div key={language.id} style={{ margin: "10px" }}>
								<LanguageCard {...language} />
							</div>
						);
					})}
				</motion.div>
			</Container>
		</section>
	);
};

export default About;
