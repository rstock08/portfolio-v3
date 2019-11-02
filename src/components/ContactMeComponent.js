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
                        marginTop: -20,
                        paddingLeft: 10,
                        paddingRight: 10
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
                        <Form>
                            <Form.Group widths="equal">
                                <Form.Field
                                    id="form-input-control-first-name"
                                    control={Input}
                                    label="First name"
                                    placeholder="First name"
                                />
                                <Form.Field
                                    id="form-input-control-last-name"
                                    control={Input}
                                    label="Last name"
                                    placeholder="Last name"
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
                                label="Label with htmlFor"
                            />
                        </Form>
                    </GridColumn>
                </GridRow>
            </Grid>
        );
    }
}
