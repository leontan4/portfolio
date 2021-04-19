import React from "react";
import { motion } from "framer-motion";
// import { animateScroll as scroll } from "react-scroll";
import {
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
} from "./Navbar";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInDown = {
	initial: {
		y: -60,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: easing,
		},
	},
};

const fadeInRight = {
	initial: {
		x: 100,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.4,
			ease: easing,
		},
	},
};

const Navbar = ({ toggle }) => {
	// const toggleAbout = () => {
	// 	scroll.scrollToTop();
	// };

	return (
		<React.Fragment>
			<nav className="nav-bar">
				<NavbarContainer>
					<NavLogo to="/">
						<motion.div variants={fadeInDown}>LT</motion.div>
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<motion.i
							variants={fadeInRight}
							className="fas fa-bars nav-burger-menu"
						></motion.i>
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks
								to="about"
								smooth={true}
								duration={500}
								exact="true"
								offset={-80}
								activeClass="active"
							>
								<motion.div variants={fadeInDown}>
									<i className="far fa-user nav-link-icon" />
									about
								</motion.div>
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="experience"
								smooth={true}
								duration={500}
								exact="true"
								offset={-80}
								activeClass="active"
							>
								<motion.div variants={fadeInDown}>
									<i className="far fa-file-alt nav-link-icon" />
									experience
								</motion.div>
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to="projects"
								smooth={true}
								duration={500}
								exact="true"
								offset={-80}
								activeClass="active"
							>
								<motion.div variants={fadeInDown}>
									<i className="fas fa-code-branch nav-link-icon" />
									projects
								</motion.div>
							</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<motion.a
							initial={{
								y: -100,
								opacity: 0,
							}}
							animate={{
								y: 0,
								opacity: 1,
								transition: {
									duration: 1.1,
									ease: easing,
								},
							}}
							href="/Leon Tan (Resume).pdf"
							rel="noopener noreferrer"
							target="_blank"
							className="resume-nav-btn"
						>
							Resume
						</motion.a>
					</NavBtn>
				</NavbarContainer>
			</nav>
		</React.Fragment>
	);
};

export default Navbar;
