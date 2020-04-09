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
import "./videos.css";
import API from "../../utils/API";

class VideoPage extends Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    this.loadAll();
  }

  loadAll = () => {
    API.getAll("Videos")
      .then((res) => {
        this.setState({
          videos: res.data,
        });
      })
      .catch((error) => {
        console.log("Videos loadAll error: ", error);
      });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Videos</h2>
          <hr />
        </div>
        <div>
          {this.state.videos.length ? (
            this.state.videos.map((info) => (
              <Card className="videoCard">
                <CardImg top width="100%" src={info.file} alt={info.title} />
                <CardBody>
                  <CardTitle>
                    <h2>{info.title}</h2>
                  </CardTitle>
                  <CardSubtitle>
                    <p>{info.subject}</p>
                  </CardSubtitle>
                  <CardText></CardText>
                  <Button
                    href={info.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    variant="primary"
                  >
                    Read More
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

export default VideoPage;
