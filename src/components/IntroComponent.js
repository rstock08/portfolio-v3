import React, { Component } from "react";
import { Image } from "semantic-ui-react";

export default class IntroComponent extends Component {
    render() {
        return (
            <Image
                fluid
                src={require("/resources/England-Overlay-Logo-Caption.png")}
            />
        );
    }
}
