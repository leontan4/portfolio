import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const HeaderTest = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<React.Fragment>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
		</React.Fragment>
	);
};

export default HeaderTest;
