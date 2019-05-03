import React, { Component } from "react";
import EducationPresentational from "../presentational/EducationPresentational";
import firebase from "../../../firebaseConfig";

class Experience extends Component {
	constructor(props) {
		super(props);
		this.state = { education: [] };
	}
	componentDidMount() {
		let education = [];
		let educations = firebase.database().ref("education");
		educations.on("value", snapshot => {
			snapshot.forEach(item => {
				education.push(item.val());
			});
			this.setState({ education });
		});
	}
	render() {
		return <EducationPresentational education={this.state.education} />;
	}
}

export default Experience;
