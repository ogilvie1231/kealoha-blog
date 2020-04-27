import React, { Component } from "react";
import CardCom from "../../components/Card/Card";
import "./videos.css";
import API from "../../utils/API";
import images from '../../images/kealohaPH.jpg'

let DefaultImg = images
console.log('DefaultImg ', DefaultImg)

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
        </div>
        <div>
          {this.state.videos.length ? (
            this.state.videos.map((info) => (
              <div>
              <CardCom
                className="videoCard"
                key={info._id}
                title={info.title}
                subject={info.subject}
                src={DefaultImg}
              />
              <br />
              </div>
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
