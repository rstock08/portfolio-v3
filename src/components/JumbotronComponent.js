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
        visible: false,
        titleAnimationDuration: 4000,
        titleAnimation: "fly right"
    };

    componentDidMount() {
        console.log("Title component has mounted!");
        this.setState({
            visible: true,
            visibleTitle: true
        });
        this.animateTitles();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (
            prevState.visibleTitle !== this.state.visibleTitle &&
            this.state.visibleTitle === false
        ) {
            setTimeout(() => {
                this.titleIterator();
            }, this.state.titleAnimationDuration);
        }
    }

    componentWillUnmount() {
        console.log("Title component will unmount!");
        clearInterval(this.titleInterval);
    }

    animateTitles = () => {
        this.titleIntervals = setInterval(() => {
            this.setState({
                visibleTitle: !this.state.visibleTitle
            });
        }, 2000);
    };

    titleIterator = () => {
        console.log("Title Change");
        if (this.state.titleIndex < 4) {
            this.setState({ titleIndex: (this.state.titleIndex += 1) });
        } else {
            this.setState({ titleIndex: 0 });
        }
    };

    render() {
        return (
            <div
                className="jumbotron jumbotron-fluid"
                style={{
                    paddingBottom: 200,
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
                                marginTop: 300,
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
                        animation={this.state.titleAnimation}
                        duration={this.state.titleAnimationDuration}
                    >
                        <p
                            style={{
                                fontSize: 30,
                                color: "#ebeae8",
                                textShadow: "-2px 1px 1px #383736"
                            }}
                        >
                            {TITLES[this.state.titleIndex]}
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
