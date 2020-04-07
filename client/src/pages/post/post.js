import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Jumbotron } from "reactstrap";
import "../post/post.css";
import API from "../../utils/API";

class Post extends Component {
  state = {
    category: "",
    title: "",
    text: "",
    file: "",
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
    // console.log("handleInputChange value: ", value);
    // console.log("handleInputChange name: ", name);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { category, title, text, file } = this.state;
    const newContent = { category, title, text, file };

    console.log("newContent: ", newContent);

    API.saveOne({
      newContent,
    })
      .then((res) => {
        console.log("res.data: ", res.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  render() {
    return (
      <div>
        <div className="container">
          <Jumbotron className="postForm">
            <Form>
              <FormGroup>
                <Label for="exampleSelectMulti">Select Multiple</Label>
                <Input
                  type="select"
                  name="category"
                  onChange={this.handleInputChange}
                  value={this.state.category}
                >
                  <option>Blog</option>
                  <option>DIY</option>
                  <option>Videos</option>
                  <option>Trips</option>
                </Input>
              </FormGroup>

              {/* <FormGroup
                tag="fieldset"
                onChange={this.handleInputChange}
                value={this.state.category}
              >
                <legend>Radio Buttons</legend>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="category"
                      // onChange={this.handleInputChange}
                      // value={this.state.category}
                    />{" "}
                    Blog
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="category"
                      // onChange={this.handleInputChange}
                      // value={this.state.category}
                    />{" "}
                    DIY
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="category"
                      // onChange={this.handleInputChange}
                      // value={this.state.category}
                    />{" "}
                    Videos
                  </Label>
                </FormGroup>
              </FormGroup> */}

              <FormGroup>
                <Label for="exampleTitle">Title</Label>
                <Input
                  type="titlearea"
                  name="title"
                  id="exampleTitle"
                  onChange={this.handleInputChange}
                  value={this.state.title}
                  placeholder="Title"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input
                  type="textarea"
                  name="text"
                  id="exampleText"
                  onChange={this.handleInputChange}
                  value={this.state.text}
                  placeholder="Enter your blog post here!"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input
                  type="file"
                  name="file"
                  id="exampleFile"
                  onChange={this.handleInputChange}
                  value={this.state.file}
                  placeholder="Enter your blog post here!"
                />
              </FormGroup>

              <Button onClick={this.handleFormSubmit}>Submit</Button>
            </Form>
          </Jumbotron>

          <Jumbotron className="homeDisp">
            <h1 className="display-3">Kealoha Ogilvie</h1>
            <p className="lead">Follow along with our adventures!</p>
            <hr className="my-2" />
            <p>Below are my exploits</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
export default Post;
