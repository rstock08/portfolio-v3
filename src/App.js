// Import react and the component classes
import React, { Component, createRef } from "react";
import { Sticky } from "semantic-ui-react";
import NavbarComponent from "./components/NavbarComponent";
import IntroComponent from "./components/JumbotronComponent";
import ProfileComponent from "./components/ProfileComponent";
import ProjectExamplesComponent from "./components/ProjectExamplesComponent";
import ContactMeComponent from "./components/ContactMeComponent";
import SocialMediaComponent from "./components/SocialMediaComponent";

// Creating a class called App which uses Component
class App extends Component {
    contextRef = createRef();

    render() {
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef}>
                    <NavbarComponent />
                </Sticky>

                <IntroComponent />
                <ProfileComponent />
                <ProjectExamplesComponent />
                <ContactMeComponent />
            </div>
        );
    }
}

// Other files will be able to import this App (look at index.js import statements
export default App;
