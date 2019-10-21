import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Grid, GridRow, GridColumn } from "semantic-ui-react";

export default class ProfileComponent extends Component {
    render() {
        return (
            <GridRow
                centered
                style={{ backgroundColor: "red", marginTop: -20 }}
            >
                <GridColumn width={0}></GridColumn>
                <GridColumn width={16}>
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
                <GridColumn width={0}></GridColumn>
            </GridRow>
        );
    }
}
