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

    progressBars = object => {
        Object.keys(object).map(function(key) {
            return (
                <div>
                    {key}
                    <Progress
                        style={{
                            height: "auto",
                            marginTop: "2%",
                            marginBottom: "2%"
                        }}
                        percent={object[key]}
                        color="yellow"
                    />
                </div>
            );
        });
    };

    render() {
        const progressBars = this.state.progressBars;

        return (
            <Grid>
                <GridRow>
                    <GridColumn>
                        <Divider horizontal>
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
                            style={{
                                marginLeft: "10%",
                                marginRight: "10%"
                            }}
                        >
                            <Menu pointing secondary widths={3}>
                                <Menu.Item
                                    name="Frontend Development"
                                    active={
                                        this.state.activeFilter ===
                                        "Frontend Development"
                                    }
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    name="Backend Development"
                                    active={
                                        this.state.activeFilter ===
                                        "Backend Development"
                                    }
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    name="Technologies"
                                    active={
                                        this.state.activeFilter ===
                                        "Technologies"
                                    }
                                    onClick={this.handleItemClick}
                                />
                            </Menu>
                            {this.state.activeFilter === "Frontend Development"
                                ? this.progressBars(progressBars.frontend)
                                : this.state.activeFilter === "Backend Development"
                                ? this.progressBars(progressBars.frontend)
                                : this.state.activeFilter === "Technologies"
                                ? this.progressBars(progressBars.technologies)
                                : null}
                        </Segment>
                    </GridColumn>
                </GridRow>
            </Grid>
        );
    }
}
