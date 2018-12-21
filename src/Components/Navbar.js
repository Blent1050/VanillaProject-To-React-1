import React from "react";


import LambdaLogo from "/Users/Brandon/Documents/Projects/lambdasite/src/img/lambda-black.png"

class Navbar extends React.Component{
    render(){
        return(
            <nav>
                <div className="navigation-style">
                    <a href="index" ><img src={LambdaLogo} alt="Lambda Logo"/></a>
                    <a href="index">Home</a>
                    <a href="about">About</a>
                    <a href="#">Products</a>
                    <a href="blog">Blog</a>
                    <a href="contact">Contact</a>
                </div>
            </nav>

        )
    }
}

export default Navbar;