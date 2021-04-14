import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink,
} from "./Navbar";

const Navbar = ({ toggle }) => {
	// const toggleAbout = () => {
	// 	scroll.scrollToTop();
	// };

	return (
		<React.Fragment>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">Leon Tan</NavLogo>
					<MobileIcon onClick={toggle}>
						<i className="fas fa-bars nav-burger-menu"></i>{" "}
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
								<i className="far fa-user nav-link-icon" />
								about
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
								<i className="far fa-file-alt nav-link-icon" />
								experience
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
								<i className="fas fa-code-branch nav-link-icon" />
								projects
							</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<a
							href="/Leon Tan (Resume).pdf"
							target="_blank"
							className="resume-nav-btn"
						>
							Resume
						</a>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</React.Fragment>
	);
};

export default Navbar;
