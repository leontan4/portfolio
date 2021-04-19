import React from "react";
import { motion } from "framer-motion";

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

const fadeInRight = {
	initial: {
		x: -60,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.6,
			ease: easing,
		},
	},
};

const Hobby = ({ hobbies }) => {
	return (
		<React.Fragment>
			<motion.p variants={fadeInRight}>
				Here are some of my hobbies besides programming:
			</motion.p>
			<motion.ul variants={fadeInRight} className="fa-ul list-section">
				{hobbies.map((item) => {
					const { id, hobby } = item;

					return (
						<li key={id}>
							<span className="fa-li">
								<i className="fas fa-caret-right"></i>
							</span>
							{hobby}
						</li>
					);
				})}
			</motion.ul>
		</React.Fragment>
	);
};

export default Hobby;
