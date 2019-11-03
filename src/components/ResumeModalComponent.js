import React, { Component } from "react";
import { Button, Modal, Image, Header, Icon } from "semantic-ui-react";

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
                open={this.props.modalOpen}
                size="large"
                style={{
                    marginTop: "0px !important",
                    marginLeft: 200,
                    paddingRight: 0
                }}
            >
                <Modal.Header>Profile Picture</Modal.Header>
                <Modal.Content image scrolling>
                    <Modal.Description>
                        <Image
                            src={require("/resources/Reed Stock - Resume.jpg")}
                            size="massive"
                        />
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions style={{ marginBottom: -200 }}>
                    <Button
                        positive
                        icon
                        labelPosition="right"
                        onClick={this.props.downloadResume}
                    >
                        <Icon name="download" />
                        Download
                    </Button>
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
