import React from "react";
import { withRouter } from "react-router-dom";
import "./sentinel.css";
import "./sentinel.scss";
import Footer from "../../components/Footer/footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//Images
import senti_flow from "../../assets/senti_flow.png";
import dashboard from "../../assets/dashboard.png";
import search from "../../assets/search.png";
import summary from "../../assets/sumary.png";
import security from "../../assets/security.png";
import statistics from "../../assets/statistics.png";
import face_detection from "../../assets/face_detection.png";
import broken from "../../assets/broken.png";
import tracking from "../../assets/tracking.png";
import acces_control from "../../assets/acces_control.png";
import angry from "../../assets/angry.png";
import machine from "../../assets/machine.png";
import goal from "../../assets/goal.png";
import pc from "../../assets/pc.png";
import steal from "../../assets/steal.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};

class sentinel_screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: false,
      leaders: true,
      switchView: true
    };
    this.changeView = this.changeView.bind(this);
  }
  changeView() {
    this.setState({ switchView: !this.state.switchView });
  }
  render() {
    return (
      <div className="container-box">
        <div>
            <div className="home-design-conta">
              <div className="sc-hm-one-sentinel">
                <div className="sc-hm-one-in-about">
                  <Container>
                    <Row className="homAdse-section">
                      <Col md={2}></Col>
                      <Col md={8}>
                        <div className="text-pop-about">
                        <p className="txt_ Title" id="myElement4">
                            Sentinel - A People Profiler
                          </p>
                          <p className="txt_ subTitle">
                            We at Neophyte improve Process Visibility and Automation Management intelligent Ambient Machines leading to minimalize people-induced losses & product-linked costs.
                          </p>
                          <div className="align-items">
                              <button
                                className="visit-site-about"
                              >
                                <a href="#about-div2-info">Know More</a>
                              </button>
                          </div>
                        </div>
                      </Col>
                      <Col md={2}></Col>
                    </Row>
                  </Container>
                </div>
              </div>
              <div className="content-box-sentinel div2" id="about-div2-info">
                <Row>
                  <Col md={6}>
                    <p className="about-midSide-div2">Affordable Pricing, Certified Forwarders</p>
                    <p className="about-midSide-div2-title">Our Accurate People Profiler Solutions That Enhances Warehouse Management!</p>
                    <p className="about-midSide-div2-para">Sentinel provides a human-computer-interaction interface for the warehouse manager to set custom rules across processes/sub-processes in the warehouse floor (eg. workforce efficiency monitoring, anomaly detection, HVC area authorization) and get live updates of compliance violations, anomalies, and deviations of tracked KPIs from optimal benchmarks.</p>
                    <button
                      className="requestQuote neometry-btn"
                    >
                      Request Quote
                    </button>
                  </Col>
                  <Col md={3}>
                    <div className="page-container-senti senti-hover-card">
                        <BlogCard cardImage={machine} cardText={"Attendence Tracker"}/>
                    </div>
                    <div className="page-container-senti senti-hover-card">
                        <BlogCard cardImage={steal} cardText={"Violation Detection"}/>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="page-container-senti senti-hover-card2">
                        <BlogCard cardImage={goal} cardText={"Workers' Efficiency Monitor"}/>
                    </div>
                    <div className="page-container-senti senti-hover-card2">
                        <BlogCard cardImage={pc} cardText={"High Value Cage Monitor"}/>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="senti-dash" id="about-div2-info">
                <center>
                  <p className="txt_products-senti-2">Deliver Intelligence On-The-Edge</p>
                  <Carousel
                    autoPlay={true}
                    autoPlaySpeed={1500}
                    ssr
                    partialVisible 
                    itemClass="image-item"
                    responsive={responsive}
                  >
                    <img src={dashboard} className="senti-dashboard"/>
                    <img src={senti_flow} className="senti-dashboard2"/>
                  </Carousel>
                </center>
              </div>
            </div>
            <div className="sc-hm-one-products-senti2">
              <p className="txt_products vision-txt-margin">How Sentinal Helps Your Business</p>
              <Row>
                <Col md={3}>
                  <div className="container-senti">
                    <div className="card-senti">
                        <div className="slide slide1">
                            <div className="content-senti">
                                <div className="icon">
                                  <center>
                                    <img src={search} style={{height: 70, width: 70, marginTop:"15%"}}/>
                                    <p className="senti-card-txt">Search</p>
                                  </center>
                                  
                                </div>
                            </div>
                        </div>
                        <div class="slide slide2">
                            <div class="content-senti">
                                <p>Natural Language Query</p>
                                <p>Image & Area Search</p>
                                <p>Deep Sub-Attribute Search</p>
                            </div>
                        </div>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="container-senti2">
                    <div className="card-senti2">
                        <div className="slide slide1">
                            <div className="content-senti2">
                                <div className="icon">
                                  <center>
                                    <img src={summary} style={{height: 70, width: 70, marginTop:"15%"}}/>
                                    <p className="senti-card-txt">Summary</p>
                                  </center>
                                </div>
                            </div>
                        </div>
                        <div class="slide slide2">
                            <div class="content-senti2">
                              <p>Trailer of Key Events</p>
                              <p>Anomaly Detection</p>
                              <p>Smart Video Storage</p>
                            </div>
                        </div>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="container-senti3">
                    <div className="card-senti3">
                        <div className="slide slide1">
                            <div className="content-senti3">
                                <div className="icon">
                                  <center>
                                    <img src={security} style={{height: 70, width: 70, marginTop:"15%"}}/>
                                    <p className="senti-card-txt">Security</p>
                                  </center>
                                </div>
                            </div>
                        </div>
                        <div class="slide slide2">
                            <div class="content-senti3">
                              <p>Unauthorized Entry Alerts</p>
                              <p>Asset Protection</p>
                              <p>Real-Time Email Notification</p>
                            </div>
                        </div>
                    </div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="container-senti4">
                    <div className="card-senti4">
                        <div className="slide slide1">
                            <div className="content-senti4">
                                <div className="icon">
                                  <center>
                                    <img src={statistics} style={{height: 70, width: 70, marginTop:"15%"}}/>
                                    <p className="senti-card-txt">Statistics</p>
                                  </center>
                                </div>
                            </div>
                        </div>
                        <div class="slide slide2">
                            <div class="content-senti4">
                              <p>Peak Traffic Analysis</p>
                              <p>Activity Heat-maps</p>
                              <p>Flow Path-maps</p>
                            </div>
                        </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={1}></Col>
                <Col md={2} sm={4} xs={4}>
                  <center>
                    <img src={face_detection} style={{height: 65, width: 65, marginTop: 45}}/>
                    <p className="badge-txt-yellow">Face Detection</p>
                  </center>
                </Col>
                <Col md={2} sm={4} xs={4}>
                  <center>
                    <img src={broken} style={{height: 65, width: 65, marginTop: 45}}/>
                    <p className="badge-txt-yellow">Anomaly Detection</p>
                  </center>
                </Col>
                <Col md={2} sm={4} xs={4}>
                  <center>
                    <img src={tracking} style={{height: 65, width: 65, marginTop: 45}}/>
                    <p className="badge-txt-yellow">Continous Tracking<br/>and Monitoring</p>
                  </center>
                </Col>
                <Col md={2} sm={4} xs={4}>
                  <center>
                    <img src={acces_control} style={{height: 65, width: 65, marginTop: 45}}/>
                    <p className="badge-txt-yellow">Access Control</p>
                  </center>
                </Col>
                <Col md={2} sm={4} xs={4}>
                  <center>
                    <img src={angry} style={{height: 65, width: 65, marginTop: 45}}/>
                    <p className="badge-txt-yellow">Aggressive Behaviour<br/>Detection</p>
                  </center>
                </Col>
                <Col md={1}></Col>
              </Row>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}
class BlogCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false };
    this.flip = this.flip.bind(this);
  }

  flip = () => {
    this.setState({ flipped: !this.state.flipped });
  }
  render() {
    return (
      <div onMouseEnter={this.flip} onMouseLeave={this.flip} className={"card-container" + (this.state.flipped ? " flipped" : "")}>
        <Front cardImage={this.props.cardImage} cardText={this.props.cardText}/>
        <Back />
      </div>

    )
  }
}

class Front extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="front">
        <ImageArea cardImage={this.props.cardImage}/>
        <MainArea cardText={this.props.cardText}/>
      </div>
    )
  }
}

class Back extends React.Component {
  render() {
    return (
      <div className="back">
        <p>Profiles people and prevents people-induced loss, non compliance and indiscipline by enhancing existing security and surveillance ecosystem</p>
      </div>
    )
  }
}

class ImageArea extends React.Component {
  render() {
    return (
      <div className="image-container">
        <img className="card-image" src={this.props.cardImage}></img>
      </div>
    )
  }

}

class MainArea extends React.Component {
  render() {
    return (
      <div className="main-area">
        <div className="blog-post">
          <p className="title">{this.props.cardText}</p>
        </div>
      </div>
    )
  }
}
export default withRouter(sentinel_screen);
