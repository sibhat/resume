import React, { Component } from "react";
import firebase from "../../../firebaseConfig";
import Header from "../presentational/Header";
class HeaderContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { description: "", slogen: "", mission: "" };
	}
	componentDidMount() {
		var starCountRef = firebase.database().ref("about");
		starCountRef.on("value", snapshot => {
			this.setState({
				logoImg: snapshot.val().logoImg,
				description: snapshot.val().description,
				slogen: snapshot.val().slogen,
				mission: snapshot.val().mission
			});
		});
	}
	render() {
		let { description, slogen, mission, logoImg } = this.state;
		return (
			<Header
				description={description}
				slogen={slogen}
				mission={mission}
				logoImg={logoImg}
			/>
		);
	}
}

export default HeaderContainer;
