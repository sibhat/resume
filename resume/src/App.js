import React, { Component } from "react";
import Nav from "./features/nav/container/Nav";
import Header from "./features/header/presentational/Header";
import "./sass/main.scss";
import Experience from "./features/experience/presentational/Experience";
import Projects from "./features/projects/container/Projects";
import Skills from "./features/skills/container/Skills";
import ContactUs from "./features/contact/container/ContactUs";
import firebase from "./firebaseConfig";

class App extends Component {
	componentDidMount() {
		console.log("componentDidMount");

		var starCountRef = firebase.database().ref("project");
		starCountRef.on("value", snapshot => {
			console.log("value", snapshot.val());
			// this.setState({ users: snapshot.val() });
		});
	}
	render() {
		return (
			<div className="icontainer">
				<Nav />
				<main className="main">
					<Header />
					<Experience />
					<Projects />
					<Skills />
					<ContactUs />
				</main>
			</div>
		);
	}
}

export default App;
