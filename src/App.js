import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from "./Components/Navbar";

class App extends Component {

  render() {
    const Index = () => {
      return(
        <React.Fragment>
          <Navbar />
        </React.Fragment>
      )
    } 
    const About = () => {
      return(
        <React.Fragment>
          <Navbar />
        </React.Fragment>

      )
    } 
    const Blog = () => {
      return(
        <React.Fragment>
          <Navbar />
        </React.Fragment>
      )
    }
    const Contact = () => {
      return(
        <React.Fragment>
          <Navbar />
        </React.Fragment>
      )
    }

    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Index} />
          <Route path="/index/"  component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/blog/" component={Blog} />
          <Route path="/contact/" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;