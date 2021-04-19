import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
	background-color: #112240;
`;

export const FooterWrap = styled.div`
	padding: 5px 24px 25px 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1100px;
	margin: 0 auto;
	padding-bottom: 30px;

	@media screen and (max-width: 767px) {
		padding-bttom: 45px;
	}
`;

export const SocialMedia = styled.section`
	max-width: 1000px;
	width: 100%;
`;

export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;
	margin: 30px auto 0 auto;

	@media screen and (max-width: 767px) {
		flex-direction: column;
	}
`;

export const SocialLogo = styled(Link)`
	color: #a8b2d1;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	text-size: 2rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
	font-weight: bold;
	margin-top: 10px;
	transition: all 0.3s;
	font-size: 1.2rem;

	&:hover {
		text-decoration: none;
		color: #64ffda;
		transform: scale(1.3);
	}

	@media screen and (max-width: 767px) {
		margin-bottom: 10px;
	}
`;

export const WebsiteRights = styled.small`
	color: #a8b2d1;
	margin-bottom: 16px;
	margin-top: 10px;
	font-size: 1rem;

	@media screen and (max-width: 767px) {
		margin-bottom: 25px;
	}
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 200px;
`;

export const SocialIconLink = styled.a`
	color: #a8b2d1;
	font-size: 24px;
	margin-top: -6px;
	transition: all 0.3s;

	&:hover {
		text-decoration: none;
		color: #64ffda;
		transform: scale(1.4);
	}
`;
