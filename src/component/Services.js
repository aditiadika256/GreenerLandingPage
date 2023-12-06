import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";


import { Link } from "react-router-dom";
import HomeUrl from '../assets/images/home-border.png';
import manageAgri from "../assets/images/get_show_banner.avif";
import training from "../assets/images/training.jpeg";
import campaign from "../assets/images/management_agritech.jpeg";



export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          id: 'service1',
          icon: manageAgri,
          title: "Management of agricultural technology, composting and waste",
          description: "Proper management of agricultural technology can help to increase agricultural productivity, reduce the use of chemicals, and conserve the environment. Some examples of agricultural technology management that can be done."
        },
        {
          id: 'service2',
          icon: campaign,
          title: "Public education and campaigns",
          description: 'Nature education and public campaigns are essential for raising awareness of the importance of protecting and conserving the natural world. By providing accurate information and engaging with the public, these efforts can help to shape public opinion, influence behavior, and create a more sustainable society.'
        },
        {
          id: 'service3',
          icon: training,
          title: "Training Courses about our Tech",
          description: 'Agriculture, solar panel, and turbine technology are all rapidly evolving fields with the potential to revolutionize the way we produce food, generate power, and move around. By learning the skills you need to use these technologies, you can help to create a more sustainable and equitable future.'
        },
      ],
      
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-services" id="services">
          <Container>
            <Row>
              <Col lg="12">
                <div className="title-box text-center">
                  <h3 className="title-heading mt-4">Our Services </h3>
                  <p className="text-muted f-17 mt-3">Optimize your fertilizer usage for maximum nutrient uptake and reduced environmental impact!.</p>

                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row className="mt-5 pt-4">
              {/* Render Footer Link */}
              {this.state.services.map((item, key) => (
                <Col lg={4} key={key}>
                  <div className="services-box p-4 mt-4">
                    <div className="bg-soft-primary p-4">
                    <img src={item.icon} height={150}></img>
                    </div>

                    <h5 className="mt-4">{item.title}</h5>
                    <p className="text-muted mt-3">{item.description}</p>

                    <div className="mt-3">
                      <Link to="#" className="text-primary f-16">Learn More <i className="mdi mdi-arrow-right ml-1"></i></Link>
                    </div>

                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
