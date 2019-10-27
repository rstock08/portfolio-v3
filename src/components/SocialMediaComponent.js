import React, { Component } from "react";
import { Button, Grid } from "semantic-ui-react";

export default class SocialMediaComponent extends Component {
    render() {
        return (
            <Grid
                style={{
                    marginBottom: -10,
                    marginTop: -10
                }}
                stackable="false"
            >
                <Button circular color="facebook" icon="facebook" />
                <Button circular color="twitter" icon="twitter" />
                <Button circular color="linkedin" icon="linkedin" />
                <Button circular color="google plus" icon="google plus" />
            </Grid>
        );
    }
}

/*<div
                style={{
                    backgroundColor: "black",
                    paddingTop: 20,
                    paddingBottom: 20
                }}
            >

                <Button circular color="facebook" icon="facebook" />
                <Button circular color="twitter" icon="twitter" />
                <Button circular color="linkedin" icon="linkedin" />
                <Button circular color="google plus" icon="google plus" />
            </div>*/
