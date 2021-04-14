import React, { useState, forwardRef, useImperativeHandle } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ModalTest = forwardRef(
	({ title, desc, languages, img, url, code }, ref) => {
		const [open, setOpen] = useState(false);

		useImperativeHandle(ref, () => {
			return {
				open: () => setOpen(true),
				close: () => setOpen(false),
			};
		});

		return (
			<AnimatePresence>
				{open && (
					<React.Fragment>
						<motion.div
							className="modal-back"
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								transition: {
									duration: 0.3,
								},
							}}
							exit={{
								opacity: 0,
							}}
						/>
						<motion.div
							className="mb-auto modal-container-wrapper"
							style={{ backgroundColor: "#0a192f", border: "0px" }}
							initial={{ scale: 0 }}
							animate={{
								scale: 1,
								transition: {
									duration: 0.2,
								},
							}}
							exit={{
								scale: 0,
							}}
						>
							<button
								type="button"
								className="close-btn"
								onClick={() => setOpen(false)}
							>
								<i className="fas fa-times"></i>
							</button>
							<motion.div
								className="row no-gutters mb-auto modal-container"
								style={{ backgroundColor: "#0a192f" }}
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: {
										duration: 0.3,
									},
								}}
								exit={{
									opacity: 0,
									transition: {
										duration: 0.3,
									},
								}}
							>
								<motion.div className="col-lg-6 left-container">
									<img
										src={img}
										className="card-img img-fluid"
										alt={title}
										style={{ borderRadius: "0px" }}
									/>
								</motion.div>
								<motion.div className="col-lg-6 right-container">
									<motion.div className="card-body">
										<h2 className="card-title modal-title">{title}</h2>
										<ul style={{ padding: 0 }}>
											{languages.map((language, index) => {
												return <li key={index}>{language}</li>;
											})}
										</ul>
										<h5 className="card-title modal-title">about</h5>
										<motion.div className="info-container">
											<p className="modal-info">{desc}</p>
										</motion.div>
										<a
											className="modal-btn btn-animation"
											href={url}
											target="_blank"
										>
											<i className="fas fa-external-link-alt"></i> view
										</a>
										<a
											className="modal-btn btn-animation"
											href={code}
											target="_blank"
										>
											<i className="fab fa-github"></i>
											code
										</a>
									</motion.div>
								</motion.div>
							</motion.div>
						</motion.div>
					</React.Fragment>
				)}
			</AnimatePresence>
		);
	},
);

export default ModalTest;
