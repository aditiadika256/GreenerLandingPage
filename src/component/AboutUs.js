import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import { Link } from "react-router-dom";

import Img1 from '../assets/images/GreenerMockUp.png';

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        {
          id: '1',
          extraclass: '',
          icon: 'mdi-leaf',
          title: "Planet Power",
          description: 'Healthy crops are the superheroes of the environmental world.'
        },
        {
          id: '2',
          extraclass: 'pt-3',
          icon: 'mdi-solar-power',
          title: "Quality",
          description: "It's not just about quantity it's about quality you can savor."
        },
        {
          id: '3',
          extraclass: 'pt-3',
          icon: 'mdi-cogs',
          title: "Sustainable land management",
          description: 'Greener develops technology and system to help manage their land waste sustainably.'
        },
      ],
      
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light bg-features" id="aboutus">
          <Container>
            <Row className="align-items-center">
              <Col lg={5}>
                <div className="mt-4 home-img">
                  <div className="animation-2"></div>
                  <div className="animation-3"></div>
                  <img src={Img1} className="img-fluid" alt="" />
                </div>
              </Col>
              <Col lg={6} className="offset-lg-1">
                <div className="mt-4">
                  <h1 className="">About Us</h1>
                  <h3 className="mt-4">Greener solutions that make a difference</h3>
                  <p className="mt-2 text-muted">Greener is a startup that focuses on developing innovative solutions to address 
                        climate change and land degradation. With its innovative solutions, Greener wants to help save the planet. 
                        We believe that everyone can play a role in protecting the environment. With us, 
                        we can contribute to creating a more sustainable future.</p>

                  <div className="mt-4">
                    <Link to="#" className="btn btn-primary">Explore More</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section>
          <Container>
            <Row className="align-items-center mt-5 pt-4" id="counter">
                <Col lg={6}>
                  <div className="pr-4 mt-4">
                    <p className="text-uppercase">why us ? </p>
                    <h3>Unlock the Secrets of Crop Health: From Bountiful Harvests to a Thriving Planet</h3>
                    <p className="text-muted mt-3">Greener, as a driving force for change towards sustainability in Indonesia, understands 
                    that the challenges of climate change and land degradation require a holistic approach. Therefore, Greener not only 
                    focuses on technology development, but is also committed to building strong partnerships and collaboration with various 
                    stakeholders.</p>
                    <div className="mt-4 pt-1">
                      <Link to="#" className="btn btn-outline-primary">Discover More</Link>
                    </div>
                  </div>
                </Col>
                <Col lg={5} className="offset-lg-1">
                  <div className="counter-box">
                    {this.state.counters.map((counteritem, key) => (
                      <div className={ (counteritem.id !== '1') ? 'mt-4 pt-3' : 'mt-4' } key={key}>
                        <div className="media">
                          <div className="count-box bg-soft-primary text-center">
                            <h3 className="counter-count mb-1 text-primary"> 
                            <i className={"h1 mdi " + counteritem.icon}></i>
                              <span className="count-plus text-primary"> +</span></h3>
                            <p className="text-uppercase text-muted mb-0 f-14">{counteritem.title} </p>
                          </div>
                          <div className="media-body pl-4">
                            <p className="text-muted mb-0 mt-3">{counteritem.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
