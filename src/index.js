// Imports react library
import React from "react";

// Imports react-dom library which allows the insertion of index.js into index.html
import ReactDOM from "react-dom";

// import App from local src/App.js
import App from "./App";

import "./index.css";

import "semantic-ui-css/semantic.min.css";

// Imports the div into the root element located in index.html
// ReactDOM.render(<div>React Element</div>, document.getElementById('root'));

// Imports the imported App into document with element id root
// ReactDOM.render(<App></App>, document.getElementById('root'));
// Shorter version - allowed due to no children of <App> being required
ReactDOM.render(<App />, document.getElementById("root"));
