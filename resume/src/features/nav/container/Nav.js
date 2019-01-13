import React, { Component } from "react";
class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				<nav class="inav">
					<div class="inav__name">
						<h2 class="heading__secondary teal-text">
							Sibhat Temelso
						</h2>
						<h4 class="heading__teritary brown-text">
							Full Stack Developer
						</h4>
					</div>
					<div class="inav__item">
						<li class="inav__list">
							<i class="fas fa-user" />
							<a href="#about" class="waves-effect">
								About
							</a>
						</li>
						<li class="inav__list">
							<i class="fas fa-laptop" />
							<a href="#experience">Experience</a>
						</li>
						<li class="inav__list">
							<i class="fa fa-code" />
							<a href="#projects">Projects</a>
						</li>
						<li class="inav__list">
							<i class="fa fa-chess-knight" />
							<a href="#skills">Skills</a>
						</li>
						<li class="inav__list">
							<i class="fas fa-paper-plane" />
							<a href="#contact">Contact</a>
						</li>
						<li class="inav__list">
							<i class="fas fa-file-code" />
							<a href="#resume">Resume</a>
						</li>
					</div>
				</nav>
				<nav class="nav__humberger">
					<span class="nav__humberger__line" />
				</nav>
			</React.Fragment>
		);
	}
}

export default Nav;
