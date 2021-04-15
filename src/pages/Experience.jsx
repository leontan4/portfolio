import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaAngleDoubleRight } from "react-icons/fa";

const Experience = ({ experiences }) => {
	const [value, setValue] = useState(0);
	const { title, dateStart, dateEnd, duties } = experiences[value];

	return (
		<section className="experience-section" id="experience">
			<Container style={{ overflow: "hidden" }}>
				<Row>
					<Col md={{ span: 12, offset: 1 }}>
						<div className="title">
							<h1 className="experience-header">
								Where I've{" "}
								<span style={{ color: "#64ffda" }}>
									<strong>Work</strong>
								</span>
							</h1>
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
				</Row>
			</Container>
		</section>
	);
};

export default Experience;
