import React, { Component } from "react";
import Jumbo from "../../components/jumbotron/jumbotron";
import API from "../../utils/API";
// import { Jumbotron, Button } from "reactstrap";
import "../home/home.css";

class Home extends Component {
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
                <Jumbo
                  key={info._id}
                  title={info.title}
                  subject={info.subject}
                  text={info.text}
                />
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
export default Home;
