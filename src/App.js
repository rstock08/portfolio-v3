// Import react and the component classes
import React, { Component, createRef } from "react";
import { Sticky } from "semantic-ui-react";
import NavbarComponent from "./components/NavbarComponent";
import JumbotronComponent from "./components/JumbotronComponent";
import ProfileComponent from "./components/ProfileComponent";
import ProjectExamplesComponent from "./components/ProjectExamplesComponent";
import ContactMeComponent from "./components/ContactMeComponent";
import FooterComponent from "./components/FooterComponent";
import ResumeModalComponent from "./components/ResumeModalComponent";

// Creating a class called App which uses Component
class App extends Component {
    contextRef = createRef();

    state = { modalOpen: false };
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
                <Sticky context={this.contextRef}>
                    <NavbarComponent openModal={this.openModal} />
                </Sticky>
                <JumbotronComponent />
                <ProfileComponent openModal={this.openModal} />
                {this.state.modalOpen ? (
                    <ResumeModalComponent
                        modalOpen={this.state.modalOpen}
                        openModal={this.openModal}
                        closeModal={this.closeModal}
                        downloadResume={this.downloadResume}
                    />
                ) : null}
                <ProjectExamplesComponent />
                <ContactMeComponent />
                <FooterComponent />
            </div>
        );
    }
}

// Other files will be able to import this App (look at index.js import statements
export default App;
