import React from "react";

function Contact({ contacts }) {
	return (
		<div className="contact-container">
			<ul className="contact-list" style={{ padding: "3rem" }}>
				{contacts.map((contact) => {
					const { id, social, icon, color, link } = contact;
					return (
						<li
							key={id}
							className="contact-item"
							style={{ backgroundColor: `${color}` }}
						>
							<a
								href={link}
								target={social === "email" ? "" : `_target`}
								className={`contact-${social} contact-link`}
								style={{
									color: "white",
									textDecoration: "none",
								}}
							>
								<span className="contact-social">{social}</span>{" "}
								<i className={`${icon} contact-icon`}></i>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Contact;
