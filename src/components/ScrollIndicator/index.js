import React, { useState, useEffect } from "react";
import { useWindowScroll } from "react-use";

const ScrollIndicator = () => {
	const { x, y } = useWindowScroll();
	const [scrolled, setScrolled] = useState(0);

	useEffect(() => {
		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		setScrolled((y / height) * 100);
	}, [y]);

	return (
		<div className="navbar-scroll-container">
			<div className="indicator" style={{ width: `${scrolled}%` }}></div>
		</div>
	);
};

export default ScrollIndicator;
