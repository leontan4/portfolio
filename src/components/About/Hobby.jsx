import React from "react";

const Hobby = ({ hobbies }) => {
	return (
		<React.Fragment>
			<p>Here are some of the things I enjoyed doing:</p>
			<ul className="fa-ul list-section">
				{hobbies.map((item) => {
					const { id, hobby } = item;

					return (
						<li key={id}>
							<span className="fa-li">
								<i className="fas fa-caret-right"></i>
							</span>
							{hobby}
						</li>
					);
				})}
			</ul>
		</React.Fragment>
	);
};

export default Hobby;
