import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import "./about.css";

class About extends Component {
  render() {
    return (
      <div>
        <div>
          {/* <div>
            <img
              className="pageImg"
              src="images/home1.jpg"
              alt="Kealoha img"
            ></img>
          </div> */}

          <div className="introText">
            <h2>A little about me</h2>
            <hr />
          </div>
          <div className='aboutMe'>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              quo dicta velit vel corrupti! Libero quia atque in modi,
              doloribus, magnam culpa cupiditate dignissimos iste ducimus
              possimus eum sapiente. Ex! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Accusantium vero porro laborum nemo sapiente
              reiciendis itaque eaque nihil, dolorum iure rem, quas, error
              doloremque repellendus perferendis earum dolorem atque ipsa? Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. At odit magnam
              distinctio placeat perspiciatis, eum soluta quaerat ducimus
              beatae. Nulla dolore ducimus aspernatur a libero consectetur illum
              incidunt iusto in. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptate sint, beatae iste, similique nihil
              illum minima cum possimus natus veritatis amet, nostrum maiores
              perspiciatis nisi. Repudiandae saepe maxime quod illum. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Doloribus saepe
              sit earum quo facere numquam asperiores, ipsa porro illo in veniam
              officiis necessitatibus, voluptatibus, id nostrum odio totam vero?
              Saepe!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
