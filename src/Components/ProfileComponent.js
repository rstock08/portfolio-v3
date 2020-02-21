import React, { Component } from "react";
import {
    Grid,
    Image,
    Transition,
    Divider,
    Container,
    GridRow
} from "semantic-ui-react";

const TITLES = [
    "A Software Engineer.",
    "/ Full-Stack Developer.",
    "A self-starter.",
    "An enthusiastic learner.",
    "An innovator."
];

export default class ProfileComponent extends Component {
    state = {
        titleIndex: 0,
        animation: "fade down",
        visible: false,
        titleAnimationDuration: 3000,
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
            <Grid>
                <Divider hidden />
                <Grid.Row>
                    <Image
                        src={require("../Resources/profile.jpg")}
                        size="medium"
                        circular
                        centered
                    />
                </Grid.Row>
                <Grid.Row>
                    <Container textAlign="center">
                        <Transition
                            visible={this.state.visible}
                            animation="slide down"
                            duration={2000}
                        >
                            <h1
                                style={{
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
                            duration={3000}
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
                    </Container>
                </Grid.Row>
            </Grid>
        );
    }
}
