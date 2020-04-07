import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import "../home/home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
            <div>
              <img className='pageImg' src="images/home1.jpg" alt='Kealoha img'></img>
            </div>
            {/* <h1 className="introText">Coming Soon</h1> */}
          <Jumbotron className='homeDisp'>
            <h1 className="display-3">Kealoha Ogilvie</h1>
            <p className="lead">
              Follow along with our adventures!
            </p>
            <hr className="my-2" />
            <p>
              Below are my exploits
            </p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  };
};
export default Home;
