import {
    Grid,
    Progress,
    Image,
    Divider,
    Segment,
    Button,
    Menu
} from "semantic-ui-react";
import React, { Component } from "react";

export default class AboutMeComponent extends Component {
    state = {
        activeFilter: "Frontend Development",
        progressBars: {
            frontend: {
                HTML: 95,
                CSS: 70,
                JavaScript: 75,
                ReactJS: 80
            },
            backend: {
                Java: 75,
                CSharp: 75,
                PostgreSQL: 75,
                MySQL: 75
            },
            technologies: {
                Jira: 80,
                Confluence: 80,
                Docker: 75,
                AWS: 40
            }
        }
    };

    handleItemClick = (e, { name }) => this.setState({ activeFilter: name });

    progressBarsToDisplay = () => {
        if (this.state.activeFilter === "Frontend Development") {
            return this.state.progressBars.frontend;
        } else if (this.state.activeFilter === "Backend Development") {
            return this.state.progressBars.backend;
        } else {
            return this.state.progressBars.technologies;
        }
    };

    render() {
        const displayProgressBars = this.progressBarsToDisplay();

        return (
            <Grid>
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Divider horizontal>
                            <h1
                                style={{
                                    fontSize: 50,
                                    color: "black",
                                    textShadow: "-2px 1px 1px #cfc7bc"
                                }}
                            >
                                About Me
                            </h1>
                        </Divider>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column
                        mobile={16}
                        tablet={8}
                        computer={8}
                        largeScreen={8}
                        widescreen={8}
                    >
                        <Image
                            src={require("../Resources/profile.jpg")}
                            size="medium"
                            centered
                            circular
                        />
                        <br />
                        <p>
                            abc 123 abc 123 abc 123 abc 123 abc 123 abc 123 abc
                            123 abc 123 abc 123 abc 123 abc 123 abc 123 abc 123
                            abc 123 abc 123 abc 123 abc 123 abc 123 abc 123 abc
                            123 abc 123 abc 123 abc 123 abc 123 abc 123 abc 123
                            abc 123 abc 123 abc 123 abc 123
                        </p>
                        <br />
                        <p>Remember to check out my resume!</p>
                        <Button.Group>
                            <Button onClick={this.props.openModal}>
                                Resume
                            </Button>
                            <Button.Or />
                            <Button
                                style={{
                                    backgroundColor: "#fbbd08",
                                    color: "white"
                                }}
                            >
                                Projects
                            </Button>
                        </Button.Group>
                    </Grid.Column>
                    <Grid.Column
                        mobile={16}
                        tablet={8}
                        computer={8}
                        largeScreen={8}
                        widescreen={8}
                    >
                        <Segment
                            basic
                            style={{
                                marginLeft: "10%",
                                marginRight: "10%"
                            }}
                        >
                            <Menu pointing secondary widths={3}>
                                <Menu.Item
                                    key={"Frontend Development"}
                                    name="Frontend Development"
                                    active={
                                        this.state.activeFilter ===
                                        "Frontend Development"
                                    }
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    key={"Backend Development"}
                                    name="Backend Development"
                                    active={
                                        this.state.activeFilter ===
                                        "Backend Development"
                                    }
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    key={"Technologies"}
                                    name="Technologies"
                                    active={
                                        this.state.activeFilter ===
                                        "Technologies"
                                    }
                                    onClick={this.handleItemClick}
                                />
                            </Menu>
                            {Object.keys(displayProgressBars).map(function(
                                key
                            ) {
                                return (
                                    <div>
                                        {key}
                                        <Progress
                                            key={key}
                                            style={{
                                                height: "auto",
                                                marginTop: "2%",
                                                marginBottom: "2%"
                                            }}
                                            percent={displayProgressBars[key]}
                                            color="yellow"
                                        />
                                    </div>
                                );
                            })}
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}