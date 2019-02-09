import React, { Component } from "react";
import Project from "../presentational/Project";
import firebase from "../../../firebaseConfig";

class ProjectContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { projects: [], projectPhoto: "" };
	}
	state = {
		file: "",
		fileName: ""
	};
	uploadfileHandelr = e => {
		e.preventDefault();

		this.setState({
			file: e.target.files[0]
		});
	};
	uploadFile = e => {
		e.preventDefault();
		var project;
		// console.log(firebase);

		var storageRef = firebase.storage().ref("img/" + this.state.file.name);

		var uploadTask = storageRef.put(this.state.file);
		uploadTask.on(
			"state_changed",
			function(snapshot) {
				// Observe state change events such as progress, pause, and resume
				// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
				var progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log("Upload is " + progress + "% done");
				switch (snapshot.state) {
					case firebase.storage.TaskState.PAUSED: // or 'paused'
						console.log("Upload is paused");
						break;
					case firebase.storage.TaskState.RUNNING: // or 'running'
						console.log("Upload is running");
						break;
					default:
						break;
				}
			},
			function(error) {
				// Handle unsuccessful uploads
			},
			function() {
				uploadTask.snapshot.ref
					.getDownloadURL()
					.then(function(downloadURL) {
						console.log("File available at", downloadURL);
						project = {
							logoImg: downloadURL,
							description:
								"Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a software engineer. I am ambitious, adventurous, animated team player. I also do freelance wedding, event and portrait photography in my free time. As a result, I have a professional background in working with client needs and creating those memorable times",
							slogen:
								"I want to make things that make a difference.",
							mission:
								"Mission-driven full stack developer with a passion for thoughtful UI design"
						};
						firebase
							.database()
							.ref("/about")
							.set(project);
					});
			}
		);
	};
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
		return (
			<Project
				projects={this.state.projects}
				uploadfileHandelr={this.uploadfileHandelr}
				uploadFile={this.uploadFile}
			/>
		);
	}
}

export default ProjectContainer;
