import { Grid, GridRow, GridColumn } from "semantic-ui-react";
import React, { Component } from "react";

export default class AboutMeComponent extends Component {
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
                    <GridColumn></GridColumn>
                </GridRow>
            </Grid>
        );
    }
}
