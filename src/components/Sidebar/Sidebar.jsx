import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
// import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export const SidebarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: #112240;
	display: grid;
	align-items: center;
	left: 0;
	transition: 0.4s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
	top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
	color: #64ffda;
`;

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
	transition: ease-out 0.2s;

	&:hover {
		transform: scale(1.4);
	}
`;

export const SidebarWrapper = styled.div`
	color: #64ffda;
`;

export const SidebarMenu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 80px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(6, 60px);
	}
`;

export const SidebarLink = styled(ScrollLink)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-decoration: none;
	text-transform: capitalize;
	list-style: none;
	transition: 0.2s ease-in-out;
	text-decoration: none;
	color: #fff;
	cursor: pointer;
	transition: 0.3s ease-in-out;

	&:hover {
		color: #64ffda;
		text-decoration: none;
		transform: scale(1.3);
	}
`;

export const SideBtnWrap = styled.div`
	display: flex;
	justify-content: center;
`;

// export const SidebarRoute = styled(RouterLink)`
// 	border-radius: 50px;
// 	background: #64ffda;
// 	white-space: nowrap;
// 	padding: 16px 64px;
// 	color: #010606;
// 	font-size: 16px;
// 	font-weight: bold;
// 	outline: none;
// 	cursor: pointer;
// 	transition: all 0.2s ease-in-out;
// 	text-decoration: none;
// 	text-transform: uppercase;

// 	&:hover {
// 		transition: all 0.2s ease-in-out;
// 		background: #fff;
// 		color: #010606;
// 		text-decoration: none;
// 	}
// `;
