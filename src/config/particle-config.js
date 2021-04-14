const particleConfig = {
	particles: {
		number: {
			value: 44,
			density: {
				enable: true,
				value_area: 888,
			},
		},
		color: {
			value: "#0fc5de",
		},
		shape: {
			type: "circle",
			stroke: {
				width: 0,
				color: "#000000",
			},
		},
		opacity: {
			value: 1,
			random: true,
			anim: {
				enable: true,
				speed: 0.40603860615067255,
				opacity_min: 1,
				sync: true,
			},
		},
		size: {
			value: 4,
			random: true,
			anim: {
				enable: true,
				speed: 2,
				size_min: 1,
				sync: true,
			},
		},
		line_linked: {
			enable: true,
			distance: 110.48066982851817,
			color: "#ffffff",
			opacity: 0.4,
			width: 1.1048066982851816,
		},
		move: {
			enable: true,
			speed: 1,
			direction: "none",
			random: true,
			straight: false,
			out_mode: "bounce",
			bounce: false,
			attract: {
				enable: true,
				rotateX: 600,
				rotateY: 1200,
			},
		},
	},
	interactivity: {
		detect_on: "window",
		events: {
			onhover: {
				enable: false,
				mode: "repulse",
			},
			onclick: {
				enable: true,
				mode: "push",
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 450.7028528272465,
				line_linked: {
					opacity: 1,
				},
			},
			push: {
				particles_nb: 4,
			},
			remove: {
				particles_nb: 2,
			},
		},
	},
	retina_detect: true,
};

export default particleConfig;
