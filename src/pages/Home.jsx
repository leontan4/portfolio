import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ReactTyper from "../components/Home/ReactTyper.jsx";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import ParticlesBackground from "../components/ParticlesBackground/ParticlesBackground";

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

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const Home = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		let timer = setTimeout(() => {
			setLoading(false);
		}, 2500);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<AnimatePresence>
			{loading ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 0.25 } }}
					exit={{ opacity: 0 }}
					className="loader"
				>
					<ClimbingBoxLoader color={"#64ffda"} loading={loading} size={30} />
				</motion.div>
			) : (
				<motion.div
					initial="initial"
					animate="animate"
					exit={{ opacity: 1 }}
					style={{ backgroundColor: "#0a192f" }}
					className="home-container"
				>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 1 } }}
					>
						<ParticlesBackground />
						<div className="center_all">
							<motion.div variants={stagger} className="col-10 offset-1">
								<motion.h1 variants={fadeInUp} className="home-greetings">
									Hi, my name is
								</motion.h1>
								<motion.h2 variants={fadeInUp} className="home-header">
									Leon Tan.
								</motion.h2>
								<motion.h3 variants={fadeInUp} className="home-header-2">
									<ReactTyper />
								</motion.h3>
								<Row>
									<Col lg={6} md={8}>
										<motion.p
											variants={fadeInUp}
											style={{
												color: "#8892b0",
												padding: "15px 0px",
											}}
											className="home-text"
										>
											I'm a Software Engineering graduate from University of St.
											Thomas with fundamental knowledge in front-end framework.
											Currently, I'm open to potential job opportunities.
										</motion.p>
									</Col>
								</Row>
								<Link to="/about">
									<motion.button
										variants={fadeInUp}
										className="home-btn btn-animation"
									>
										know more
									</motion.button>
								</Link>
							</motion.div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Home;
