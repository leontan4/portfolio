import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Container, Col } from "react-bootstrap";
import { FaAngleDoubleRight } from "react-icons/fa";

const Experience = ({ experiences }) => {
	const [value, setValue] = useState(0);
	const { title, dateStart, dateEnd, duties } = experiences[value];

	// Framer motion animation
	const { ref, inView } = useInView({ threshold: 0.1 });
	const animation = useAnimation();
	const easing = [0.6, -0.05, 0.01, 0.99];

	useEffect(() => {
		if (inView) {
			animation.start({
				y: 1,
				opacity: 1,
				transition: {
					duration: 0.7,
					ease: easing,
				},
			});
		}
	}, [inView]);

	return (
		<section className="experience-section" id="experience">
			<Container style={{ overflow: "hidden" }}>
				<motion.div
					ref={ref}
					initial={{
						y: 100,
						opacity: 0,
					}}
					animate={animation}
					className="row"
				>
					<Col md={{ span: 12, offset: 1 }}>
						<div className="title">
							<div className="col">
								<motion.h1 animate={animation} className="experience-header">
									Where I've{" "}
									<span style={{ color: "#64ffda" }}>
										<strong>Worked</strong>
									</span>
								</motion.h1>
							</div>
						</div>
						<div className="experience-container">
							<div className="experience-btn-container">
								{experiences.map((experience, index) => {
									return (
										<button
											key={experience.id}
											onClick={() => setValue(index)}
											className={`company-btn ${
												index === value && "company-active-btn"
											}`}
										>
											{experience.company}
										</button>
									);
								})}
							</div>
							<article className="job-info">
								<Col lg={8} sm={9}>
									<h3>{title}</h3>
									<p className="job-date">
										{`${dateStart[0].month} ${dateStart[0].year} - ${dateEnd[0].month} ${dateEnd[0].year}`}
									</p>
									{duties.map((duty, index) => {
										return (
											<div key={index} className="job-desc">
												<FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
												<p style={{ color: "#8892b0" }}>{duty}</p>
											</div>
										);
									})}
								</Col>
							</article>
						</div>
					</Col>
				</motion.div>
			</Container>
		</section>
	);
};

export default Experience;
