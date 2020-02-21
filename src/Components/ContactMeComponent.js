import React, { Component } from "react";
import {
    Grid,
    Form,
    Input,
    TextArea,
    Button,
    Divider
} from "semantic-ui-react";

export default class ContactMeComponent extends Component {
    render() {
        return (
            <Grid
                style={{
                    backgroundColor: "#FEFBDF"
                }}
            >
                <Grid.Row>
                    <Grid.Column>
                        <Divider horizontal>
                            <h1
                                style={{
                                    textAlign: "center",
                                    fontSize: 40,
                                    color: "#fbbd08",
                                    textShadow: "-2px 1px 1px #9A9A9A"
                                }}
                            >
                                Contact Me
                            </h1>
                        </Divider>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Form>
                            <Form.Group widths="equal">
                                <Form.Field
                                    id="form-input-control-first-name"
                                    control={Input}
                                    label="First name"
                                    placeholder="Email"
                                />
                            </Form.Group>
                            <Form.Field
                                id="form-textarea-control-opinion"
                                control={TextArea}
                                label="Opinion"
                                placeholder="Opinion"
                            />
                            <Form.Field
                                id="form-button-control-public"
                                control={Button}
                                content="Confirm"
                            />
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}
