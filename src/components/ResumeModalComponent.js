import React, { Component } from "react";
import { Button, Modal, Image, Icon } from "semantic-ui-react";

export default class ResumeModalComponent extends Component {
    constructor(props) {
        super(props);
    }

    redirectOnClick = (e, data) => {
        console.log(e + data);
        window.open(data.link);
    };

    render() {
        return (
            <Modal
                style={{ marginLeft: "15%" }}
                open={this.props.modalOpen}
                size="large"
            >
                <Modal.Header>Reed's Resume</Modal.Header>
                <Modal.Content scrolling style={{ marginBottom: 80 }}>
                    <Image
                        src={require("/resources/Reed Stock - Resume.jpg")}
                    />
                </Modal.Content>
                <Modal.Actions>
                    {/* <Button
                        positive
                        icon
                        labelPosition="right"
                        onClick={this.props.downloadResume}
                    >
                        <Icon name="download" />
                        Download
                    </Button> */}
                    <Button
                        negative
                        icon
                        labelPosition="right"
                        onClick={this.props.closeModal}
                    >
                        <Icon name="cancel" />
                        Close
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}
