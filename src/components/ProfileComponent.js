import {
    Container,
    Header,
    Grid,
    Image,
    GridRow,
    GridColumn,
    Button,
    Modal,
    Icon
} from "semantic-ui-react";
import React, { Component } from "react";
import ResumeModalComponent from "./ResumeModalComponent";

export default class ProfileComponent extends Component {
    state = { modalOpen: false };
    closeModal = () => this.setState({ modalOpen: false });
    openModal = () => this.setState({ modalOpen: true });

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
                {this.state.modalOpen ? (
                    <ResumeModalComponent
                        modalOpen={this.state.modalOpen}
                        openModal={this.openModal}
                        closeModal={this.closeModal}
                        downloadResume={this.downloadResume}
                    />
                ) : null}

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

                        <Button onClick={this.openModal}>Show Modal</Button>
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
