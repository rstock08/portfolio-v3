import React, { Component } from "react";
import { Menu, Transition, Grid } from "semantic-ui-react";

export default class NavbarComponent extends Component {
    state = { visible: false, activeItem: "home" };

    componentDidMount() {
        this.setState({ visible: true });
    }

    handleItemClick = (e, { name }) => {
        this.props.changeActiveMenuItem(e.name);
    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;
        return (
            <Transition
                visible={this.state.visible}
                animation="slide down"
                duration={1300}
            >
                <Grid centered style={{ backgroundColor: "red" }}>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Menu
                                color="yellow"
                                stackable
                                pointing
                                secondary
                                widths={3}
                            >
                                <Menu.Item
                                    name="home"
                                    active={activeItem === "home"}
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    name="About Me"
                                    active={activeItem === "About Me"}
                                    onClick={this.handleItemClick}
                                />
                                <Menu.Item
                                    name="Contact Me"
                                    active={activeItem === "Contact Me"}
                                    onClick={this.handleItemClick}
                                />
                            </Menu>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Transition>
        );
    }
}
