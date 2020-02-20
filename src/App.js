// Import react and the component classes
import React, { Component, createRef } from "react";
//import { Waypoint } from "react-waypoint";
import { Grid, Image, Divider } from "semantic-ui-react";
import NavbarComponent from "./Components/NavbarComponent";
import ProfileComponent from "./Components/ProfileComponent";

// Creating a class called App which uses Component
class App extends Component {
    contextRef = createRef();

    render() {
        return (
            <div ref={this.contextRef}>
                <Grid centered>
                    <Grid.Row>
                        <Grid.Column>
                            <NavbarComponent />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Divider />
                        <Divider />
                    </Grid.Row>

                    <Grid.Row>
                        <ProfileComponent />
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

// Other files will be able to import this App (look at index.js import statements
export default App;
