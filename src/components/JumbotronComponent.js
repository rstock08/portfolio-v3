import React, { Component } from "react";
import { Image, Header } from "semantic-ui-react";
import Background from "/resources/England-Jumbotron.jpg";

export default class IntroComponent extends Component {
    render() {
        return (
            <div
                class="jumbotron jumbotron-fluid"
                style={{
                    marginTop: -10,
                    marginBottom: 0,
                    paddingBottom: 400,
                    backgroundImage: `url(${Background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                }}
            >
                <div class="container" style={{ paddingTop: 200 }}>
                    <h1
                        style={{
                            fontSize: 60,
                            color: "#ebeae8",
                            textShadow: "-2px 1px 1px #383736"
                        }}
                    >
                        Hi, I'm Reed.
                    </h1>
                    <p
                        style={{
                            fontSize: 30,
                            color: "#ebeae8",
                            textShadow: "-2px 1px 1px #383736"
                        }}
                    >
                        Test test test test
                    </p>
                    <p
                        style={{
                            fontSize: 30,
                            color: "#ebeae8",
                            textShadow: "-2px 1px 1px #383736"
                        }}
                    >
                        Software Engineer. Innovator. Self Starter. Self
                        Learner.
                    </p>
                </div>
            </div>
        );
    }
}
