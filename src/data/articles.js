import React from "react";

function article_1() {
	return {
		date: "2025",
		title: "Open Source with Ruby for Good - Dedicated To Making The World Gooder",
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
				<div>
					<h1>Welcome to My Open-Source Journey</h1>
					<p> This blog is where I share updates on my latest open-source contributions and activities. I’m a proud contributor to Ruby for Good, an organization that collaborates with nonprofits to create open-source technology solutions that are mission-critical.
						While I’m just one part of this amazing community, I’m excited to play a role in building impactful tools. So far my biggest takeaways from contributing to open-source as a junior is the importance of asking questions, clear communication in PRs, and following a repo’s code guidelines. 
						It is exciting to get exposure exploring large pre-existing codebases while helping non-profit organizations and users!  Below, you’ll find some of the projects I’m actively involved in. Check back for updates as I continue to contribute!
					</p></div>
				<div className="article-content">
					<h2>Homeward Tails</h2>
					<div className="paragraph">
					<p>
					Homeward Tails is derived from the Baja Pet Rescue Dog Adoption Application created by kasugaijin(GitHub) who wanted to give back to the grassroots organization that he adopted his dog in Mexico from, by building a web application.
					Pet Rescue is an application that makes it easy to connect shelters with people who are looking to adopt or foster pets.
					</p>
			<ul>
				<li><strong><a href="https://homewardtails.org/">Check out the app here!</a></strong></li>
			</ul>
					<h2>List of Pull Request/Contributions:</h2>
					<ul>
					<li><strong><a href="https://github.com/rubyforgood/pet-rescue/pull/788">User Authentication</a></strong>: This PR involved adding user authentication to the Application Controller, so that we could rely on inheritance, rather than calling it separately in every controller. It was challenging to track where existing tests needed updating throughout the application. It also required diving headfirst into Devise so the application could properly redirect unauthenticated users!</li>
					<li><strong><a href="https://github.com/rubyforgood/pet-rescue/pull/856">Creating a new model</a></strong>:  This PR involved creating the FormSubmission model and handling everything that came with it. I wrote the migrations, updated the database seeds, and modified FactoryBot to include the new model. I also updated all relevant associations in existing models like AdopterApplication. The seed file was adjusted to include the new data, and I created the necessary factories. Along the way, I updated the test suite to reflect these changes, resolving any test failures that popped up. </li>
					<li><strong><a href="https://github.com/rubyforgood/pet-rescue/pull/873">Updating an existing model</a></strong>: This PR involved updating the Submitted Answer model. This included renamings the model within the database. I wrote the migrations, updated the existing and new references , and modified existing tests. I also updated all relevant associations in existing models. </li>
					<li><strong><a href="https://github.com/rubyforgood/homeward-tails/pull/1388">Duplicating copy right year</a></strong>: This PR involved a bug fix. The copyright year for the application would duplicate when navigating back from certain pages. Initially, I thought it could have been  a Turbo issue, but it was the script for generating the data(Javascript) causing the issue. A simple `Time.now.year` fixed the bug. Thanks Ruby!  </li>
					<li><strong><a href="https://github.com/rubyforgood/homeward-tails/pull/1329">Devise and case statements</a></strong>: This PR involved working with Devise and case statements! It utilized Devise's after_update_path_for method to handle user redirection after updating their registration. Using a case statement made the conditional simple and readable. It was also the first time I wrote a controller test for a feature that was in production! </li>
					<li><strong><a href="https://github.com/rubyforgood/homeward-tails/pull/1407">Relocating buttons and partials</a></strong>: This PR involved relocating the button for signing in with Google OAuth! Some users rather have the option prior to filling out the sign in form rather than afterwards at the bottom of the page. It implements DRY principles by making a partial to render the Google OAuth button instead of having repetitive code. Using a partial is a great why to add reusability, and keeps views looking clean and readable </li>
					</ul>
					</div>
					<img
						src="/petrescue.png"
						alt="homewardtails"
						className="homewardtails"
						style={{ width: "100%" }}
					/>
				</div>

				<div className="article-content">
					<h2>Human Essentials</h2>
					<div className="paragraph">
						<p>	Human Essentials is an inventory management system built to address the needs of Diaper Banks as directly and explicitly as possible and adapted to meet the needs of other Essentials Banks.
								Essentials Banks maintain inventory, receive donations and other human essentials supplies (e.g. diapers, period supplies), and issue distributions to community partner organizations. Like any non-profit, they also need to perform reports on this data and have day-to-day operational information they need.
								This application aims to serve those needs and facilitate the general operations of the Diaper Banks (e.g., using barcode readers, scale weighing, inventory audits)
						</p>
						<ul>
						<li><strong><a href="https://humanessentials.app/">Check out the app here!</a></strong></li>
					</ul>
					<h2>List of Pull Request/Contributions:</h2>
					<ul>
					<li><strong><a href="https://github.com/rubyforgood/human-essentials/pull/4374">Error Handling</a></strong>: This PR involved improving the error handling within the create method, for a model in the application's database. It was a great learning experience to dive into a new codebase, refresh on CRUD basics, and communicate with other devs through a PR review. </li>
					<li><strong><a href="https://github.com/rubyforgood/human-essentials/pull/4427">Adding Formatting Validation</a></strong>: This PR involved adding validation for a URL/website attribute in one of the models, along with strict formatting. This allowed admins using the app to save time by not having to correct any incorrect url formatting.					</li>
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
					<h2>SKillrx</h2>
					<div className="paragraph">
					<p>
					SkillRX is a Ruby on Rails content management application which will allow medical training providers to upload and manage content,
					which will be delivered to Raspberry Pi and other computers in low-resource areas for use by medical professionals at these locations.
					</p>
			<ul>
				<li><strong><a href="https://skilled-695d172083af.herokuapp.com/">Check out the app here!</a></strong></li>
			</ul>
					<h2>List of Pull Request/Contributions:</h2>
					<ul>
					<li><strong><a href="https://github.com/rubyforgood/skillrx/pull/123"> Parallel form labels and internationalization (I18n)</a></strong>: This PR implemented the start of I18n and the locales file on a new project! Pretty cool. Using the locales to configure uniform and dynamic button naming across the application. Which establishes easier maintainability, cleaner views, and implements DRY principles</li>
					</ul>
					</div>
					<img
						src="/skillrx.png"
						alt="skillrx"
						className="skillrx"
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
