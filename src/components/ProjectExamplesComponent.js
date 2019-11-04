import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Grid, GridRow, GridColumn, Image } from "semantic-ui-react";

export default class ProfileComponent extends Component {
    render() {
        return (
            <Grid>
                <GridRow
                    columns={3}
                    style={{
                        paddingLeft: "5%",
                        paddingRight: "2%",
                        marginTop: -15,
                        marginBottom: -15,
                        backgroundColor: "yellow"
                    }}
                >
                    <GridColumn
                        mobile={16}
                        tablet={16}
                        computer={10}
                        largeScreen={10}
                        widescreen={10}
                    >
                        <Carousel
                            selectedItem={1}
                            showThumbs={false}
                            showStatus={false}
                            infiniteLoop
                            useKeyboardArrows
                            autoPlay
                            emulateTouch
                            transitionTime={1500}
                            animation="slide left"
                            showNextPrev={false}
                            showIndicators={true}
                        >
                            <div>
                                <img src={require("/resources/project1.png")} />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div>
                                <img src={require("/resources/project2.png")} />
                                <p className="legend">Legend 2</p>
                            </div>
                            <div>
                                <img src={require("/resources/project3.png")} />
                                <p className="legend">Legend 3</p>
                            </div>
                        </Carousel>
                    </GridColumn>
                    <GridColumn
                        mobile={8}
                        tablet={8}
                        computer={3}
                        largeScreen={3}
                        widescreen={3}
                    >
                        <Image
                            src={require("/resources/aws-logo.png")}
                            centered
                            size="small"
                        />
                        <Image
                            src={require("/resources/docker-logo.png")}
                            centered
                            size="small"
                        />
                        <Image
                            src={require("/resources/confluence-jira-logo.png")}
                            centered
                            size="small"
                        />
                    </GridColumn>
                    <GridColumn
                        mobile={8}
                        tablet={8}
                        computer={3}
                        largeScreen={3}
                        widescreen={3}
                        backgroundColor="white"
                    >
                        <Image
                            src={require("/resources/react-js-logo.png")}
                            centered
                            size="small"
                        />
                        <Image
                            src={require("/resources/javascript-logo.png")}
                            centered
                            size="small"
                        />
                        <Image
                            backgroundColor="white"
                            src={require("/resources/bootstrap-logo.png")}
                            centered
                            size="tiny"
                        />
                    </GridColumn>
                </GridRow>
            </Grid>
        );
    }
}
