import React, { Component } from "react";
import { Menu, Segment, Transition } from "semantic-ui-react";
import SocialMediaComponent from "./SocialMediaComponent";

export default class NavbarComponent extends Component {
    state = { visible: false };

    componentDidMount() {
        this.setState({ visible: true });
    }

    handleItemClick = (e, { name }) => {
        this.props.changeActiveMenuItem(e.name);
    };

    render() {
        return (
            <Transition
                visible={this.state.visible}
                animation="slide down"
                duration={1300}
            >
                <div style={{ backgroundColor: "black" }}>
                    <Segment inverted>
                        <Menu stackable inverted pointing secondary widths={4}>
                            <Menu.Item
                                href="#home"
                                name="home"
                                active={this.props.activeMenuItem === "home"}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                href="#about"
                                name="about"
                                active={this.props.activeMenuItem === "about"}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                href="#contact-me"
                                name="contact-me"
                                active={
                                    this.props.activeMenuItem === "contact-me"
                                }
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
