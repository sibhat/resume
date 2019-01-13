import React, { Component } from "react";
class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<section class="section-d" id="skills">
				<div class="section__header">
					<h1 class="heading__primary">Skills</h1>
				</div>
				<div class="content">
					<div class="skill">
						<div class="skill__header">
							<h2 class="heading__secondary teal-text">
								Front-End
							</h2>
						</div>
						<div class="skill__body">
							<div class="skill__item">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
									alt="HTML5 logo"
									class="skill__logo"
								/>
								<h3 class="skill__name">SASS</h3>
							</div>
							<div class="skill__item">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Boostrap_logo.svg"
									alt="HTML5 logo"
									class="skill__logo"
								/>
								<h3 class="skill__name">BOOTSTRAP</h3>
							</div>
							<div class="skill__item">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
									alt="HTML5 logo"
									class="skill__logo"
								/>
								<h3 class="skill__name">React</h3>
							</div>
							<div class="skill__item">
								<img
									src="img/redux.svg"
									alt="Redux logo"
									class="skill__logo"
								/>
								<h3 class="skill__name">Redux</h3>
							</div>
							<div class="skill__item">
								<img
									src="img/jquery.svg"
									alt="HTML5 logo"
									class="skill__logo"
									width="100px"
								/>
								<h3 class="skill__name">jQuery</h3>
							</div>
						</div>
					</div>
					<div class="skill">
						<div class="skill__header">
							<h2 class="heading__secondary teal-text">
								Back-End
							</h2>
						</div>
						<div class="skill__body">
							<div class="skill__item">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
									alt="HTML5 logo"
									class="skill__logo"
								/>
								<h3 class="skill__name">PostgreSQL</h3>
							</div>
							<div class="skill__item">
								<img
									src="img/mongodb.svg"
									alt="HTML5 logo"
									class="skill__logo"
									width="100px"
								/>
								<h3 class="skill__name">MongoDB</h3>
							</div>
							<div class="skill__item">
								<img
									src="img/python.svg"
									alt="HTML5 logo"
									class="skill__logo"
									width="100px"
								/>
								<h3 class="skill__name">Python</h3>
							</div>
							<div class="skill__item">
								<img
									src="img/flask.svg"
									alt="Flask logo"
									class="skill__logo"
								/>
								<h3 class="skill__name">Flask</h3>
							</div>
							<div class="skill__item">
								<img
									src="img/django.svg"
									alt="djanog logo"
									class="skill__logo"
								/>
								<h3 class="skill__name">Django</h3>
							</div>
							<div class="skill__item">
								<img
									src="img/nodejs.svg"
									alt="HTML5 logo"
									class="skill__logo"
									width="100px"
								/>
								<h3 class="skill__name">Node</h3>
							</div>
						</div>
					</div>
					<div class="skill">
						<div class="skill__header">
							<h2 class="heading__secondary teal-text">other</h2>
						</div>
						<div class="skill__body">
							<div class="skill__item">
								<img
									src="img/photoshop-cc.svg"
									alt="HTML5 logo"
									class="skill__logo"
								/>
								<h3 class="skill__name">Photoshop</h3>
							</div>
							<div class="skill__item">
								<img
									src="img/heroku.svg"
									alt="HTML5 logo"
									class="skill__logo"
								/>
								<h3 class="skill__name">Heroku</h3>
							</div>
							<div class="skill__item">
								<img
									src="img/github.svg"
									alt="HTML5 logo"
									class="skill__logo"
								/>
								<h3 class="skill__name">Github</h3>
							</div>
							<div class="skill__item">
								<img
									src="img/premier.svg"
									alt="HTML5 logo"
									class="skill__logo"
								/>
								<h3 class="skill__name">Premier Pro</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Skills;
