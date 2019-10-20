import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";

export default class NavbarComponent extends Component {
    state = { activeItem: "home" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <div style={{ backgroundColor: "black" }}>
                <Segment inverted >
                    <Menu inverted pointing secondary fluid widths={4}>
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
                    </Menu>
                </Segment>
            </div>
        );
    }
}
