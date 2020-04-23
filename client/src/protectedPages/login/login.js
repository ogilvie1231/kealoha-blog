import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import LoginButton from "../../components/LoginButton/login"
import "./login.css";

class Login extends Component {
  render() {
    return (
      <div>
        <div>
            <div>
              <img className='pageImg' src="images/login.jpg" alt='login'></img>
            </div>
            {/* <h1 className="introText">Coming Soon</h1> */}
          <Jumbotron className='homeDisp'>
            <h1 className="display-3">Welcome Kealoha!</h1>
            <p className="lead">
              I hope you are having a wonderful day!
            </p>
            <hr className="my-2" />
            <p>
             Login in below
            </p>
            <p className="lead">
              <LoginButton />
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  };
};
export default Login;
