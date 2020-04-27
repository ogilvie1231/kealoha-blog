import React, { Component } from "react";
import CardCom from "../../components/Card/Card";
import "./trips.css";
import API from "../../utils/API";
import images from "../../images/kealohaPH.jpg";

let DefaultImg = images;
console.log("DefaultImg ", DefaultImg);

class Trips extends Component {
  state = {
    trips: [],
  };

  componentDidMount() {
    this.loadAll();
  }

  loadAll = () => {
    API.getAll("Trips")
      .then((res) => {
        this.setState({
          trips: res.data,
        });
      })
      .catch((error) => {
        console.log("Trips loadAll error: ", error);
      });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Trips</h2>
          <hr />
        </div>
        <div></div>
        <div>
          {this.state.trips.length ? (
            this.state.trips.map((info) => (
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

export default Trips;
