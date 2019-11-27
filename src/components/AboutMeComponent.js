import { Grid, GridRow, GridColumn, Progress } from "semantic-ui-react";
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
                    <GridColumn>
                        <Progress percent={44} progress />
                        <Progress percent={44} progress />
                        <Progress percent={44} progress />
                        <Progress percent={44} progress />
                    </GridColumn>
                </GridRow>
            </Grid>
        );
    }
}
