import React, { Component } from "react";
import { Button, Grid, GridRow, GridColumn, Icon } from "semantic-ui-react";

export default class FooterComponent extends Component {
    backToTop = () => {
        href = "#home";
    };

    render() {
        return (
            <Grid style={{ backgroundColor: "#1b1c1d", paddingTop: "3%" }}>
                <GridRow></GridRow>
            </Grid>
        );
    }
}
