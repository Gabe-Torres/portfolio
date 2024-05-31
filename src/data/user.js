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
		title: "Backend Software Engineer",
		description:
			"I'm a Backend Software Engineer with a solid foundation in social science and a background in customer service. My skill set revolves around collaboration, strategic thinking, and software development. I'm motivated to apply my problem-solving skills and tech passion to projects that make a meaningful impact.",
	},

	about: {
		title: "I'm Gabe, and you've landed on my little corner of the internet.",
		description:
			"With a strong foundation in software development, I have the technical know-how to tackle a wide range of tech challenges head-on. I believe in the power of teamwork and perform best when working in collaborative environments- in my experience, the best results come when working alongside others. Previous experience in customer service taught me that nothing is more important than keeping your users happy and communication clear. But ultimately, I aspire to contribute my skills to projects that make a positive social impact. Whether it's working with non-profit organizations or engaging in projects that help others in meaningful ways, I am driven by the opportunity to make a difference.",
	},

	articles: {
		title: "Here are some applications that I'm currently working on.",
		description:
			"I'm always looking for new projects to work on, so if you have an idea, feel free to reach out to me!",
	},

	projects: [
		{
			title: "Foodie Brain",
			description:
				"An application that allows users to mark and share their favorite food spots and dishes on a map. Establishes a connection between two repos using GraphQL and Apollo Service.",
			logo: "../Foodie-Brain.jpg",
			TechStack: "Tech-Stack and Tools: Ruby on Rails, React, GraphQL, Apollo Service, Heroku, CircleCI, Git, GitHub, Postman, PostgreSQL, AWS",
			linkText: "View Project",
			link: "https://foodie-brain-4c71bb461e4b.herokuapp.com/",
			images: ["../foodie_home.png", "../foodie1.png", "../foodie2.png", "../foodie3.png"],
			githubRepo: "https://github.com/Foodie-Brain/be_foodie",
		},

		{
			title: "Spellbinder",
			description:
				"The Spellbinder project is a web development initiative for Magic: The Gathering, featuring dynamic API integration, custom search endpoints, and a responsive frontend designed with Bootstrap. It includes secure user authentication via Google OAuth and a well-structured database for optimal data management.",
			logo: "../Spell-binder.jpg",
			TechStack: "Tech-Stack and Tools: ActiveRecord, Bootstrap, CircleCI, Git, Heroku, PostgreSQL, Postman, Rails, Ruby, User Authentication",
			linkText: "View Project",
			link: "https://spellbinderfe-80bc5c8a58ba.herokuapp.com/",
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
	],
};

export default INFO;
