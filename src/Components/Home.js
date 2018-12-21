import React from "react";

import Jumbo from "../img/jumbo.jpg"


class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <section className="top-content">
                    <img src={Jumbo} alt="Snapshot of cars on the highway."/>
                    <div className="text-container">
                        <h2>The Future</h2>
                        <p>Proin sed quam sed tellus vestibulum ultrices quis in nunc. Phasellus id dui id tortor tincidunt efficitur. Proin faucibus imperdiet erat, non varius lacus. Maecenas non nisl id turpis egestas tincidunt. Nam condimentum venenatis magna eget finibus.</p>
                    </div>
                    <div className="text-container">
                        <h2>The Past</h2>
                        <p>Proin sed quam sed tellus vestibulum ultrices quis in nunc. Phasellus id dui id tortor tincidunt efficitur. Proin faucibus imperdiet erat, non varius lacus. Maecenas non nisl id turpis egestas tincidunt. Nam condimentum venenatis magna eget finibus.</p>
                    </div>
                </section>
        
                <section className="middle-content">
                
                    <h2>Why Did It Have To Be Boxes...</h2>
                    
                    <div className="boxes">
                        <div className="box " id="box1">Box 1</div>
                        <div className="box " id="box2">Box 2</div>
                        <div className="box " id="box3">Box 3</div>
                        <div className="box " id="box4">Box 4</div>
                        <div className="box " id="box5">Box 5</div>
                        <div className="box " id="box6">Box 6</div>
                        <div className="box " id="box7">Box 7</div>
                        <div className="box " id="box8">Box 8</div>
                        <div className="box " id="box9">Box 9</div>
                        <div className="box " id="box10">Box 10</div>
                    </div>
                
                </section>

                <section className="bottom-content">

                    <div className="text-container">
                        <h2>That's</h2>
                        <p>Phasellus id dui id tortor tincidunt efficitur. Proin sed quam sed tellus vestibulum ultrices quis in nunc.</p>
                    </div>
                    <div className="text-container">
                        <h2>No</h2>
                        <p>Phasellus id dui id tortor tincidunt efficitur. Proin sed quam sed tellus vestibulum ultrices quis in nunc.</p>
                    </div>
                    <div className="text-container">
                        <h2>Moon</h2>
                        <p>Phasellus id dui id tortor tincidunt efficitur. Proin sed quam sed tellus vestibulum ultrices quis in nunc.</p>
                    </div>

                </section>
            </React.Fragment>
        )
    }
}

export default Home;