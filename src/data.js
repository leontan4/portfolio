// Data for pulling into webpage

// About Section
export const hobbies = [
	{
		id: 1,
		hobby: "snowboarding",
	},

	{
		id: 2,
		hobby: "chinese chess",
	},

	{
		id: 3,
		hobby: "rubik cube's",
	},
	{
		id: 4,
		hobby: "sudoku",
	},
];

export const languagesUse = [
	{
		id: 1,
		language: "java",
		logo: "java-plain-wordmark",
		color: "b07219",
	},
	{
		id: 2,
		language: "html",
		logo: "html5-plain-wordmark",
		color: "e34c26",
	},
	{
		id: 3,
		language: "css",
		logo: "css3-plain-wordmark",
		color: "563d7c",
	},
	{
		id: 4,
		language: "javascript",
		logo: "javascript-plain",
		color: "f1e05a",
	},
	{
		id: 5,
		language: "nodejs",
		logo: "nodejs-plain-wordmark",
	},
	{
		id: 6,
		language: "express",
		logo: "express-original-wordmark",
	},
	{
		id: 7,
		language: "react",
		logo: "react-original-wordmark",
		color: "61DBFB",
	},
	{
		id: 8,
		language: "mongodb",
		logo: "mongodb-plain-wordmark",
	},
	{
		id: 9,
		language: "bootstrap",
		logo: "bootstrap-plain-wordmark",
	},
	{
		id: 10,
		language: "git",
		logo: "git-plain-wordmark",
	},
];

// Experience Section
export const experiences = [
	{
		id: 1,
		company: "thomson reuters",
		dateStart: [{ month: "july", year: "2019" }],
		dateEnd: [{ month: "may", year: "2020" }],
		title: "digital pricing analyst",
		city: "eagan",
		state: "mn",
		duties: [
			"Analyzed quarterly digital sales report and recommended potential opportunities for database automation team.",
			"Designed automation VBA scripts to enhance analysis run‑time, reduced calculation and pricing errors by 90%.",
			"Developed strong analytical and financial skills, which helped to anticipate market and company needs.",
		],
	},
	{
		id: 2,
		company: "3m",
		title: "deviated pricing analyst",
		dateStart: [{ month: "july", year: "2018" }],
		dateEnd: [{ month: "july", year: "2019" }],
		city: "maplewood",
		state: "mn",
		duties: [
			"Created VBA automation scripts for ad hoc financial analysis and SQL database to yield report findings.",
			"Deviated contract pricing and analytical reporting across various internal/external business group.",
			"Utilized cost estimation systems to document project information and revise project costs to reflect current data.",
		],
	},
	{
		id: 3,
		company: "s&f",
		title: "product specialist",
		dateStart: [{ month: "february", year: "2017" }],
		dateEnd: [{ month: "september", year: "2017" }],
		city: "woodbury",
		state: "mn",
		duties: [
			"Constructed statistic reports of orders to ease labeling usage of product development.",
			"Processed order of product specifications with in‑house software (Java) to improve product analysis production.",
			"Researched product’s technical specifications and accurately communicated information between departments.",
		],
	},
];

// Projects Section
export const projects = [
	{
		id: 1,
		title: "covid tracker",
		languages: ["html & css", "javascript", "ejs", "chart.js", "bootstrap"],
		img: "./images/covid-news.jpg",
		desc:
			"Covid cases are still on the rise and people should continue to be on the lookout. Daily Covid-19 data was pulled from Open Disease Data and integrated to graph plus table for better interpretation. Javascript and EJS runs the back end by fetching JSON information, while Chart.js focuses on the front-end for building graphs. ",
		url: "https://coronavirus-tracer.herokuapp.com/",
		code: "https://github.com/leontan4/covid-dashboard",
	},
	{
		id: 2,
		title: "github profile finder",
		languages: [
			"html & css",
			"javascript",
			"react",
			"auth0",
			"fusion chart",
			"bootstrap",
		],
		img: "./images/github-finder.jpg",
		desc:
			"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
		url: "https://coronavirus-tracer.herokuapp.com/",
	},

	{
		id: 3,
		title: "portfolio",
		languages: [
			"html & css",
			"javascript",
			"react",
			"react router",
			"framer motion",
			"bootstrap",
		],
		img: "./images/logo.png",
		desc:
			"Covid cases are still on the rise and people should continue to be on the lookout. Daily Covid-19 data was pulled from Open Disease Data and integrated to graph plus table for better interpretation. Javascript and EJS runs the back end by fetching JSON information, while Chart.js focuses on the front-end for building graphs.Covid cases are still on the rise and people should continue to be on the lookout. Daily Covid-19 data was pulled from Open Disease Data and integrated to graph plus table for better interpretation. Javascript and EJS runs the back end by fetching JSON information, while Chart.js focuses on the front-end for building graphs.This project was built using React and is used to vizualize classic sorting algorithms such as insertion sort, merge sort, quick sort, etc.",
		url: "",
		code: "https://github.com/leontan4/portfolio",
	},
];

export const languageColor = {
	ejs: "#a91e50",
	html: "#e34c26",
	css: "#563d7c",
	javascript: "#f1e05a",
	react: "#61DBFB",
	"c++": "#f34b7d",
	java: "#b07219",
	shell: "#89e051",
	python: "#3572A5",
	ruby: "#701516",
	scss: "#c6538c",
	vue: "#2c3e50",
	php: "#4F5D95",
	other: "#586069",
};

export const contacts = [
	{
		id: 1,
		social: "linkedin",
		icon: "fab fa-linkedin-in",
		color: "#0077b5",
		link: "https://linkedin.com/in/leontan4",
	},
	{
		id: 2,
		social: "github",
		icon: "fab fa-github",
		color: "#333",
		link: "https://github.com/leontan4",
	},
	{
		id: 3,
		social: "email",
		icon: "far fa-envelope",
		color: "rgb(26, 163, 152)",
		link: "mailto:leon.tan004@gmail.com",
	},
	{
		id: 4,
		social: "resume",
		icon: "far fa-file",
		color: "#565f69",
		link: "/Leon Tan (Resume).pdf",
	},
];
