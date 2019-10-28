import React, { Component } from "react";
import { Image, Header } from "semantic-ui-react";
import Background from "/resources/England-Jumbotron.jpg";

export default class IntroComponent extends Component {
    render() {
        return (
            <div style={{ fontSize: 30, position: "relative" }}>
                <Image
                    fluid
                    src={require("/resources/England-Jumbotron.jpg")}
                />
                <div
                    style={{
                        position: "relative",
                        zIndex: "1",
                        marginTop: -400,
                        paddingBottom: 300
                    }}
                >
                    <Header
                        as="h1"
                        size="huge"
                        style={{
                            color: "white"
                        }}
                    >
                        Hi, I'm Reed.
                        <Header.Subheader style={{ color: "lightgrey" }}>
                            Software Engineer. Innovator. Self Starter. Self
                            Learner. Account Settings
                        </Header.Subheader>
                    </Header>
                </div>
            </div>
        );
    }
}
