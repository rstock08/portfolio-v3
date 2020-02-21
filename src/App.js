// Import react and the component classes
import React, { Component, createRef } from "react";
import { Pager } from "react-bootstrap";
//import { Waypoint } from "react-waypoint";
import ReactPageScroller from "react-page-scroller";
import { Grid, Divider, Sticky } from "semantic-ui-react";
import NavbarComponent from "./Components/NavbarComponent";
import ProfileComponent from "./Components/ProfileComponent";
import AboutMeComponent from "./Components/AboutMeComponent";
import ContactMeComponent from "./Components/ContactMeComponent";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: null };
    }

    handlePageChange = number => {
        this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
    };

    getPagesNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= 3; i++) {
            pageNumbers.push(
                <Pager.Item
                    key={i}
                    eventKey={i - 1}
                    onSelect={this.handlePageChange}
                >
                    {i}
                </Pager.Item>
            );
        }

        return [...pageNumbers];
    };

    goToPage = pageNumber => {
        this.reactPageScroller.goToPage(pageNumber);
    };

    contextRef = createRef();

    render() {
        const pagesNumbers = this.getPagesNumbers();
        return (
            <React.Fragment>
                <NavbarComponent />
                <ReactPageScroller
                    pageOnChange={this.handlePageChange}
                    customPageNumber={this.state.currentPage}
                >
                    <ProfileComponent />
                    <AboutMeComponent />
                    <ContactMeComponent />
                </ReactPageScroller>
            </React.Fragment>
        );
    }
}

// Other files will be able to import this App (look at index.js import statements
export default App;
