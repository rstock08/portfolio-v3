import React, { Component } from "react";
import Background from "/resources/England-Jumbotron.jpg";

const TITLES = [
    "A Software Engineer.",
    "A self-starter.",
    "An enthusiastic learner.",
    "An innovator."
];

export default class JumbotronComponent extends Component {
    state = { titleIndex: 0 };

    componentDidMount() {
        console.log("Title component has mounted!");
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
            if (this.state.titleIndex < 3) {
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
                    marginTop: -10,
                    marginBottom: 0,
                    paddingBottom: 400,
                    backgroundImage: `url(${Background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                }}
            >
                <div className="container" style={{ paddingTop: 200 }}>
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
                        {title}
                    </p>
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
                </div>
            </div>
        );
    }
}
