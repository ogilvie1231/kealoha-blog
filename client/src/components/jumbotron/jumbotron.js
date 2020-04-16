import React from "react";
import { Jumbotron, Button } from "reactstrap";

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron className="homeDisp" key={props._id}>
        <h1 className="display-3">{props.title}</h1>
        <p className="lead">{props.subject}</p>
        <hr className="my-2" />
        <p>{props.text}</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      
    </div>
  );
};

export default Jumbo;