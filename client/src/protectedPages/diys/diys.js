import React, { Component } from "react";
import CardCom from "../../components/Card/Card";
import "./diys.css";
import API from "../../utils/API";
import images from '../../images/kealohaPH.jpg'

let DefaultImg = images
console.log('DefaultImg ', DefaultImg)

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
              <CardCom
                className="videoCard"
                key={info._id}
                title={info.title}
                subject={info.subject}
                text={info.text}
                src={info.file || DefaultImg}
              />
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
