import React, { Component } from "react";
import Project from "../presentational/Project";
import firebase from "../../../firebaseConfig";

class ProjectContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { projects: [], projectPhoto: "" };
	}
	componentDidMount() {
		let projects = [];
		let result = firebase.database().ref("/project");
		result.on("value", snapshot => {
			snapshot.forEach(project => {
				projects.push(project.val());
			});
			this.setState({ projects });
		});
	}
	render() {
		// console.log("projects ", this.state.projects);

		return (
			<Project
				projects={this.state.projects}
			/>
		);
	}
}

export default ProjectContainer;
