import React, { Component } from "react";
import Background from "/resources/England-Jumbotron.jpg";
import { Transition } from "semantic-ui-react";

const TITLES = [
    "A Software Engineer.",
    "/ Full-Stack Developer.",
    "A self-starter.",
    "An enthusiastic learner.",
    "An innovator."
];

export default class JumbotronComponent extends Component {
    state = {
        titleIndex: 0,
        animation: "fade down",
        duration: 500,
        visible: false
    };

    componentDidMount() {
        console.log("Title component has mounted!");
        this.setState({ visible: true });
        this.animateTitles();
    }

    componentWillUnmount() {
        console.log("Title component will unmount!");
        clearInterval(this.titleInterval);
    }

    animateTitles = () => {
        // Causes a small memory leak because if the component is unmounted setInterval is still going to fire after 4 seconds
        this.titleInterval = setInterval(() => {
            //setInterval(()=>{
            if (this.state.titleIndex < 4) {
                this.setState({ titleIndex: (this.state.titleIndex += 1) });
            } else {
                this.setState({ titleIndex: 0 });
            }
        }, 4000);
        console.log("this.titleInterval" + this.titleInterval);
    };

    render() {
        const title = TITLES[this.state.titleIndex];

        return (
            <div
                className="jumbotron jumbotron-fluid"
                style={{
                    paddingBottom: 500,
                    marginTop: -120,
                    backgroundImage: `url(${Background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                }}
            >
                <div className="container">
                    <Transition
                        visible={this.state.visible}
                        animation="fly down"
                        duration={1500}
                    >
                        <h1
                            style={{
                                marginTop: 200,
                                fontSize: 60,
                                color: "#ebeae8",
                                textShadow: "-2px 1px 1px #383736"
                            }}
                        >
                            Hi, I'm Reed.
                        </h1>
                    </Transition>
                    <Transition
                        visible={this.state.visible}
                        animation="fly right"
                        duration={4000}
                    >
                        <p
                            style={{
                                fontSize: 30,
                                color: "#ebeae8",
                                textShadow: "-2px 1px 1px #383736"
                            }}
                        >
                            {title}
                        </p>
                    </Transition>
                    <Transition
                        visible={this.state.visible}
                        animation="fly right"
                        duration={4000}
                    >
                        <p
                            style={{
                                fontSize: 30,
                                color: "#ebeae8",
                                textShadow: "-2px 1px 1px #383736"
                            }}
                        >
                            I'm always looking forward to taking on the next
                            challenge!
                        </p>
                    </Transition>
                </div>
            </div>
        );
    }
}
