import React, { Component } from "react";
import JumboDel from "../../components/JumboDel/jumbotron";
import API from "../../utils/API";
import { Jumbotron, Button } from "reactstrap";
import "./homeP.css";
import InputGroup from "reactstrap/lib/InputGroup";

class HomeP extends Component {
  state = {
    blog: [],
  };

  componentDidMount() {
    this.loadAll();
  }

  loadAll = () => {
    API.getAll("Blog")
      .then((res) => {
        this.setState({
          blog: res.data,
        });
      })
      .catch((error) => {
        console.log("blog loadAll error: ", error);
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
          <div>
            <img
              className="pageImg"
              src="images/home1.jpg"
              alt="Kealoha img"
            ></img>

            {this.state.blog.length ? (
              this.state.blog.map((info) => (
                <div>
                  <Jumbotron className="JumboDisp" key={info._id}>
                    <h1 className="display-3">{info.title}</h1>
                    <p className="lead">{info.subject}</p>
                    <hr className="my-2" />
                    <p className="blogText">{info.text}</p>
                    <p className="lead">
                    <Button
                    className="deleteButton"
                    color="primary"
                    onClick={() => this.delete(info.category, info._id)}
                  >
                    Delete
                  </Button>
                    </p>
                  </Jumbotron>

                  <br />
                  {/* <div className="spacer">

                  </div> */}
                </div>
              ))
            ) : (
              <div>
                <hr />
                <h2>There are no blog posts at this time</h2>
              </div>
            )}
          </div>
          {/* <Jumbotron className='homeDisp'>
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
          </Jumbotron> */}
        </div>
      </div>
    );
  }
}
export default HomeP;
