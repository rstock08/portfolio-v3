import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
    Grid,
    GridRow,
    GridColumn,
    Form,
    Input,
    TextArea,
    Button,
    Segment,
    Divider
} from "semantic-ui-react";

export default class ContactMeComponent extends Component {
    render() {
        return (
            <Grid
                centered
                style={{
                    paddingTop: 50,
                    backgroundColor: "#FEFBDF"
                }}
            >
                <GridRow style={{ paddingBottom: 50 }}>
                    <GridColumn
                        mobile={16}
                        tablet={16}
                        computer={16}
                        largeScreen={16}
                        widescreen={16}
                    >
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
                    </GridColumn>
                </GridRow>
                <GridRow>
                    <GridColumn
                        mobile={14}
                        tablet={10}
                        computer={10}
                        largeScreen={8}
                        widescreen={8}
                    >
                        <Segment
                            style={{ marginLeft: "15%", marginRight: "15%" }}
                        >
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
                        </Segment>
                        <Divider hidden style={{ paddingBottom: "20%" }} />
                    </GridColumn>
                </GridRow>
            </Grid>
        );
    }
}
