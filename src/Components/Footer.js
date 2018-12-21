import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>
                <footer>
                    <nav>
                        <a href="index.html">Home</a>
                        <a href="about.html">About</a>
                        <a href="#">Products</a>
                        <a href="blog.html">Blog</a>
                        <a href="contact.html">Contact</a>
                    </nav>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;