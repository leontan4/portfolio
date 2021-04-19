import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import ScrollIndicator from "../components/ScrollIndicator";
import Footer from "../components/Footer";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";
import {
	projects,
	languagesUse,
	hobbies,
	experiences,
	contacts,
} from "../data";

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const OnePage = () => {
	return (
		<React.Fragment>
			<motion.div
				variants={stagger}
				initial="initial"
				animate="animate"
				exit={{ opacity: 0 }}
			>
				<Header />
				<ScrollIndicator />
				<Contact contacts={contacts} />
				<main>
					<About languagesUse={languagesUse} hobbies={hobbies} />
					<Experience experiences={experiences} />
					<Projects projects={projects} />
				</main>
			</motion.div>
			<Footer />
		</React.Fragment>
	);
};

export default OnePage;
