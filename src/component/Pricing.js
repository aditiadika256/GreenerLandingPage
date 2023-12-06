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
          title: "Solar Panels",
          description: 'For sustainable agriculture by providing a clean and renewable energy source for various agricultural operations.',
          icon: SolarPanel,
          titlePrimary: false,
          regularprice: 'Rp.950.000',
          saleprice: 'Rp.699.000',
          pricingTag: false,
          child: [
            { title: 'Peak Power (Pmax) ', btitle: ": 120W", icon: "mdi-checkbox-marked-circle text-success" },
            { title: 'Cell Efficiency ', btitle: ": 21.5%", icon: "mdi-checkbox-marked-circle text-success" },
            { title: 'Max System Voltage ', btitle: ": 1000V", icon: "mdi-checkbox-marked-circle text-success" },
            { title: 'Dimension(cm) ', btitle: ": 100x67x3", icon: "mdi-checkbox-marked-circle text-success" },
          ],
        },
        {
          id: 2,
          title: "NDVI Cam Package",
          titlePrimary: true,
          description: 'Used to detect disease and plant health based on the vegetation index, which can then be used to dose fertilizer.',
          icon: ndvi,
          regularprice: 'Rp.600.000',
          saleprice: 'Rp.449.000',
          pricingTag: true,
          child: [
            { title: '10 ', btitle: "multispectral bands at 1.6 MP each", icon: "mdi-checkbox-marked-circle text-success" },
            { title: 'sharper imagery ', btitle: ": Panchromatic band for sharper imagery", icon: "mdi-checkbox-marked-circle text-success" },
            { title: 'Drone', btitle: "included", icon: "mdi-checkbox-marked-circle text-success" },
            { title: 'Apps ', btitle: ": Monitoring System", icon: "mdi-close-circle text-danger" },
          ],
        },
        {
          id: 3,
          title: "Wind Turbine",
          description: 'For sustainable agriculture by providing a clean and renewable energy source for various agricultural operations.',
          titlePrimary: false,
          icon: WindTurbine,
          regularprice: 'Rp.1.300.000',
          saleprice: 'Rp.999.000',
          pricingTag: false,
          child: [
            { title: 'Power ', btitle: " : Target Audience", icon: "mdi-checkbox-marked-circle text-success" },
            { title: 'Voltage ', btitle: " : User Account", icon: "mdi-checkbox-marked-circle text-success" },
            { title: 'Blade/material ', btitle: " : 5/Nylon Fiber", icon: "mdi-close-circle text-success" },
            { title: 'Generator ', btitle: " : three-phase permanent magnet AC generator", icon: "mdi-close-circle text-success" },
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

                    <img src={item.icon} height={100}></img>
                    {(item.titlePrimary === true) ?
                      <h4 className="f-20 text-primary">{item.title}</h4>
                      :
                      <h4 className="f-20">{item.title}</h4>
                    }

                    <div className="mt-4 pt-2">
                      <p className="mb-2 f-18">Features</p>
                      {item.child.map((linkItem, linkkey) => (
                        <p className="mb-2" key={linkkey}><i
                          className={"mdi " + linkItem.icon + " f-18 mr-2"}></i><b>{linkItem.title}</b> {linkItem.btitle}</p>
                      ))}
                    </div>
                    <p className="mt-4 pt-2 text-muted">{item.description}
                    </p>
                    <div className="pricing-plan mt-4 pt-2">
                      <h4 className="text-muted"><s> {item.regularprice}</s> <span className="plan pl-3 text-dark">{item.saleprice}</span></h4>
                      
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
