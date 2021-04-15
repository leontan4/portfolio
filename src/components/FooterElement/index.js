import React from "react";
import {
	FooterContainer,
	FooterWrap,
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
						<SocialLogo to="/">LEON TAN</SocialLogo>
						<WebsiteRights>
							Leon Tan &copy; {new Date().getFullYear()} All rights reserved.
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink
								href="https://linkedin.com/in/leontan4"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
							>
								<i className="fab fa-linkedin-in"></i>
							</SocialIconLink>
							<SocialIconLink
								href="https://github.com/leontan4"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Github"
							>
								<i className="fab fa-github"></i>
							</SocialIconLink>
							<SocialIconLink
								href="mailto:leon.tan004@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Mail"
							>
								<i className="far fa-envelope"></i>
							</SocialIconLink>
							<SocialIconLink
								href="/Leon Tan (Resume).pdf"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Resume"
							>
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
