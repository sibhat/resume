import React, {Component} from "react";
import firebase from "../../../firebaseConfig";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            about: ""
        }
    }

    componentDidMount() {
        let aboutRef = firebase.database().ref('about');
        aboutRef.on('value', snapshot => {
            // console.log(snapshot.val());
            this.setState({about: snapshot.val()})
        });
    }

    render() {
        return (
            <React.Fragment>
                <nav className="inav">
                    <div className="inav__name">
                        <h2 className="heading__secondary teal-text">
                            {`${this.state.about.firstName}  ${this.state.about.lastName}`}
                        </h2>
                        <h4 className="heading__teritary brown-text">
                            {`${this.state.about.headline}`}
                        </h4>
                    </div>
                    <div className="inav__item">
                        <li className="inav__list">
                            <i className="fas fa-user"/>
                            <a href={"#about"} className="waves-effect">
                                About
                            </a>
                        </li>
                        <li className="inav__list">
                            <i className="fas fa-laptop"/>
                            <a href={"#experience"}>Experience</a>
                        </li>
                        <li className="inav__list">
                            <i className="fa fa-code"/>
                            <a href={"#projects"}>Projects</a>
                        </li>
                        <li className="inav__list">
                            <i className="fa fa-chess-knight"/>
                            <a href={"#skills"}>Skills</a>
                        </li>
                        <li className="inav__list">
                            <i className="fas fa-paper-plane"/>
                            <a href={"#contact"}>Contact</a>
                        </li>
                        <li className="inav__list">
                            <i className="fas fa-file-code"/>
                            <a href={"#resume"}>Resume</a>
                        </li>
                    </div>
                </nav>
                <nav className="nav__humberger">
                    <span className="nav__humberger__line"/>
                </nav>
            </React.Fragment>
        );
    }
}

export default Nav;
