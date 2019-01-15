import React, { Component } from "react";
import Nav from "./features/nav/container/Nav";
import HeaderContainer from "./features/header/container/HeaderContainer";
import "./sass/main.scss";
import ExperienceContainer from "./features/experience/container/Experience";
import ProjectContainer from "./features/projects/container/ProjectsContainer";
import Skills from "./features/skills/container/Skills";
import ContactUs from "./features/contact/container/ContactUs";
// import firebase from "./firebaseConfig";

class App extends Component {
	render() {
		return (
			<div className="icontainer">
				<Nav />
				<main className="main">
					<HeaderContainer />
					<ExperienceContainer />
					<ProjectContainer />
					<Skills />
					<ContactUs />
				</main>
			</div>
		);
	}
}

export default App;
