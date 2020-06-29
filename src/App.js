// Import react and the component classes
import React, { Component } from "react";
//import { Waypoint } from "react-waypoint";
import NavbarComponent from "./Components/NavBar";
import ProfileComponent from "./Components/ProfileComponent";
import AboutMeComponent from "./Components/AboutMeComponent";
//import ContactMeComponent from "./Components/ContactMeComponent";

class App extends Component {

    render() {
        return <NavbarComponent />;
        return <ProfileComponent />;
        return <AboutMeComponent />;
        return (<spinner></spinner>)
    }
}

// Other files will be able to import this App (look at index.js import statements
export default App;
