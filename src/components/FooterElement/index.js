import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import {
	FooterContainer,
	FooterWrap,
	SocialIconLink,
	SocialIcons,
	SocialMedia,
	SocialLogo,
	WebsiteRights,
} from "./FooterElement";

const Footer = () => {
	// Framer motion animation
	const { ref, inView } = useInView({ threshold: 0.3 });
	const animation = useAnimation();
	const easing = [0.6, -0.05, 0.01, 0.99];

	const stagger = {
		animate: {
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	useEffect(() => {
		if (inView) {
			animation.start({
				y: 1,
				opacity: 1,
				transition: {
					duration: 0.6,
					ease: easing,
				},
			});
		}
	}, [inView]);

	return (
		<FooterContainer>
			<FooterWrap>
				<SocialMedia>
					<motion.div
						ref={ref}
						variants={stagger}
						className="social-media-wrap"
					>
						<SocialLogo to="/">
							<motion.div
								ref={ref}
								initial={{
									y: 100,
									opacity: 0,
								}}
								animate={animation}
							>
								LEON TAN
							</motion.div>
						</SocialLogo>
						<WebsiteRights>
							<motion.span
								ref={ref}
								initial={{
									y: 100,
									opacity: 0,
								}}
								animate={animation}
							>
								Leon Tan &copy; {new Date().getFullYear()} All rights reserved.
							</motion.span>
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink
								href="https://linkedin.com/in/leontan4"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
							>
								<motion.i
									ref={ref}
									initial={{
										y: 100,
										opacity: 0,
									}}
									animate={animation}
									className="fab fa-linkedin-in"
								></motion.i>
							</SocialIconLink>
							<SocialIconLink
								href="https://github.com/leontan4"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Github"
							>
								<motion.i
									ref={ref}
									initial={{
										y: 100,
										opacity: 0,
									}}
									animate={animation}
									className="fab fa-github"
								></motion.i>
							</SocialIconLink>
							<SocialIconLink
								href="mailto:leon.tan004@gmail.com"
								rel="noopener noreferrer"
								aria-label="Mail"
							>
								<motion.i
									ref={ref}
									initial={{
										y: 100,
										opacity: 0,
									}}
									animate={animation}
									className="far fa-envelope"
								></motion.i>
							</SocialIconLink>
							<SocialIconLink
								href="/Leon Tan (Resume).pdf"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Resume"
							>
								<motion.i
									ref={ref}
									initial={{
										y: 100,
										opacity: 0,
									}}
									animate={animation}
									className="far fa-file"
								></motion.i>
							</SocialIconLink>
						</SocialIcons>
					</motion.div>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
