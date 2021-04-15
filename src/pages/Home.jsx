import React from "react";
import { Row, Col } from "react-bootstrap";
import ReactTyper from "../components/Home/ReactTyper.jsx";
import { Link } from "react-router-dom";
import ParticlesBackground from "../components/ParticlesBackground/ParticlesBackground";

const Home = () => {
	return (
		<React.Fragment>
			<div className="home-container" style={{ backgroundColor: "#0a192f" }}>
				<ParticlesBackground />
				<div className="center_all">
					<Col xs={{ span: 10, offset: 1 }}>
						<h1 className="home-greetings">Hi, my name is</h1>
						<h2 className="home-header">Leon Tan.</h2>
						<h3 className="home-header-2">
							<ReactTyper />
						</h3>
						<Row>
							<Col lg={6} md={8}>
								<p
									style={{
										color: "#8892b0",
										fontSize: "1rem",
										padding: "15px 0px",
									}}
								>
									I'm a recent Software Engineering graduate from University of
									St. Thomas with fundamental knowledge in front-end framework.
									Currently, I'm open to potential job opportunities.
								</p>
							</Col>
						</Row>
						<Link to="/about">
							<button className="home-btn btn-animation">know more</button>
						</Link>
					</Col>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Home;
