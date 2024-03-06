import React from "react";

function article_1() {
	return {
		date: "8 Jan 2024",
		title: "GT's Fortnite Tracker",
		description:
			"GT's Fortnite Tracker App is a user-friendly tool designed for Fortnite gamers." +
			"Built with a Ruby on Rails backend and a React frontend, this application is deployed on Heroku for accessibility." +
			"Currently, users can browse the latest skins and emotes available in the Fortnite item shop, ensuring they never miss out on the new items. ",
		keywords: [
			"The Benefits of Cloud Computing",
			"Gabe",
			"Gabriel Torres",
			"Gabriel T",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						This application is a side project that is still under development. Just for fun.. I dont even play the game. I swear.
					<h2>Key Features:</h2>
					<ul>
						<li><strong>Real-Time Updates: Stay up-to-date with the latest additions to the Fortnite item shop, including skins and emotes. </strong></li>
						<li><strong>UI: A clean design makes navigating through the app easy. </strong></li>
						<li><strong>Responsive Design: Enjoy a friendly experience across devices and screen sizes. </strong></li>
					</ul>

					<h2>Upcoming Enhancements: </h2>
					<ul>
						<li><strong>Caching Mechanism: Implement 24-hour caching for item shop items to optimize performance and reduce API calls.  </strong></li>
						<li><strong>Content: Implement Fortnite's music tracks and special items to the app, providing a wider array of content.  </strong></li>
						<li><strong>Player Stats Lookup: Enable users to search and view player statistics by ID, offering insights into their friends. </strong></li>
						<li><strong>Tips Section: Share valuable tips and strategies to help users improve their Fortnite gameplay straight from Fortnite's api. </strong></li>
						<li><strong><a href="https://gts-fortnite-tracker-a0d0405c9f2a.herokuapp.com/">Check out the app here!</a></strong></li>
					</ul>
					</div>
					<img
						src="/GTS-Fortnite-Tracker.png"
						alt="fortnite-tracker"
						className="fortnite-tracker"
					/>

					i lied. i play the game. a lot.
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "14 Dec 2023",
		title: "Campaign Planner Pro",
		description:
		"Campaign Planner Pro is a tool designed for Dungeons and Dragons (D&D) lovers." +
		"Developed as a standalone Ruby on Rails application, it leverages the power of Rails 7 to provide an rememberable experience for players." +
		"This application serves as a digital playbook, enabling users to organize and track every aspect of their D&D campaigns",
		style: `
		.article-content {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.randImage {
			align-self: center;
			outline: 2px solid red;
		}
		`,
		keywords: [
			"DnD",
			"Gabe Torres",
			"Gabriel Torres",
			"Gabe T",
		],
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						This application is a side project that is still under development that I am working on with some family members. A little family bonding time.
					<h2>Key Features:</h2>
					<ul>
						<li><strong>Campaign Management: Easily manage your campaign details, ensuring a easy going gameplay experience. </strong></li>
						<li><strong>NPCs: Maintain a list of Non-Playable Characters (NPCs) to enhance your storytelling </strong></li>
					</ul>

					<h2>Upcoming Enhancements: </h2>
					<ul>
						<li><strong>API Integration: Incorporate D&D APIs to provide users with resources and rules.  </strong></li>
						<li><strong>Character Tracking: Keep detailed records of your playable characters, including their stats, equipment, and settings </strong></li>
						<li><strong><a href="https://github.com/Campaign-Planner-Pro/Campaign-Planner-Pro">Check out the GitHub repo here while we build the app from the ground up</a></strong></li>
					</ul>
					</div>
					<img
						src="/Campaign.png"
						alt="campaign-planner"
						className="campaign-planner"
					/>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
