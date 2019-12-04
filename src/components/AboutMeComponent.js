import {
    Grid,
    GridRow,
    GridColumn,
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
                AWS: 30
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
                <GridRow>
                    <GridColumn>
                        <Divider horizontal style={{ marginRight: -20 }}>
                            <h1
                                style={{
                                    fontSize: 50,
                                    color: "black",
                                    textShadow: "-2px 1px 1px #cfc7bc"
                                }}
                            >
                                About
                            </h1>
                        </Divider>
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn
                        mobile={16}
                        tablet={8}
                        computer={8}
                        largeScreen={8}
                        widescreen={8}
                    >
                        <Image
                            src={require("/resources/profile.png")}
                            size="medium"
                            centered
                            circular
                        />
                        <Segment
                            basic
                            style={{
                                marginLeft: "10%",
                                marginRight: "10%",
                                marginBottom: "5%"
                            }}
                        >
                            <br />
                            <p>
                                abc 123 abc 123 abc 123 abc 123 abc 123 abc 123
                                abc 123 abc 123 abc 123 abc 123 abc 123 abc 123
                                abc 123 abc 123 abc 123 abc 123 abc 123 abc 123
                                abc 123 abc 123 abc 123 abc 123 abc 123 abc 123
                                abc 123 abc 123 abc 123 abc 123 abc 123 abc 123
                            </p>
                            <br />
                            <p>Remember to check out my resume!</p>
                            <Button onClick={this.props.openModal}>
                                Resume
                            </Button>
                        </Segment>
                    </GridColumn>
                    <GridColumn
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
                    </GridColumn>
                </GridRow>
            </Grid>
        );
    }
}
