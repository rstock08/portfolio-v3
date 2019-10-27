import React, { Component } from "react";
import { Button, Segment, Container } from "semantic-ui-react";

export default class SocialMediaComponent extends Component {
    render() {
        return (
            <Container
                style={{
                    marginBottom: -10,
                    marginTop: -10
                }}
            >
                <Button circular color="facebook" icon="facebook" />
                <Button circular color="twitter" icon="twitter" />
                <Button circular color="linkedin" icon="linkedin" />
                <Button circular color="google plus" icon="google plus" />
            </Container>
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
