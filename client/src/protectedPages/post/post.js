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
                <Label for="exampleSelectMulti">Select Category</Label>
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
                <Label for="exampleText">Subject</Label>
                <Input
                  type="textarea"
                  name="subject"
                  id="exampleText"
                  onChange={this.handleInputChange}
                  value={this.state.subject}
                  placeholder="Brief subject line"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Blog Post</Label>
                <Input
                  className="formText"
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
        </div>
      </div>
    );
  }
}
export default Post;
