import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./card.css";

const CardCom = (props) => {
  return (
    <div>
      <Card className="videoCard">
        <CardImg top width="100%" src={props.file} alt={props.title} />
        <CardBody>
          <CardTitle>
            <h2>{props.title}</h2>
          </CardTitle>
          <CardSubtitle>
            <p>{props.subject}</p>
          </CardSubtitle>
          <CardText></CardText>
          <Button
            href={props.link}
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            Read More
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardCom;
