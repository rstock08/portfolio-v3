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
        activeItem: "Frontend Development"
    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

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
                        <Segment>
                            <Menu pointing secondary>
                                <Menu.Item
                                    name="Frontend Development"
                                    active={
                                        this.state.activeItem ===
                                        "Frontend Development"
                                    }
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    name="Backend Development"
                                    active={
                                        this.state.activeItem ===
                                        "Backend Development"
                                    }
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    name="Technologies"
                                    active={
                                        this.state.activeItem === "Technologies"
                                    }
                                    onClick={this.handleItemClick}
                                />
                            </Menu>
                            <Progress
                                style={{ height: "auto" }}
                                percent={44}
                                color="yellow"
                            />
                            <Progress
                                style={{ height: "auto" }}
                                percent={44}
                                color="yellow"
                            />
                            <Progress
                                style={{ height: "auto" }}
                                percent={44}
                                color="yellow"
                            />
                            <Progress
                                style={{ height: "auto" }}
                                percent={44}
                                color="yellow"
                            />
                            <Progress
                                style={{ height: "auto" }}
                                percent={44}
                                color="yellow"
                            />
                            <Progress
                                style={{ height: "auto" }}
                                percent={44}
                                color="yellow"
                                label="Label"
                            />
                            <Progress
                                style={{ height: "auto" }}
                                percent={44}
                                color="yellow"
                            />
                            <Progress
                                style={{ height: "auto" }}
                                percent={44}
                                color="yellow"
                            />
                        </Segment>
                    </GridColumn>
                </GridRow>
            </Grid>
        );
    }
}
