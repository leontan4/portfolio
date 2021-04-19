import React from "react";
import { motion } from "framer-motion";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInRight = {
	initial: {
		x: -100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.6,
			// ease: easing,
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

function Contact({ contacts }) {
	return (
		<div className="contact-container">
			<motion.ul
				variants={stagger}
				className="contact-list"
				style={{ padding: "3rem" }}
			>
				{contacts.map((contact) => {
					const { id, social, icon, color, link } = contact;
					return (
						<motion.li
							variants={fadeInRight}
							key={id}
							className="contact-item"
							style={{ backgroundColor: `${color}` }}
						>
							<a
								href={link}
								target={social === "email" ? "" : `_target`}
								rel="noopener noreferrer"
								className={`contact-${social} contact-link`}
								style={{
									color: "white",
									textDecoration: "none",
								}}
							>
								<span className="contact-social">{social}</span>{" "}
								<i className={`${icon} contact-icon`}></i>
							</a>
						</motion.li>
					);
				})}
			</motion.ul>
		</div>
	);
}

export default Contact;
