import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Jumbotron,
} from "reactstrap";
import "../post/post.css";

class Post extends Component {
  render() {
    return (
      <div>
        <div className='container'>
            <Jumbotron className='postForm'>
          <Form >
            <FormGroup tag="fieldset" className='radioOptions'>
              <legend>Select Category</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> Blog
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> DIY
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> Videos
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> Trips
                </Label>
              </FormGroup>
            </FormGroup>

            <FormGroup>
              <Label for="exampleText">Text Area</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input type="file" name="file" id="exampleFile" />

            </FormGroup>

            <Button>Submit</Button>
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
