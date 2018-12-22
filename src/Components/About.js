import React from "react";

class About extends React.Component{
    render(){
        return(
            <React.Fragment>
                <section className="top-content-about">
                    <img src="img/jumbo-about.png" alt="City photo with sunset background" />
                    <div className="text-container-about">
                        <h2>About</h2>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to
                        corporate
                        strategy foster collaborative thinking to further the overall value proposition. Organically grow the
                        holistic
                        world view of disruptive innovation via workplace diversity and empowerment.</p>
                    </div>
                </section>

                
                <section className="middle-content-about">
                    <div className="card">
                        <img src="img/about-plan.png" alt="strategy" />
                        <h3>Strategy</h3>
                        <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value
                        proposition.</p>
                        <button>Learn More</button>
                    </div>

                    <div className="card">
                        <img src="img/about-working.png" alt="strategy" />
                        <h3>How We Work</h3>
                        <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                        <button>Learn More</button>
                    </div>

                    <div className="card">
                        <img src="img/about-office.png" alt="strategy" />
                        <h3>Places We Work</h3>
                        <p>terative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                        <button>Learn More</button>
                    </div>

                    <div className="card">
                        <img src="img/about-meeting.png" alt="strategy" />
                        <h3>Collaboration</h3>
                        <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                        <button>Learn More</button>
                    </div>

                </section>

                <section className="bottom-content-about">
                    <div className="bottom-cta">
                        <h3>Let's Work Together</h3>
                        <p>
                            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate
                            strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic
                            world view of disruptive innovation via workplace diversity and empowerment.
                        </p>
                    </div>
                </section>
            </React.Fragment>
        )
    }    
}

export default About;