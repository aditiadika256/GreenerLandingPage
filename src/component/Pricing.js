import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";


//import images
import HomeUrl from '../assets/images/home-border.png';
import SolarPanel from "../assets/images/solarpanel2.jpg";
import WindTurbine from "../assets/images/windturbine1.jpg";
import ndvi from "../assets/images/ndvicam.png";

export default class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pricing: [
        {
          id: 1,
          title: "Starter",
          description: 'Ideal for budding plant parents looking for a helping hand.',
          icon: 'mdi-account',
          titlePrimary: false,
          regularprice: 'Rp.120.000',
          saleprice: 'Rp.79.000',
          pricingTag: false,
          child: [
            { btitle: 'Plant', title: "Detection", icon: "mdi-checkbox-marked-circle text-success" },
            { btitle: 'Measurement', title: "of plant condition", icon: "mdi-checkbox-marked-circle text-success" },
            { btitle: 'Identify', title: "plant diseases", icon: "mdi-close-circle text-danger" },
            { btitle: 'Care', title: "recommendations", icon: "mdi-close-circle text-danger" },
          ],
        },
        {
          id: 2,
          title: "Personal",
          titlePrimary: true,
          description: 'Plant pros and passionate green thumbs who want ultimate control and confidence.',
          icon: 'mdi-account-multiple text-primary',
          regularprice: 'Rp.150.000',
          saleprice: 'Rp.99.000',
          pricingTag: true,
          child: [
            { btitle: 'Plant', title: "Detection", icon: "mdi-checkbox-marked-circle text-success" },
            { btitle: 'Measurement', title: "of plant condition", icon: "mdi-checkbox-marked-circle text-success" },
            { btitle: 'Identify', title: "plant diseases", icon: "mdi-close-circle text-success" },
            { btitle: 'Care', title: "recommendations", icon: "mdi-close-circle text-danger" },
          ],
        },
        {
          id: 3,
          title: "Ultimate",
          description: 'Semper urna veal tempus pharetra elit habisse platea dictumst.',
          titlePrimary: false,
          icon: 'mdi-account-multiple-plus',
          regularprice: 'Rp.200.000',
          saleprice: 'Rp.129.000',
          pricingTag: false,
          child: [
            { btitle: 'Plant', title: "Detection", icon: "mdi-checkbox-marked-circle text-success" },
            { btitle: 'Measurement', title: "of plant condition", icon: "mdi-checkbox-marked-circle text-success" },
            { btitle: 'Identify', title: "plant diseases", icon: "mdi-close-circle text-success" },
            { btitle: 'Care', title: "recommendations", icon: "mdi-close-circle text-success" },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section" id="pricing">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="title-box text-center">
                  <h3 className="title-heading">Our Tech Product</h3>
                  <p className="text-muted f-17 mt-3">Embrace the future of agriculture and experience the transformative power of technology.</p>
                  <img src={HomeUrl} height="15" className="mt-3" alt="" />
                </div>
              </Col>
            </Row>
            <Row className="mt-5 pt-4">
              {/* Render Pricing items */}
              {this.state.pricing.map((item, key) => (
                <Col lg="4" key={key}>
                  <div className="pricing-box mt-4">
                    {item.pricingTag && (
                      <div className="pricing-badge"><span className="badge">Featured</span> </div>
                    )}

                    <i className={"h1 mdi " + item.icon}></i>
                    {(item.titlePrimary === true) ?
                      <h4 className="f-20 text-primary">{item.title}</h4>
                      :
                      <h4 className="f-20">{item.title}</h4>
                    }

                    <div className="mt-4 pt-2">
                      <p className="mb-2 f-18">Features</p>
                      {item.child.map((linkItem, linkkey) => (
                        <p className="mb-2" key={linkkey}><i
                          className={"mdi " + linkItem.icon + " f-18 mr-2"}></i><b>{linkItem.btitle}</b> {linkItem.title}</p>
                      ))} 
                    </div>
                    <p className="mt-4 pt-2 text-muted">{item.description}
                    </p>
                    <div className="pricing-plan mt-4 pt-2">
                      <h4 className="text-muted"><s> {item.regularprice}</s> <span className="plan pl-3 text-dark">{item.saleprice}</span></h4>
                      <p className="text-muted mb-0">Per Month</p>
                    </div>
                    <div className="mt-4 pt-3">
                      <Link to="#" className="btn btn-primary btn-rounded">Purchase Now</Link>
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
