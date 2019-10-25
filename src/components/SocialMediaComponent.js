import React, { Component } from "react";
import { Button } from "semantic-ui-react";

export default class SocialMediaComponent extends Component {
    render() {
        return (
            <div>
                <Button
                    circular
                    size={"big"}
                    floated={"right"}
                    color="grey"
                    icon="facebook"
                />
                <Button
                    circular
                    size={"big"}
                    floated={"right"}
                    color="twitter"
                    icon="twitter"
                />
                <Button
                    circular
                    size={"big"}
                    floated={"right"}
                    color="linkedin"
                    icon="linkedin"
                />
                <Button
                    circular
                    size={"big"}
                    floated={"right"}
                    color="google plus"
                    icon="google plus"
                />
            </div>
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
            </div>*/
