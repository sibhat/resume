import React, { Component } from "react";
import firebase from "../../../firebaseConfig";
class EditSKills extends Component {
	state = {
		frontEnd: [
			{
				name: "",
				logo: "",
				id: 0
			}
		],
		backEnd: [
			{
				name: "",
				logo: "",
				id: 0
			}
		],
		other: [
			{
				name: "",
				logo: "",
				id: 0
			}
		]
	};
	uploadfileHandelr = e => {
		e.preventDefault();
		let info = e.target.name.split("-");
		let stateCopy = Object.assign(this.state);
		stateCopy[info[0]][info[2]].logo = e.target.files[0];
		this.setState({
			frontEnd: stateCopy.frontEnd,
			backEnd: stateCopy.backEnd,
			other: stateCopy.other
		});
	};
	addStack = e => {
		let info = e.target.name.split("-");
		let stateCopy = Object.assign(this.state);
		console.log(stateCopy[info[0]][-1]);
		let id = stateCopy[info[0]][stateCopy[info[0]].length - 1]["id"];
		stateCopy[info[0]].push({
			name: "",
			logo: "",
			id: id + 1
		});
		this.setState({
			stateCopy
		});
	};
	inputHandler = e => {
		e.preventDefault();
		let info = e.target.name.split("-");
		let stateCopy = Object.assign(this.state);

		stateCopy[info[0]][info[2]][info[1]] = e.target.value;
		this.setState({
			frontEnd: stateCopy.frontEnd,
			backEnd: stateCopy.backEnd,
			other: stateCopy.other
		});
	};
	submitHandler = e => {
		e.preventDefault();
		var project;
		let stateCopy = Object.assign(this.state);

		let stateArry = Object.entries(stateCopy);

		stateArry.forEach(stackGeneral => {
			console.log(stateCopy);
			console.log(stackGeneral);
			stackGeneral[1].forEach(stack => {
				console.log(stack);
				if (stack.name.length > 2) {
					var storageRef = firebase
						.storage()
						.ref("img/" + stack.name);
					var uploadTask = storageRef.put(stack.logo);
					uploadTask.on(
						"state_changed",
						function(snapshot) {
							// Observe state change events such as progress, pause, and resume
							// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
							var progress =
								(snapshot.bytesTransferred /
									snapshot.totalBytes) *
								100;
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
									console.log(
										"File available at",
										downloadURL
									);
									project = {
										[stack.name]: {
											logoImg: downloadURL,
											name: stack.name
										}
									};
									firebase
										.database()
										.ref("/skills")
										.push(project);
								});
						}
					);
				}
			});
		});
	};
	render() {
		let skills = this.state;
		console.log({ skills });

		return (
			<React.Fragment>
				<div>
					<h4>Front-End</h4>
					<button name="frontEnd-add" onClick={this.addStack}>
						Add Stack
					</button>
				</div>
				{skills.frontEnd.map(stack => (
					<React.Fragment key={stack.id}>
						<input
							type="text"
							name={"frontEnd-name-" + stack.id}
							value={stack.name}
							onChange={this.inputHandler}
						/>
						<input
							type="file"
							name={"frontEnd-logo-" + stack.id}
							onChange={this.uploadfileHandelr}
						/>
					</React.Fragment>
				))}
				<div>
					<h4>Back-End</h4>
					<button name="backEnd-add" onClick={this.addStack}>
						Add Stack
					</button>
				</div>
				{skills.backEnd.map(stack => (
					<React.Fragment key={stack.id}>
						<input
							type="text"
							name={"backEnd-name-" + stack.id}
							value={stack.name}
							onChange={this.inputHandler}
						/>
						<input
							type="file"
							name={"backEnd-logo-" + stack.id}
							onChange={this.uploadfileHandelr}
						/>
					</React.Fragment>
				))}
				<div>
					<h4>Other</h4>
					<button name="other-add" onClick={this.addStack}>
						Add Stack
					</button>
				</div>
				{skills.other.map(stack => (
					<React.Fragment key={stack.id}>
						<input
							type="text"
							name={"other-name-" + stack.id}
							value={stack.name}
							onChange={this.inputHandler}
						/>
						<input
							type="file"
							name={"other-logo-" + stack.id}
							onChange={this.uploadfileHandelr}
						/>
					</React.Fragment>
				))}
				<button type="submit" onClick={this.submitHandler}>
					Subimt
				</button>
			</React.Fragment>
		);
	}
}

export default EditSKills;
