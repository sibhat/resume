import React, { Component } from "react";
import Experience from "../presentational/Experience";
import firebase from "../../../firebaseConfig";
class ExperienceContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { experience: [] };
	}
	componentDidMount() {
		let experience = [];
		var experiences = firebase.database().ref("experience");
		experiences.on("value", snapshot => {
			snapshot.forEach(item => {
				experience.push(item.val());
			});
			this.setState({ experience });
		});
	}
	render() {
		return <Experience experiences={this.state.experience} />;
	}
}

export default ExperienceContainer;
