import React, {Component} from "react";
import Nav from "./features/nav/container/Nav";
import HeaderContainer from "./features/header/container/HeaderContainer";
import "./sass/main.scss";
import ExperienceContainer from "./features/experience/container/Experience";
import ProjectContainer from "./features/projects/container/ProjectsContainer";
import Skill from "./features/skills/container/Skills";
import ContactUs from "./features/contact/container/ContactUs";
import Education from "./features/education/container/Education";

class App extends Component {
    render() {
        return< div className={"icontainer"}>
                < Nav/>
                < main className="main">
                    < HeaderContainer/>
                    < ProjectContainer/>
                    < ExperienceContainer/>
                    < Education/>
                    < Skill/>
                    < ContactUs/>
                </main>
            </div>
    }
}

export default App;
