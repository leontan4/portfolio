import React from "react";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute,
} from "./Sidebar";

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink
						to="about"
						onClick={toggle}
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={-80}
						activeClass="active"
					>
						about
					</SidebarLink>
					<SidebarLink
						to="experience"
						onClick={toggle}
						smooth={true}
						duration={500}
						// spy={true}
						exact="true"
						offset={-80}
						activeClass="active"
					>
						experience
					</SidebarLink>
					<SidebarLink
						to="projects"
						onClick={toggle}
						smooth={true}
						duration={500}
						// spy={true}
						exact="true"
						offset={-80}
						activeClass="active"
					>
						projects
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<a
						href="/Leon Tan (Resume).pdf"
						target="_blank"
						className="resume-side-btn"
					>
						Resume
					</a>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
