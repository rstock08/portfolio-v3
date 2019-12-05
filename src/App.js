// Import react and the component classes
import React, { Component, createRef } from "react";
import { Waypoint } from "react-waypoint";
import { Sticky } from "semantic-ui-react";
import NavbarComponent from "./components/NavbarComponent";
import JumbotronComponent from "./components/JumbotronComponent";
import AboutMeComponent from "./components/AboutMeComponent";
import ProjectExamplesComponent from "./components/ProjectExamplesComponent";
import ContactMeComponent from "./components/ContactMeComponent";
import FooterComponent from "./components/FooterComponent";
import ResumeModalComponent from "./components/ResumeModalComponent";

// Creating a class called App which uses Component
class App extends Component {
    contextRef = createRef();

    state = { modalOpen: false, activeMenuItem: "home" };

    changeActiveMenuItem = newActiveMenuItem => {
        this.setState({ activeMenuItem: newActiveMenuItem });
    };

    closeModal = () => this.setState({ modalOpen: false });

    openModal = () => this.setState({ modalOpen: true });
    
    downloadResume = () => {
        console.log("Downloading pdf");
        <DownloadLink
            filename="/resources/Reed Stock - Resume.pdf.pdf"
            exportFile={() => "My cached data"}
        >
            Save to disk
        </DownloadLink>;
    };

    render() {
        return (
            <div ref={this.contextRef}>
                <section id="home">
                    <Sticky context={this.contextRef}>
                        <NavbarComponent
                            openModal={
                                (this.openModal,
                                this.state.activeMenuItem,
                                this.changeActiveMenuItem)
                            }
                        />
                    </Sticky>
                    <JumbotronComponent />
                    <Waypoint onEnter={this.changeActiveMenuItem("home")} />
                </section>
                <section id="about" style={{ paddingTop: 100, marginTop: -75 }}>
                    <Waypoint onEnter={this.changeActiveMenuItem("about")} />
                    <AboutMeComponent openModal={this.openModal} />
                </section>
                {this.state.modalOpen ? (
                    <ResumeModalComponent
                        modalOpen={this.state.modalOpen}
                        openModal={this.openModal}
                        closeModal={this.closeModal}
                        downloadResume={this.downloadResume}
                    />
                ) : null}
                <section
                    id="contact-me"
                    style={{ paddingTop: 100, marginTop: -75 }}
                >
                    <Waypoint
                        onEnter={this.changeActiveMenuItem("contact-me")}
                    />
                    <ContactMeComponent />
                </section>
                <FooterComponent />
            </div>
        );
    }
}

// Other files will be able to import this App (look at index.js import statements
export default App;
