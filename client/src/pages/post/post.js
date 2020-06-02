import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Jumbotron } from "reactstrap";
import "../post/post.css";
import API from "../../utils/API";
import GetQuote from "../../components/Quote/Quote"


class Post extends Component {
  state = {
    category: "Blog",
    title: "",
    text: "",
    file: "",
    subject: "",
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { category, title, text, file, subject } = this.state;
    const newContent = { category, title, text, file, subject };

    console.log("newContent: ", newContent);

    API.saveOne({
      newContent,
    })
      .then((res) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log("API.saveOne post.js error: ", error);
      });
  };

  render() {
    return (
      
      <div>
        <div className="container">
          <Jumbotron className="postForm">
            {/* <GetQuote /> */}
            <Form>
              <FormGroup>
                <Label for="SelectMulti">Select Category</Label>
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

              <FormGroup>
                <Label for="Title">Title</Label>
                <Input
                  type="titlearea"
                  name="title"
                  id="Title"
                  onChange={this.handleInputChange}
                  value={this.state.title}
                  placeholder="Title"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Text">Subject</Label>
                <Input
                  type="textarea"
                  name="subject"
                  id="Text"
                  onChange={this.handleInputChange}
                  value={this.state.subject}
                  placeholder="Brief subject line"
                />
              </FormGroup>
              <FormGroup>
                <Label for="Text">Blog Post</Label>
                <Input

                  className="formText"
                  type="textarea"
                  name="text"
                  id="Text"
                  onChange={this.handleInputChange}
                  value={this.state.text}
                  placeholder="Enter your blog post here!"
                />
              </FormGroup>
              <FormGroup>
                <Label for="File">File</Label>
                <Input
                  type="textarea"
                  name="file"
                  id="File"
                  onChange={this.handleInputChange}
                  value={this.state.file}
                  placeholder="Enter your blog post here!"
                />
              </FormGroup>
              {/* <FormGroup>
                <Label for="File">File</Label>
                <Input
                  type="file"
                  name="file"
                  id="File"
                  onChange={this.handleInputChange}
                  value={this.state.file}
                  placeholder="Enter your blog post here!"
                />
              </FormGroup> */}

              <Button onClick={this.handleFormSubmit}>Submit</Button>
            </Form>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
export default Post;
