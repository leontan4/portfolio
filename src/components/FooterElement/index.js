import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
	FooterContainer,
	FooterLinkContainer,
	FooterWrap,
	FooterLinkWrapper,
	FooterLinkTitle,
	FooterLinkItems,
	FooterLink,
	SocialIconLink,
	SocialIcons,
	SocialMediaWrap,
	SocialMedia,
	SocialLogo,
	WebsiteRights,
} from "./FooterElement";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				{/* <FooterLinkContainer>
					<FooterLinkWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>LEON TAN</FooterLinkTitle>
						</FooterLinkItems>
					</FooterLinkWrapper>
				</FooterLinkContainer> */}
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo>LEON TAN</SocialLogo>
						<WebsiteRights>
							Leon Tan &copy; {new Date().getFullYear()} All rights reserved.
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
								<i className="fab fa-linkedin-in"></i>
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Github">
								<i className="fab fa-github"></i>
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Mail">
								<i className="far fa-envelope"></i>
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Resume">
								<i className="far fa-file"></i>
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
