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
		title: "analyst",
		city: "eagan",
		state: "mn",
		duties: [
			"Created and debugged an automation program that enhanced analysis run‑time and pricing errors by 90%.",
			"Compiled complex data reports and delivered benchmarking/forecasting analysis for senior management.",
			"Improved quarterly sales report for database automation team by dynamically scraping clients’ data with scripting.",
			"Integrated financial algorithm and tracked monthly reports based on client’s financial needs.",
		],
	},
	{
		id: 2,
		company: "3m",
		title: "analyst",
		dateStart: [{ month: "july", year: "2018" }],
		dateEnd: [{ month: "july", year: "2019" }],
		city: "maplewood",
		state: "mn",
		duties: [
			"Automated report findings from SQL database and reduced financial analysis run‑time",
			"Deviated contract pricing and analyze reports across various business group through automated scripting.",
			"Utilized cost estimation systems to revise project and account maintenance.",
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
		languages: [
			"html & css",
			"bootstrap",
			"javascript",
			"node.js",
			"express",
			"ejs",
			"git",
			"Covid API",
			"chart.js",
			"backend",
			"frontend",
		],
		img: "./images/covid-news.jpg",
		desc1:
			"This is one of my first major projects when I started learning web development and the reason for this project is because I want to try improving on my fundamental skills before moving on to React.",
		desc2:
			"Daily Covid-19 data was pulled from Open Disease Data and integrated to graph plus table for better interpretation. Node.js runs the back end by fetching JSON information, while EJS and Chart.js focuses on the front-end for building graphs. ",
		url: "https://coronavirus-tracer.herokuapp.com/",
		code: "https://github.com/leontan4/covid-dashboard",
	},
	{
		id: 2,
		title: "github profile finder",
		languages: [
			"html & css",
			"javascript",
			"bootstrap",
			"react",
			"git",
			"auth0",
			"github api",
			"fusion chart",
			"backend",
			"frontend",
		],
		img: "./images/github-finder.jpg",
		desc1:
			"This is my first major React project after learning React for a few weeks and I got the inspiration from web developers online as this project is quite simple and straightforward.",
		desc2:
			"On this project, I learned many new tools such as authentication method (Auth0), animation framework (fusion charts) to plot various statistics of github users. Also, it is easier to comprehand right away what languages the users used most.",
		url: "https://github-statistics.netlify.app/",
		code: "https://github.com/leontan4/github-finder",
	},

	{
		id: 3,
		title: "portfolio",
		languages: [
			"html & css",
			"bootstrap",
			"javascript",
			"react",
			"react router",
			"react scroll",
			"framer motion",
			"git",
			"frontend",
		],
		img: "./images/portfolio.png",
		desc1:
			"Since I have sufficient projects to display, this portfolio was built to showcase what I've learned so far. Besides, I am currently looking for a job as well.",
		desc2:
			"Besides the usual React fundamentals, I learned and implemented a few frameworks such as React Router, React Scroll and Framer Motion for better animation effect while browsing through my profile. This project was challenging because I intended to make it 'perfect' and created as much UX/UI for readers.",
		url: "https://leontan.netlify.app/",
		code: "https://github.com/leontan4/portfolio",
	},
	{
		id: 4,
		title: "Airbnb 101",
		languages: [
			"data analysis",
			"data mining",
			"data cleaning",
			"r",
			"tableau",
			"statistics",
			"geomapping",
			"kaggle",
			"",
		],
		img: "./images/airbnb.png",
		desc1:
			"Since I have sufficient projects to display, this portfolio was built to showcase what I've learned so far. Besides, I am currently looking for a job as well.",
		desc2:
			"Besides the usual React fundamentals, I learned and implemented a few frameworks such as React Router, React Scroll and Framer Motion for better animation effect while browsing through my profile. This project was challenging because I intended to make it 'perfect' and created as much UX/UI for readers.",
		url: "https://public.tableau.com/app/profile/leon.tan/viz/AirbnbPresentation_16040943767570/AirbnbBusiness",
		code: "https://github.com/leontan4/airbnb101/tree/master",
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
		link: "https://github.com/leontan4?tab=repositories",
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
