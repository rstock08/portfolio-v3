import React, { Component } from "react";
import { Popup, Button, Grid, Link } from "semantic-ui-react";

export default class SocialMediaComponent extends Component {
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
                            onClick={this.props.openModal}
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
