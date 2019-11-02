import React, { Component } from "react";
import { Popup, Button, Grid } from "semantic-ui-react";

export default class SocialMediaComponent extends Component {
    redirectOnButtonClick = (e, data) => {
        console.log(e + data);
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
                    content="Check out my Github!"
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
                            onClick={this.redirectOnButtonClick}
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
                            onClick={this.redirectOnButtonClick}
                        />
                    }
                />
            </Grid>
        );
    }
}

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
