import React, { Component } from "react";
import firebase from "../../../firebaseConfig";
import Header from "../presentational/Header";
class HeaderContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			about: {},
			isLoading: true
		};
	}
	componentDidMount() {
		var aboutRef = firebase.database().ref("about");
		aboutRef.on("value", snapshot => {
			this.setState({
				logoImg: snapshot.val().logoImg,
				description: snapshot.val().description,
				slogen: snapshot.val().slogen,
				mission: snapshot.val().mission,
				isLoading: false
			});
		});
	}
	render() {
		if(this.state.isLoading)
			return <h1> waiting </h1>;

		let { description, slogen, mission, logoImg } = this.state;
		return (
			<Header
				description={description}
				slogen={slogen}
				mission={mission}
				logoImg={logoImg}
				isLoading={this.state.isLoading}
			/>
		);
	}
}

export default HeaderContainer;
