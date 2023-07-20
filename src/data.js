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
		company: "unfi",
		title: "data engineer",
		dateStart: [{ month: "october", year: "2021" }],
		dateEnd: [{ month: "present", year: "" }],
		city: "minneapolis",
		state: "mn",
		duties: [
			"Automated reporting processes and enhanced ETL efficiency through Python, SQL, and AWS.",
			"Conducted bug fixes using dBeaver, CloudFormation, and Step Functions.",
			"Collaborated with team members to migrate on‑premises data into AWS cloud environment.",
			"Developed and maintained enterprise data platform infrastructure for data‑driven decision‑making.",
			"Designed and implemented high‑performance data pipelines, improving integration efficiency by 90%.",
			"Ensured data pipeline architecture was robust and accessible to analytic and forecasting teams.",
			"Optimized cross‑functional data extraction, improving accessibility for business stakeholders.",
		],
	},
	{
		id: 2,
		company: "thomson reuters",
		title: "data engineer/data analyst (contract)",
		dateStart: [{ month: "july", year: "2019" }],
		dateEnd: [{ month: "may", year: "2020" }],
		city: "minneapolis",
		state: "mn",
		duties: [
			"Designed and debugged automation, achieving 90% improvement in analysis runtime and pricing accuracy.",
			"Implemented dynamic data scraping techniques through scripting, leading to enhanced quarterly sales reports.",
			"Worked closely with internal stakeholders to create efficient data dashboards using Python and Tableau.",
		],
	},
	{
		id: 3,
		company: "3m",
		title: "financial analyst (contract)",
		dateStart: [{ month: "july", year: "2018" }],
		dateEnd: [{ month: "july", year: "2019" }],
		city: "minneapolis",
		state: "mn",
		duties: [
			"Automated report generation from SQL databases, reducing financial analysis runtime.",
			"Analyzed and reported on contract pricing across various business groups using VBA scripting.",
			"Constructed statistic reports of orders to ease labeling usage of product development.",
			"Utilized cost estimation systems and Agile framework for project and account maintenance.",
		],
	},
	{
		id: 4,
		company: "s&f corporation",
		title: "product analyst",
		dateStart: [{ month: "february", year: "2017" }],
		dateEnd: [{ month: "september", year: "2017" }],
		city: "minneapolis",
		state: "mn",
		duties: [
			"Conducted thorough research on product technical specifications and effectively facilitated communication between different departments.",
			"Generated statistical reports for product orders, optimizing product development labeling processes.",
			"Utilized in‑house software to efficiently process product specifications, enhancing product analysis production.",
		],
	},
	{
		id: 5,
		company: "the omerta group",
		title: "junior analyst (internship)",
		dateStart: [{ month: "june", year: "2016" }],
		dateEnd: [{ month: "august", year: "2016" }],
		city: "new york city",
		state: "mn",
		duties: [
			"Analyzing large datasets to extract meaningful insights and trends, supporting leadership in data‑driven decisions.",
			"Conducted market research on industry trends, competitors, and opportunities to provide valuable inputs for strategic decision‑making.",
			"Produce presentable and multiple visually appealing network diagrams for conveying insights to stakeholders.",
		],
	},
	{
		id: 6,
		company: "university of minnesota",
		title: "data analyst (internship)",
		dateStart: [{ month: "june", year: "2015" }],
		dateEnd: [{ month: "august", year: "2015" }],
		city: "minneapolis",
		state: "mn",
		duties: [
			"Delivered several university‑wide presentations to campus staff and advisers.",
			"Determined volunteering and internship were major influences for student to thrive involvement on campus.",
			"Developed research questions and analysed data for descriptive statistics in Excel based on top possible factors."
		],
	}
];

// Projects Section
export const projects = [
	{
		id: 1,
		title: "sofit",
		languages: [
			"winner",
			"hackathon",
			"wireframe.cc",
			"adobeXD",
			"figma",
			"pitch.com",
			"frontend",
			"backend"
		],
		img: "./images/sofit.png",
		desc1:
			"My first hackathon project with 4 other team members! Sofit allows companies to create engaging short form video content to showcase opportunities within their companies to rising talent. Students using the platform can develop their own professional profile by including a video resume and uploading their personal profile.",
		desc2:
			"Through this app, we can match students and companies with roles and talents that best fit their interests. In addition, our platform helps students find valuable mentorship opportunities and allow companies to effectively empower and help students in their career development.",
		url: "https://devpost.com/software/sofit",
		code: "https://app.pitch.com/app/public/player/788ca7b2-d9b4-4a89-9caa-355994fd77fd/75e1355e-430f-43b2-993c-9226a357ee41",
	},
	{
		id: 2,
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
		id: 3,
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
		id: 4,
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
		id: 5,
		title: "airbnb housing market",
		languages: [
			"r programming",
			"data analysis",
			"data mining",
			"data cleaning",
			"tableau",
			"statistics",
			"geomapping",
			"airbnb",
		],
		img: "./images/airbnb.png",
		desc1:
			"My team and I wanted to create a trend-explorations tool in helping people who are looking forward to start up Airbnb business.",
		desc2:
			"First off, data are extracted from Airbnb platform. Also, all datasets are raw and needs to be cleaned for in-depth revenue analysis with the assumptions that audiences already own a property or looking to own one. From then on, 7 cities were handpicked and categories based on regions, West Coast (Seattle, San Francisco, Los Angeles), Midwest (Minneapolis, Chicago), East Coast (New York, Rhode Island)",
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
