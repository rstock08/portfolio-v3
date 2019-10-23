import React, { Component } from "react";
import { useBooleanKnob } from "@stardust-ui/docs-components";
import { Header, Image, Menu, Ref, Segment, Sidebar } from "semantic-ui-react";

export default class SocialMediaComponent extends Component {
    state = { activeItem: "home" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const segmentRef = React.useRef();
        const [visible, setVisible] = useBooleanKnob({ name: "visible" });

        return (
            <Sidebar.Pushable as={Segment.Group} raised>
                <Sidebar
                    as={Menu}
                    animation="overlay"
                    icon="labeled"
                    inverted
                    onHide={() => setVisible(false)}
                    vertical
                    target={segmentRef}
                    visible={visible}
                    width="thin"
                >
                    <Menu.Item as="a">Home</Menu.Item>
                    <Menu.Item as="a">Games</Menu.Item>
                    <Menu.Item as="a">Channels</Menu.Item>
                </Sidebar>

                <Ref innerRef={segmentRef}>
                    <Segment secondary>
                        <Header as="h3">Clickable area</Header>
                        <p>
                            When you will click there, the sidebar will be
                            closed.
                        </p>
                    </Segment>
                </Ref>

                <Segment>
                    <Header as="h3">Application Content</Header>
                    <Image src="/images/wireframe/paragraph.png" />
                </Segment>
            </Sidebar.Pushable>
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
