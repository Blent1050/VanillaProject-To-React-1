import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";


class App extends Component {

  render() {
    const Index = () => {
      return(
        <React.Fragment>
          <Navbar />
          <Home/>
          <Footer />
        </React.Fragment>
      )
    } 
    const About = () => {
      return(
        <React.Fragment>
          <Navbar />
          <About />
          <Footer />
        </React.Fragment>

      )
    } 
    const Blog = () => {
      return(
        <React.Fragment>
          <Navbar />
          <Footer />
        </React.Fragment>
      )
    }
    const Contact = () => {
      return(
        <React.Fragment>
          <Navbar />
          <Footer />
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
