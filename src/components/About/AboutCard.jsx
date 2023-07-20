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
					During my tenure at UNFI, I demonstrated my technical prowess by automating reporting processes and boosting ETL efficiency, employing Python, SQL, and AWS. I efficiently resolved bugs through the adept utilization of dBeaver, CloudFormation, and Step Functions. My collaborative efforts with team members facilitated the seamless migration of on-premises data into the AWS cloud environment.
				</motion.p>
				<motion.p>
					As part of my contributions, I designed and maintained the enterprise data platform infrastructure, providing a solid foundation for data-driven decision-making. My focus on efficiency led to the implementation of high-performance data pipelines, enhancing integration efficiency by an impressive 90%. Additionally, I ensured the data pipeline architecture was robust and accessible, enabling smooth access for analytic and forecasting teams.
				</motion.p>
				<motion.p>
					Throughout my journey, I optimized cross-functional data extraction, significantly enhancing accessibility for business stakeholders, thereby enriching the overall data management experience at UNFI.
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
