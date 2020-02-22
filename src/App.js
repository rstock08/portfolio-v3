// Import react and the component classes
import React, { Component, createRef, Section } from "react";
//import { Waypoint } from "react-waypoint";
import { Sticky, Ref } from "semantic-ui-react";
import NavbarComponent from "./Components/NavbarComponent";
import ProfileComponent from "./Components/ProfileComponent";
import AboutMeComponent from "./Components/AboutMeComponent";
import ContactMeComponent from "./Components/ContactMeComponent";

class App extends Component {
    contextRef = createRef();

    render() {
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef}>
                    <NavbarComponent />
                </Sticky>

                <ProfileComponent />

                <AboutMeComponent />
                <ContactMeComponent />
            </div>
        );
    }
}

// Other files will be able to import this App (look at index.js import statements
export default App;
