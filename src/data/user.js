const INFO = {
	main: {
		title: "Gabes Portfolio",
		name: "Gabriel Torres.",
		email: "thomastgtorres21@gmail.com",
		logo: "../logo.jpg",
	},

	socials: {
		twitter: "https://twitter.com/gt_codez/",
		github: "https://github.com/Gabe-Torres",
		linkedin: "https://www.linkedin.com/in/gabrieltt/",
	},

	homepage: {
		title: "Software Engineer",
		description:
			"I'm a Software Engineer with a solid foundation in social science and a background in customer service. My skill set revolves around collaboration, strategic thinking, and software development. I'm motivated to apply my problem-solving skills and tech passion to projects that make a meaningful impact.",
	},

	about: {
		title: "I'm Gabe, and you've landed on my little corner of the internet.",
		description:
			"With a strong foundation in software development, I have the technical know-how to tackle a wide range of tech challenges head-on. I believe in the power of teamwork and perform best when working in collaborative environments- in my experience, the best results come when working alongside others. Previous experience in customer service taught me that nothing is more important than keeping your users happy and communication clear. But ultimately, I aspire to contribute my skills to projects that make a positive social impact. Whether it's working with non-profit organizations or engaging in projects that help others in meaningful ways, I am driven by the opportunity to make a difference.",
	},

	articles: {
		title: "My Thoughts and Updates",
		description:
			"This is where I share insights and updates about what I’m working on. From coding projects to non-tech hobbies. It’s a space to give you a glimpse into who I am, both as a person and as an engineer.",
	},

	projects: [
		{
			title: "Foodie Brain",
			description:
				"An application for marking and sharing favorite food spots and dishes on a map. Built with React and Ruby on Rails, it uses GraphQL and Apollo Service to connect two repositories, AWS S3 for image storage, and is deployed on Heroku.",
			logo: "../Foodie-Brain.jpg",
			TechStack: "Tech-Stack and Tools: Ruby on Rails, React, GraphQL, Apollo Service, Heroku, CircleCI, Git, GitHub, Postman, PostgreSQL, AWS",
			images: ["../foodie_home.png", "../foodie1.png", "../foodie2.png", "../foodie3.png"],
			githubRepo: "https://github.com/Foodie-Brain/be_foodie",
		},

		{
			title: "GTS Fortnite Tracker",
			description:
			"This web application enables users to check the latest skins and emotes available in the Fortnite item shop. Additionally, users can quickly search and view player stats. The application is designed as a microservice architecture, featuring a custom Ruby on Rails backend API and a React frontend. Key features include pagination for browsing items, Redis for caching, and background workers to manage daily updates and ensure the latest information is readily available.",
			logo: "../gtsfortnitetrackerlogo.png",
			TechStack: "Tech-Stack and Tools: React, Rails, Bulma, Git, Heroku, PostgreSQL, APIs, Redis",
			linkText: "View Project",
			link: "https://gts-fortnite-tracker-a0d0405c9f2a.herokuapp.com/",
			githubRepo: "https://github.com/orgs/gts-fortnite-app/repositories",
			images: ['../gt1.png', '../gt2.png', '../gt3.png', '../gt4.png'],
		},

		{
			title: "Spellbinder",
			description:
				"A project for Magic: The Gathering fans thats allows users to create custom decks with images and data from the Magic API for card details. Featuring dynamic API integration, custom search endpoints, and a responsive frontend designed with Bootstrap. It includes secure user authentication via Google OAuth, a well-structured database, extensive CRUD operations, RESTful API, and ActiveRecord SQL queries for efficient data fetching.",
			logo: "../Spell-binder.jpg",
			TechStack: "Tech-Stack and Tools: ActiveRecord, Bootstrap, CircleCI, Git, Heroku, PostgreSQL, Postman, Rails, Ruby, User Authentication",
			linkText: "View Project",
			link: "https://spellbinder-fe-e9f0df58efcb.herokuapp.com/",
			githubRepo: "https://github.com/orgs/Spell-Binder-V1/repositories",
			images: ['../spellbinder1.png', '../spellbinder2.png', '../spellbinder3.png', '../spellbinder4.png'],
		},
		
		{
			title: "Watsup",
			description:
			"A platform for sharing thoughts, built with Ruby on Rails. Features include user authentication with Devise, image upload via AWS S3, responsive design using Bootstrap and Tailwind CSS, CRUD operations for articles, comments, and tags, unit and integration tests with Rails RSpec, continuous integration with CircleCI, and deployment on Heroku.",
			logo: "../watsup.png",
			TechStack: "Tech-Stack and Tools: Bootstrap, CircleCI, Git, Heroku, PostgreSQL, Rails, Ruby, AWS S3, devise, Turbo 8, TurboFrame, Hotwire, Stimulus, Tailwind CSS",
			linkText: "View Project",
			link: "https://thawing-citadel-30877-e399d2943313.herokuapp.com/",
			githubRepo: "https://github.com/Gabe-Torres/blogger",
			images: ['../watsup2.png', '../watsup3.png', '../watsup4.png', '../watsup5.png'],
		},
		
		{
			title: "Sweater Weather",
			description:
			"This service aggregates data from external sources, requires user authentication, offers CRUD operations, error handling, and undergoes extensive testing, including mocking external APIs with VCR and utilizing Postman-friendly test automation.",
			TechStack: "Tech-Stack and Tools: Ruby on Rails, Heroku, CircleCI, Git, GitHub, Postman, PostgreSQL ",
			logo: "../sweater-weather.jpg",
			githubRepo: "https://github.com/Gabe-Torres/sweater-weather",
			images: ["../sweaterweather1.png", "../sweaterweather2.png", "../sweaterweather3.png", "../sweaterweather4.png"],
		},
		
		{
			title: "Homeward Tails",
			description:
			"I am only a volunteer contributor on this impactful open source application. Homeward Tails is free-to-use application built for pet rescue organizations that enables you to manage pets, people, adoptions, and fosters with ease. Read about my part more in my open source blog!",
			TechStack: "Tech-Stack and Tools: Ruby on Rails, Minitest, Git, GitHub, PostgreSQL, Heroku ",
			linkText: "View Project",
			link: "https://homewardtails.org/",
			logo: "../homewardtailslogo.png",
			githubRepo: "https://github.com/rubyforgood/homeward-tails",
			images: ["../homewardtails1.png", "../homewardtails2.png", "../homewardtails3.png", "../homewardtails4.png", "../homewardtails5.png"],
		},
	],
};

export default INFO;
