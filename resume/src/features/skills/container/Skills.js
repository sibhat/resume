import React, { Component } from "react";
import SkillPresentational from "../presentational/SkillPresentational";
import firebase from "../../../firebaseConfig";
class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {skills: {}, isLoading: true};
	}
	componentDidMount() {
		let skills = [];
		let result = firebase.database().ref("/skills");
		result.on("value", snapshot => {
			// console.log("skills container: ", snapshot);

			snapshot.forEach(project => {
				// console.log("skills container: ", project.key);
				skills.push([project.key, project.val()]);
			});
			this.setState({ skills, isLoading: false  });
		});
	}
	render() {
		return (
			<SkillPresentational skills={this.state.skills} isLoading={this.state.isLoading}/>
		);
	}
}

export default Skills;
