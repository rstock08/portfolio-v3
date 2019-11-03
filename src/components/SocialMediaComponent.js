import React, { Component } from "react";
import ResumeModalComponent from "./ResumeModalComponent";
import { Popup, Button, Grid, Link } from "semantic-ui-react";
import DownloadLink from "react-download-link";

export default class SocialMediaComponent extends Component {
    state = { modalOpen: false };
    closeModal = () => this.setState({ modalOpen: false });
    openModal = () => this.setState({ modalOpen: true });
    downloadResume = () => {
        console.log("Downloading pdf");
        <DownloadLink
            filename="/resources/Reed Stock - Resume.pdf.pdf"
            exportFile={() => "My cached data"}
        >
            Save to disk
        </DownloadLink>;
    };

    redirectOnClick = (e, data) => {
        window.open(data.link);
    };

    render() {
        return (
            <Grid
                style={{
                    marginTop: -6,
                    marginBottom: -13
                }}
                stackable={false}
            >
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

                {this.state.modalOpen ? (
                    <ResumeModalComponent
                        modalOpen={this.state.modalOpen}
                        openModal={this.openModal}
                        closeModal={this.closeModal}
                        downloadResume={this.downloadResume}
                    />
                ) : null}
            </Grid>
        );
    }
}
