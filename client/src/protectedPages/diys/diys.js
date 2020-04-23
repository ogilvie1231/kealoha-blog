import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import CardCom from "../../components/Card/Card";
import "./diys.css";
import API from "../../utils/API";
import images from "../../images/kealohaPH.jpg";

let DefaultImg = images;
console.log("DefaultImg ", DefaultImg);

class DiyP extends Component {
  state = {
    diys: [],
  };

  componentDidMount() {
    this.loadAll();
  }

  loadAll = () => {
    API.getAll("DIY")
      .then((res) => {
        this.setState({
          diys: res.data,
        });
      })
      .catch((error) => {
        console.log("diys loadAll error: ", error);
      });
  };

  delete = (category, id) => {
    API.deleteOne(id)
      .then((res) => this.loadAll())
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div>
          <h2>DIYs</h2>
          <hr />
        </div>
        <div>
          {this.state.diys.length ? (
            this.state.diys.map((info) => (
              <Card className="videoCard col-3" key={info._id}>
                <CardImg top width="100%" src={DefaultImg} alt={info.title} />
                <CardBody>
                  <CardTitle>
                    <h2>{info.title}</h2>
                  </CardTitle>
                  <CardSubtitle>
                    <p>{info.subject}</p>
                  </CardSubtitle>
                  <CardText>
                    <p>{info.text}</p>
                  </CardText>
                  <Button
                    className="deleteButton"
                    color="primary"
                    onClick={() => this.delete(info.category, info._id)}
                  >
                    Delete
                  </Button>
                </CardBody>
              </Card>
            ))
          ) : (
            <h3>No content at this time</h3>
          )}
        </div>
      </div>
    );
  }
}

export default DiyP;
