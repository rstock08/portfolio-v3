import React, { Component } from "react";
import {
    Popup,
    Button,
    Grid,
    Modal,
    Image,
    Header,
    Icon
} from "semantic-ui-react";
import { createRequireFromPath } from "module";

export default class SocialMediaComponent extends Component {
    state = { modalOpen: false };

    redirectOnClick = (e, data) => {
        console.log(e + data);
        window.open(data.link);
    };

    closeModal = () => this.setState({ modalOpen: false });
    openModal = () => this.setState({ modalOpen: true });

    render() {
        return (
            <Grid
                style={{
                    marginTop: -6,
                    marginBottom: -13
                }}
                stackable={false}
            >
                <Modal
                    open={this.state.modalOpen}
                    size="large"
                    style={{
                        marginTop: "0px !important",
                        marginLeft: "0",
                        paddingRight: "0"
                    }}
                >
                    <Modal.Header>Profile Picture</Modal.Header>
                    <Modal.Content image scrolling>
                        <Modal.Description>
                            <Header>Modal Header</Header>
                            <p>
                                This is an example of expanded content that will
                                cause the modal's dimmer to scroll
                            </p>

                            <Image
                                src={require("/resources/Reed Stock - Resume.jpg")}
                                size="massive"
                            />
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button primary onClick={this.closeModal}>
                            Close <Icon name="chevron right" />
                        </Button>
                    </Modal.Actions>
                </Modal>

                <Popup
                    content="Take a look at my resume."
                    position="bottom center"
                    trigger={
                        <Button
                            inverted
                            size="large"
                            circular
                            icon="file alternate"
                            onClick={this.openModal}
                        />
                    }
                />

                <Popup
                    content="Check out my Github!"
                    position="bottom center"
                    trigger={
                        <Button
                            link="https://github.com/rstock08"
                            size="large"
                            inverted
                            circular
                            icon="github"
                            onClick={this.redirectOnClick}
                        />
                    }
                />

                <Popup
                    content="Connect with me on Linkedin!"
                    position="bottom center"
                    trigger={
                        <Button
                            link="https://www.linkedin.com/in/reed-stock/"
                            size="large"
                            inverted
                            circular
                            icon="linkedin"
                            onClick={this.redirectOnClick}
                        />
                    }
                />

                <Popup
                    content="Reach out directly to my email (ReedStock1992@gmail.com)"
                    position="bottom right"
                    trigger={
                        <Button
                            link="mailto:ReedStock1992@gmail.com"
                            size="large"
                            inverted
                            circular
                            icon="mail"
                            onClick={this.redirectOnClick}
                        />
                    }
                />
            </Grid>
        );
    }
}
/*
                        <Popup
                            content="Take a look at my resume."
                            position="bottom center"
                            trigger={
                                <Button
                                    link="https://github.com/rstock08"
                                    size="large"
                                    inverted
                                    circular
                                    icon="github"
                                    onClick={this.redirectOnButtonClick}
                                />
                            }
                        />
*/
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
            </div>
            
            <Popup
                content="Check out my github!"
                trigger={}
                />

            */
