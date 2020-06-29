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
            <div ref={this.contextRef} >
                <Waypoint
                    id="home"
                    onEnter={() => this.setState({ activeMenuItem: "home" })}
                />
                <section id="home" >
                    <Sticky context={this.contextRef} style={{ height: "0px", paddingBottom: "2%", marginBottom: "-10%" }}>
                        <NavbarComponent
                            openModal={this.openModal}
                            activeMenuItem={this.state.activeMenuItem}
                            changeActiveMenuItem={this.changeActiveMenuItem}
                        />
                    </Sticky>
                    <JumbotronComponent />
                </section>
                <Waypoint
                    onEnter={() => this.setState({ activeMenuItem: "about" })}
                />
                {/* style={{ paddingTop: 100, marginTop: -75 }} */}
                <section id="about" style={{ paddingTop: 100, marginTop: -75 }}>
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
                <Waypoint
                    onEnter={() =>
                        this.setState({ activeMenuItem: "contact-me" })
                    }
                />
                <section
                    id="contact-me"
                    style={{ paddingTop: 40, marginTop: -75 }}
                >
                    <ContactMeComponent />
                </section>
                <FooterComponent />
            </div>
        );
    }
}

// Other files will be able to import this App (look at index.js import statements
export default App;
