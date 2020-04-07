import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import "./diys.css";

class Diy extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <img
              className="pageImg"
              src="images/home1.jpg"
              alt="Kealoha img"
            ></img>
          </div>
          {/* <h1 className="introText">Coming Soon</h1> */}
          <Jumbotron className="homeDisp">
            <h1 className="display-3">Kealoha Ogilvie</h1>
            <p className="lead">DIY PAGE COMING SOON</p>
            <hr className="my-2" />
            <p>DIY PAGE COMING SOON</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
export default Diy;
