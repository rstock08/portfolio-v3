import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Grid, GridRow, GridColumn } from "semantic-ui-react";

export default class ProfileComponent extends Component {
    render() {
        return (
            <Grid centered>
                <GridRow style={{ backgroundColor: "red" }}>
                    <GridColumn width={3}></GridColumn>
                    <GridColumn width={10}>
                        <Carousel autoPlay>
                            <div>
                                <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div>
                                <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
                                <p className="legend">Legend 2</p>
                            </div>
                            <div>
                                <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
                                <p className="legend">Legend 3</p>
                            </div>
                        </Carousel>
                    </GridColumn>
                    <GridColumn width={3}></GridColumn>
                </GridRow>
            </Grid>
        );
    }
}
