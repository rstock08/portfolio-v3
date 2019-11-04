import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import SocialMediaComponent from "./SocialMediaComponent";

export default class NavbarComponent extends Component {
    state = { activeItem: "home" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <div style={{ backgroundColor: "black", marginTop: -10 }}>
                <Segment inverted>
                    <Menu stackable inverted pointing secondary widths={5}>
                        <Menu.Item
                            href="#home"
                            name="home"
                            active={activeItem === "home"}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            href="#about"
                            name="about"
                            active={activeItem === "about"}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            href="#project-examples"
                            name="project-examples"
                            active={activeItem === "project-examples"}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            href="#reach-out"
                            name="reach-out"
                            active={activeItem === "reach-out"}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item position="right">
                            <SocialMediaComponent
                                openModal={this.props.openModal}
                            />
                        </Menu.Item>
                    </Menu>
                </Segment>
            </div>
        );
    }
}
