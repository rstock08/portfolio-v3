import React, { Component } from "react";
import { Image, Header } from "semantic-ui-react";
import Background from "/resources/England-Jumbotron.jpg";

export default class IntroComponent extends Component {
    render() {
        return (
            <div style={{ fontSize: 30 }}>
                <Image
                    fluid
                    src={require("/resources/England-Jumbotron.jpg")}
                />
                <Header
                    as="h1"
                    size="huge"
                    style={{ marginTop: -60, zIndex: -2 }}
                >
                    <b>Hi, I'm Reed.</b>
                </Header>
                <Header as="h2" size="huge" style={{ marginTop: -60 }}>
                    Software Engineer. Innovator. Self Starter. Self Learner.
                </Header>
            </div>
        );
    }
}
