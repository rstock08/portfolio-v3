import { Container, Header, Grid, Image } from "semantic-ui-react";
import React, { Component } from "react";

export default class ProfileComponent extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "blue" }}>
                <div style={{ paddingTop: 60 }}>
                    <Image
                        src={require("/resources/profile.png")}
                        size="medium"
                        centered
                        circular
                    />
                </div>
                <div style={{ paddingTop: 60 }}>
                    <Container text fluid>
                        <Header as="h2">About Me</Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean massa
                            strong. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec
                            quam felis, ultricies nec, pellentesque eu, pretium
                            quis, sem. Nulla consequat massa quis enim. Donec
                            pede justo, fringilla vel, aliquet nec, vulputate
                            eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                            venenatis vitae, justo.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean massa
                            strong. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec
                            quam felis, ultricies nec, pellentesque eu, pretium
                            quis, sem. Nulla consequat massa quis enim. Donec
                            pede justo, fringilla vel, aliquet nec, vulputate
                            eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                            venenatis vitae, justo. Nullam dictum felis eu pede
                            link mollis pretium. Integer tincidunt. Cras
                            dapibus.
                        </p>
                    </Container>
                </div>
            </div>
        );
    }
}
