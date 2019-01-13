import React, { Component } from "react";
class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<section class="section-c" id="projects">
				<div class="section__header">
					<h1 class="heading__primary">projects</h1>
				</div>
				<div class="projects">
					<div class="card">
						<div class="card__photo">
							<img src="img/seekgeek.png" alt="seekgeek photo" />
						</div>
						<div class="card__body">
							<div class="card__body--header">
								<p>
									<a
										href="https://www.seekgeek.app"
										target="_blank"
										class="link"
									>
										Seekgeek
									</a>
								</p>
							</div>
							<div class="card__body--info">
								<p class="paragaph">
									Tinder like app for jobs that provide an
									engaging way to help employers find their
									canidates.
									{/* 
											This could be engineers,
											developers, designers, and executives. I
											worked on setting up redux archtechture,
											and JS animation for better user
											experience.
												This project was built using
												React, Redux for front-end, stripe for
												billing, mailgun for emailing canidates
												and Django for the back end services.
										*/}
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Projects;
