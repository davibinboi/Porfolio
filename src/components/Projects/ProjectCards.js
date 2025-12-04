import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsYoutube } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ paddingTop: "15px", paddingBottom: "15px", paddingLeft: "50px", paddingRight: "50px" }}>

      {/* Optional image */}
      {props.imgPath && (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}

      <Card.Body>
        <Card.Title style = {{whiteSpace: "pre-line", textAlign: "left", lineHeight: "1.8rem"}}>{props.title}</Card.Title>

        {/* Bullet points appear on separate lines */}
        <Card.Text style={{ whiteSpace: "pre-line", textAlign: "left" }}>
          {props.description}
        </Card.Text>

        {/* GitHub button only appears if ghLink is provided */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            {props.isBlog ? "Blog" : "Learn More"}
          </Button>
        )}

        {/* Demo button only appears if demoLink is provided */}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: props.ghLink ? "10px" : "0px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
