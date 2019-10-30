import {
    Container,
    Header,
    Grid,
    Image,
    GridRow,
    GridColumn,
    Button,
    Modal,
    Icon,
    Rail
} from "semantic-ui-react";
import React, { Component } from "react";

export default class ProfileComponent extends Component {
    state = { modalOpen: false };

    handleOpen = () => this.setState({ modalOpen: true });

    handleClose = () => this.setState({ modalOpen: false });

    render() {
        return (
            <Grid
                centered
                style={{
                    backgroundColor: "blue",
                    paddingTop: 60,
                    paddingBottom: 60
                }}
            >
                <GridRow>
                    <GridColumn
                        style={{ paddingBottom: 20 }}
                        mobile={16}
                        tablet={6}
                        computer={4}
                        largeScreen={6}
                        widescreen={6}
                    >
                        <Image
                            src={require("/resources/profile.png")}
                            size="medium"
                            centered
                            circular
                        />
                        <Rail size="big" position="left">
                            Big Left Rail
                        </Rail>
                        <Modal
                            trigger={
                                <Button
                                    attached="top"
                                    onClick={this.handleOpen}
                                    style={{
                                        marginTop: 20,
                                        marginLeft: 80,
                                        marginRight: 80
                                    }}
                                >
                                    Show Modal
                                </Button>
                            }
                            open={this.state.modalOpen}
                            onClose={this.handleClose}
                            basic
                            size="small"
                        >
                            <Header icon="browser" content="Cookies policy" />
                            <Modal.Content>
                                <h3>
                                    This website uses cookies to ensure the best
                                    user experience.
                                </h3>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button
                                    color="green"
                                    onClick={this.handleClose}
                                    inverted
                                >
                                    <Icon name="checkmark" /> Got it
                                </Button>
                            </Modal.Actions>
                        </Modal>
                    </GridColumn>
                    <GridColumn
                        mobile={16}
                        tablet={10}
                        computer={12}
                        largeScreen={8}
                        widescreen={8}
                    >
                        <Header size="huge" textAlign="center">
                            About Me
                        </Header>
                        <Container text fluid>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa strong. Cum sociis natoque
                                penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis,
                                sem. Nulla consequat massa quis enim. Donec pede
                                justo, fringilla vel, aliquet nec, vulputate
                                eget, arcu. In enim justo, rhoncus ut, imperdiet
                                a, venenatis vitae, justo.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Aenean commodo ligula eget
                                dolor. Aenean massa strong. Cum sociis natoque
                                penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis,
                                sem. Nulla consequat massa quis enim. Donec pede
                                justo, fringilla vel, aliquet nec, vulputate
                                eget, arcu. In enim justo, rhoncus ut, imperdiet
                                a, venenatis vitae, justo. Nullam dictum felis
                                eu pede link mollis pretium. Integer tincidunt.
                                Cras dapibus.
                            </p>
                        </Container>
                    </GridColumn>
                </GridRow>
            </Grid>
        );
    }
}
