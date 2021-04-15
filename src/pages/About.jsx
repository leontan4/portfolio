import React from "react";
import AboutCard from "../components/About/AboutCard.jsx";
import LanguageCard from "../components/About/LanguageCard.jsx";
import { Container, Row, Col } from "react-bootstrap";

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
							<h1 className="about-header">
								About <strong style={{ color: "rgb(26, 163, 152)" }}>Me</strong>
							</h1>
						</Col>
					</Row>
					<AboutCard hobbies={hobbies} />
				</Col>
			</Container>
			<Container className="professional-skillset">
				<h1 className="skillset-header" style={{ padding: "10px" }}>
					<span style={{ color: "black" }}>Professional</span>{" "}
					<strong>SkillSet</strong>
				</h1>
				<Row
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
				</Row>
			</Container>
		</section>
	);
};

export default About;
