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
    Header
} from "semantic-ui-react";

export default class ContactMeComponent extends Component {
    render() {
        return (
            <Grid>
                <GridRow
                    centered
                    style={{
                        backgroundColor: "red",
                        marginTop: 14,
                        marginRight: -20
                    }}
                >
                    <GridColumn
                        style={{
                            paddingBottom: 20,
                            marginLeft: 40,
                            marginRight: 20
                        }}
                        mobile={16}
                        tablet={6}
                        computer={4}
                        largeScreen={6}
                        widescreen={6}
                    >
                        <h1
                            style={{
                                fontSize: 40,
                                color: "#ebeae8",
                                textShadow: "-2px 1px 1px #383736"
                            }}
                        >
                            Reach out!
                        </h1>
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
                    </GridColumn>
                </GridRow>
            </Grid>
        );
    }
}
