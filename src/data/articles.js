import React from "react";

function article_1() {
	return {
		date: "2025",
		title: "Ruby for Good - Dedicated To Making The World Gooder",
		description:
			"Ruby for Good is a volunteer-driven nonprofit that develops specialized technology" +
			"an software solutions for nonprofit organizations to bolster their critical mission.",
		keywords: [
			"Ruby for Good",
			"Gabe",
			"Gabriel Torres",
			"Gabriel T",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-bottom: 60px;
					border-bottom: 2px dashed #aaa;
  				padding-bottom: 50px;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}

				.article-content:last-child {
					margin-bottom: 0px;
				}
				`,
		body: (
			<React.Fragment>
				<div><p>I am only a contributor to this organization, but I am proud to be a part of it. Ruby for Good organization, is a group of Ruby developers who come together to build open source technology solutions for non-profits. Below are some of the projects I am active in.</p></div>
				<div className="article-content">
					<h1>Human Essentials</h1>
					<div className="paragraph">
						<p>	Human Essentials is an inventory management system built to address the needs of Diaper Banks as directly and explicitly as possible and adapted to meet the needs of other Essentials Banks.
						Essentials Banks maintain inventory, receive donations and other human essentials supplies (e.g. diapers, period supplies), and issue distributions to community partner organizations.
						Like any non-profit, they also need to perform reports on this data and have day-to-day operational information they need. This application aims to serve those needs and facilitate the general operations of the Diaper Banks (e.g., using barcode readers, scale weighing, inventory audits)</p>
						<ul>
						<li><strong><a href="https://humanessentials.app/">Check out the app here!</a></strong></li>
					</ul>
					<h2>List of Pull Request/Contributions:</h2>
					<ul>
					<li><strong><a href="https://github.com/rubyforgood/human-essentials/pull/4374">Error Handling</a></strong>: This PR involved improving the error handling within the CRUD method, create, for a model in the application's database. It was a great learning experience to dive into a new codebase and communicate with other devs.</li>
					<li><strong><a href="https://github.com/rubyforgood/human-essentials/pull/4427">Adding Formatting Validation</a></strong>: This PR involved adding validation for a URL/website attribute in one of the models, along with strict formatting. This allowed admins in the app to save time and not have to correct any incorrect url formatting. </li>
					</ul>
					</div>
					<img
						src="/human.png"
						alt="human-essentials"
						className="human-essentials"
						style={{ width: "100%" }}
					/>
				</div>


				<div className="article-content">
					<h1>Homeward Tails</h1>
					<div className="paragraph">
					<p>
						Homeward Tails is derived from the Baja Pet Rescue Dog Adoption Application created by kasugaijin(GitHub) who wanted to give back to the grassroots organization 
						from where he adopted his dog in Mexico by building them a web application. 
						Pet Rescue is an application that makes it easy to connect shelters with people who are looking to adopt or foster pets.
					</p>
			<ul>
				<li><strong><a href="https://pet-rescue-f6df7ce0e850.herokuapp.com/">Check out the app here!</a></strong></li>
			</ul>
					<h2>List of Pull Request/Contributions:</h2>
					<ul>
					<li><strong><a href="https://github.com/rubyforgood/pet-rescue/pull/788">User Authentication</a></strong>: This PR involved adding user authentication to the Application Controller rather than calling it separately in every controller. It was challenging to track where existing tests needed updating throughout the application. It also required diving headfirst into Devise so the application could properly redirect unauthenticated users!</li>
					<li><strong><a href="https://github.com/rubyforgood/pet-rescue/pull/856">Creating a new model</a></strong>: This PR involved creating the FormSubmission model and handling everything that came with it. I wrote the migrations, updated the database seeds, and modified FactoryBot to include the new model. I also updated all relevant associations in existing models like AdopterApplication. The seed file was adjusted to include the new data, and I created the necessary factories. Along the way, I updated the test suite to reflect these changes, resolving any seeding issues and test failures that popped up. </li>
					<li><strong><a href="https://github.com/rubyforgood/pet-rescue/pull/873">Updating an existing model</a></strong>: This PR involved updating the SumittedAnswer model. This included changing its name within the database. I wrote the migrations, updated the existing and new references , and modified existing tests. I also updated all relevant associations in existing models. </li>
					</ul>
					</div>
					<img
						src="/petrescue.png"
						alt="fortnite-tracker"
						className="fortnite-tracker"
						style={{ width: "100%" }}
					/>
				</div>
			</React.Fragment>
		),
	};
}

//function article_2() {
	//return {
		//date: "2024",
		//title: "Ruby for Good - Pet Rescue",
		//description:
		//"The Pet Rescue app is derived from the Baja Pet Rescue Dog Adoption Application created by kasugaijin(GitHub) " +
		//"who wanted to give back to the grassroots organization from where he adopted his dog in Mexico by building them" +
		//"a web application. Pet Rescue is an application that makes it easy to connect shelters with people who are looking" +
		//"to adopt or foster pets.",
		//keywords: [
		//	"The Benefits of Cloud Computing",
			//"Gabe",
			//"Gabriel Torres",
			//"Gabriel T",
		//],
		//style: `
			//	.article-content {
				//	display: flex;
				//	flex-direction: column;
				//	align-items: center;
				//}

				//.randImage {
				//	align-self: center;
				//	outline: 2px solid red;
				//}
				//`,
		//body: (
			//<React.Fragment>
				//<div className="article-content">
					//<div className="paragraph">
						//I am only a contributor to this project, but I am proud to be a part of it. This project is a part of the Ruby for Good organization, which is a group of Ruby developers who come together to build projects for non-profits.
					//<p>
					//	The Pet Rescue app is derived from the Baja Pet Rescue Dog Adoption Application created by kasugaijin(GitHub) who wanted to give back to the grassroots organization 
						//from where he adopted his dog in Mexico by building them a web application. 
					//	Pet Rescue is an application that makes it easy to connect shelters with people who are looking to adopt or foster pets.
				//	</p>
			//<ul>
			//	<li><strong><a href="https://pet-rescue-f6df7ce0e850.herokuapp.com/">Check out the app here!</a></strong></li>
			//</ul>
					//<h2>List of Pull Request/Contributions:</h2>
					//<ul>
					//<li><strong><a href="https://github.com/rubyforgood/pet-rescue/pull/788">User Authentication</a></strong>: This PR involved adding user authentication to the Application Controller rather than calling it separately in every controller. It was challenging to track where existing tests needed updating throughout the application. It also required diving headfirst into Devise so the application could properly redirect unauthenticated users!</li>
					//<li><strong><a href="https://github.com/rubyforgood/pet-rescue/pull/856">Creating a new model</a></strong>: This PR involved creating the FormSubmission model and handling everything that came with it. I wrote the migrations, updated the database seeds, and modified FactoryBot to include the new model. I also updated all relevant associations in existing models like AdopterApplication. The seed file was adjusted to include the new data, and I created the necessary factories. Along the way, I updated the test suite to reflect these changes, resolving any seeding issues and test failures that popped up. </li>
					//<li><strong><a href="https://github.com/rubyforgood/pet-rescue/pull/873">Updating an existing model</a></strong>: This PR involved updating the SumittedAnswer model. This included changing its name within the database. I wrote the migrations, updated the existing and new references , and modified existing tests. I also updated all relevant associations in existing models. </li>
					//</ul>
					//</div>
					//<img
						//src="/petrescue.png"
						//alt="fortnite-tracker"
						//className="fortnite-tracker"
						//style={{ width: "100%" }}
					///>
				//</div>
			//</React.Fragment>
		//),
	//};
//}

//function article_2() {
	//return {
		// date: "14 Dec 2023",
		// title: "Campaign Planner Pro",
		// description:
		// "Campaign Planner Pro is a Ruby on Rails monolith application designed as a digital playbook for Dungeons and Dragons players." +
		// "It enables users to easily organize and track their campaign settings, characters, and more, all in one place." +
		// "Leveraging the features of Rails 7, this tool provides an enjoyable and easy going experience, making game organization a breeze.",
		
		// style: `
		// .article-content {
		// 	display: flex;
		// 	flex-direction: column;
		// 	align-items: center;
		// }

		// .randImage {
		// 	align-self: center;
		// 	outline: 2px solid red;
		// }
		// `,
		// keywords: [
		// 	"DnD",
		// 	"Gabe Torres",
		// 	"Gabriel Torres",
		// 	"Gabe T",
		// ],
		// body: (
		// 	<React.Fragment>
		// 		<div className="article-content">
		// 			<div className="paragraph">
		// 				This application is a side project that is still under development that I am working on with some family members. A little family bonding time.
		// 			<h2>Key Features:</h2>
		// 			<ul>
			// 			<li><strong>This project implements Devise for user auth </strong></li>
			// 			<li><strong>Implements Turbo 8, TurboFrames, SLIM views(MVC), Hotwire, Stimulus, and Tailwind CSS to make user UI enjoyable. </strong></li>
			// 			<li><strong>Utilizes a PostgreSQL database for server-side data storage and data management while ActiveRecord acts as the ORM </strong></li>
			// 			<li><strong>Unit tests, integration tests using Rails RSpec to ensure application reliability.  </strong></li>
			// 			<li><strong>Campaign Management: Easily manage your campaign details, ensuring a easy going gameplay experience. </strong></li>
			// 		</ul>

			// 		<h2>Upcoming Enhancements: </h2>
			// 		<ul>
			// 			<li><strong>API Integration:</strong> Incorporate D&D APIs to provide users with access to resources and rules directly within the app.</li>
			// 			<li><strong>Character Tracking:</strong> Enable detailed tracking of playable characters, including their stats, equipment, and backstory.</li>
			// 			<li><strong>Collaborative Campaigns:</strong> Allow users to share their campaigns with other players for a more collaborative and interactive experience.</li>
			// 			<li><strong><a href="https://github.com/Campaign-Planner-Pro/Campaign-Planner-Pro">Check out the GitHub repo here while we build the app from the ground up</a></strong></li>
			// 		</ul>
			// 		</div>
			// 		<img
			// 			src="/Campaign.svg"
			// 			alt="campaign-planner"
			// 			className="campaign-planner"
			// 		/>
			// 	</div>
			// </React.Fragment>
// 		),
// 	};
// }

const myArticles = [article_1];

export default myArticles;
