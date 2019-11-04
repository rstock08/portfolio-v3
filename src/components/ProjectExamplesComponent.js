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
                    style={{ paddingLeft: "2%", paddingRight: "2%" }}
                >
                    <GridColumn width={10}>
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
                    <GridColumn width={3}>
                        <Image
                            src={require("/resources/placeholder.jpg")}
                            centered
                        />
                        <Image
                            src={require("/resources/placeholder.jpg")}
                            centered
                        />
                        <Image
                            src={require("/resources/placeholder.jpg")}
                            centered
                        />
                    </GridColumn>
                    <GridColumn width={3}>
                        <Image
                            src={require("/resources/placeholder.jpg")}
                            centered
                        />
                        <Image
                            src={require("/resources/placeholder.jpg")}
                            centered
                        />
                        <Image
                            src={require("/resources/placeholder.jpg")}
                            centered
                        />
                    </GridColumn>
                </GridRow>
            </Grid>
        );
    }
}
