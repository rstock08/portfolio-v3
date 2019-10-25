import React, { Component } from "react";
import { Menu, Segment, Icon } from "semantic-ui-react";

export default class NavbarComponent extends Component {
    state = { activeItem: "home" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <div style={{ backgroundColor: "black" }}>
                <Segment inverted>
                    <Menu icon inverted pointing secondary widths={5}>
                        <Menu.Item
                            name="home"
                            active={activeItem === "home"}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name="bio"
                            active={activeItem === "bio"}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name="projects-examples"
                            active={activeItem === "projects-examples"}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name="reach-out"
                            active={activeItem === "reach-out"}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Menu>
                            <Menu.Item
                                position={"right"}
                                name="gamepad"
                                active={activeItem === "gamepad"}
                                onClick={this.handleItemClick}
                            >
                                <Icon name="gamepad" />
                            </Menu.Item>

                            <Menu.Item
                                position={"right"}
                                name="video camera"
                                active={activeItem === "video camera"}
                                onClick={this.handleItemClick}
                            >
                                <Icon name="video camera" />
                            </Menu.Item>

                            <Menu.Item
                                position={"right"}
                                name="video play"
                                active={activeItem === "video play"}
                                onClick={this.handleItemClick}
                            >
                                <Icon name="video play" />
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Segment>
            </div>
        );
    }
}
