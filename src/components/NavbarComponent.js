import React, { Component } from "react";
import { Menu, Segment, Transition } from "semantic-ui-react";
import SocialMediaComponent from "./SocialMediaComponent";

export default class NavbarComponent extends Component {
    state = { activeItem: "home", visible: false };

    componentDidMount() {
        this.setState({ visible: true });
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Transition
                visible={this.state.visible}
                animation="slide down"
                duration={1300}
            >
                <div style={{ backgroundColor: "black" }}>
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
                                href="#contact-me"
                                name="contact-me"
                                active={activeItem === "contact-me"}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                href="#project-examples"
                                name="project-examples"
                                active={activeItem === "project-examples"}
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
            </Transition>
        );
    }
}
