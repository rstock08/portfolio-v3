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
        htmlPercent: 85,
        cssPercent: 75,
        javascriptPercent: 80,
        activeFilter: "Frontend Development",
        progress: {
            frontend: {
                HTML: ["HTML", 95],
                CSS: ["CSS", 70],
                JavaScript: ["JavaScript", 75],
                ReactJS: ["ReactJS", 80]
            },
            backend: {
                Java: ["Java", 75],
                CSharp: ["C#", 75],
                PostgreSQL: ["PostgreSQL", 75],
                MySQL: ["MySQL", 75]
            },
            technologies: {
                Jira: ["Jira", 80],
                Confluence: ["Confluence", 80],
                Docker: ["Docker", 75],
                AWS: ["Amazon Web Services (AWS)", 30]
            }
        }
    };

    handleItemClick = (e, { name }) => this.setState({ activeFilter: name });

    progressBars = () => {
        if (this.state.activeFilter === "Frontend Development") {
            return (
                <div>
                    {this.state.progress.frontend.HTML[0]}
                    <Progress
                        style={{
                            height: "auto",
                            marginTop: "2%",
                            marginBottom: "2%"
                        }}
                        percent={this.state.progress.frontend.HTML[1]}
                        color="yellow"
                    />
                    {this.state.progress.frontend.CSS[0]}
                    <Progress
                        style={{
                            height: "auto",
                            marginTop: "2%",
                            marginBottom: "2%"
                        }}
                        percent={this.state.progress.frontend.CSS[1]}
                        color="yellow"
                    />
                    {this.state.progress.frontend.JavaScript[0]}
                    <Progress
                        style={{
                            height: "auto",
                            marginTop: "2%",
                            marginBottom: "2%"
                        }}
                        percent={this.state.progress.frontend.JavaScript[1]}
                        color="yellow"
                    />
                    {this.state.progress.frontend.ReactJS[0]}
                    <Progress
                        style={{
                            height: "auto",
                            marginTop: "2%",
                            marginBottom: "2%"
                        }}
                        percent={this.state.progress.frontend.ReactJS[1]}
                        color="yellow"
                    />
                </div>
            );
        } else if (this.state.activeFilter === "Backend Development") {
            return (
                <div>
                    {this.state.progress.backend.Java[0]}
                    <Progress
                        style={{
                            height: "auto",
                            marginTop: "2%",
                            marginBottom: "2%"
                        }}
                        percent={this.state.progress.backend.Java[1]}
                        color="yellow"
                    />
                    {this.state.progress.backend.CSharp[0]}
                    <Progress
                        style={{
                            height: "auto",
                            marginTop: "2%",
                            marginBottom: "2%"
                        }}
                        percent={this.state.progress.backend.CSharp[1]}
                        color="yellow"
                    />
                    {this.state.progress.backend.PostgreSQL[0]}
                    <Progress
                        style={{
                            height: "auto",
                            marginTop: "2%",
                            marginBottom: "2%"
                        }}
                        percent={this.state.progress.backend.PostgreSQL[1]}
                        color="yellow"
                    />
                    {this.state.progress.backend.MySQL[0]}
                    <Progress
                        style={{
                            height: "auto",
                            marginTop: "2%",
                            marginBottom: "2%"
                        }}
                        percent={this.state.progress.backend.MySQL[1]}
                        color="yellow"
                    />
                </div>
            );
        } else {
            return (
                <div>
                    {this.state.progress.technologies.Jira[0]}
                    <Progress
                        style={{
                            height: "auto",
                            marginTop: "2%",
                            marginBottom: "2%"
                        }}
                        percent={this.state.progress.technologies.Jira[1]}
                        color="yellow"
                    />
                    {this.state.progress.technologies.Confluence[0]}
                    <Progress
                        style={{
                            height: "auto",
                            marginTop: "2%",
                            marginBottom: "2%"
                        }}
                        percent={this.state.progress.technologies.Confluence[1]}
                        color="yellow"
                    />
                    {this.state.progress.technologies.Docker[0]}
                    <Progress
                        style={{
                            height: "auto",
                            marginTop: "2%",
                            marginBottom: "2%"
                        }}
                        percent={this.state.progress.technologies.Docker[1]}
                        color="yellow"
                    />
                    {this.state.progress.technologies.AWS[0]}
                    <Progress
                        style={{
                            height: "auto",
                            marginTop: "2%",
                            marginBottom: "2%"
                        }}
                        percent={this.state.progress.technologies.AWS[1]}
                        color="yellow"
                    />
                    {this.state.progress.technologies.AWS[0]}
                    <Progress
                        style={{
                            height: "auto",
                            marginTop: "2%",
                            marginBottom: "2%"
                        }}
                        percent={this.state.progress.technologies.AWS[1]}
                        color="yellow"
                    />
                    {this.state.progress.technologies.AWS[0]}
                    <Progress
                        style={{
                            height: "auto",
                            marginTop: "2%",
                            marginBottom: "2%"
                        }}
                        percent={this.state.progress.technologies.AWS[1]}
                        color="yellow"
                    />
                    {this.state.progress.technologies.AWS[0]}
                    <Progress
                        style={{
                            height: "auto",
                            marginTop: "2%",
                            marginBottom: "2%"
                        }}
                        percent={this.state.progress.technologies.AWS[1]}
                        color="yellow"
                    />
                    {this.state.progress.technologies.AWS[0]}
                    <Progress
                        style={{
                            height: "auto",
                            marginTop: "2%",
                            marginBottom: "2%"
                        }}
                        percent={this.state.progress.technologies.AWS[1]}
                        color="yellow"
                    />
                </div>
            );
        }
    };

    render() {
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
                            <Button>Resume</Button>
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
                                marginTop: "-4%",
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
                            {this.progressBars()}
                        </Segment>
                    </GridColumn>
                </GridRow>
            </Grid>
        );
    }
}
