import {
    Grid,
    GridRow,
    GridColumn,
    Progress,
    Image,
    Button
} from "semantic-ui-react";
import React, { Component } from "react";

export default class AboutMeComponent extends Component {
    state = { htmlPercent: 85, cssPercent: 75, javascriptPercent: 80 };

    render() {
        return (
            <Grid>
                <GridRow>
                    <GridColumn>
                        <h1
                            style={{
                                fontSize: 50,
                                color: "black",
                                textShadow: "-2px 1px 1px #cfc7bc"
                            }}
                        >
                            About
                        </h1>
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
                    </GridColumn>
                    <GridColumn
                        mobile={16}
                        tablet={4}
                        computer={4}
                        largeScreen={4}
                        widescreen={4}
                    >
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
                    </GridColumn>
                    <GridColumn
                        mobile={16}
                        tablet={8}
                        computer={4}
                        largeScreen={4}
                        widescreen={4}
                    >
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
                    </GridColumn>
                </GridRow>
            </Grid>
        );
    }
}
