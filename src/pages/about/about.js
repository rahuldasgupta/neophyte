import React from "react";
import { withRouter } from "react-router-dom";
import "./about.css";
import "./about.scss";
import Footer from "../../components/Footer/footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Zoom from 'react-reveal/Zoom';
import { BiCheck } from "react-icons/bi";
import 'react-multi-carousel/lib/styles.css';

//Images
import team from "../../assets/team.png";
import product from "../../assets/product.png";
import settings from "../../assets/settings.png";
import sample_stock from "../../assets/sample_stock.jpg";
import play from "../../assets/play.png";
import clients from "../../assets/clients.jpg";
import next from "../../assets/next.png";
import trust from "../../assets/trust.png";
import rating from "../../assets/rating.png";
import badge from "../../assets/badge.png";
import sentinel from "../../assets/sentinel.jpg";
import neometry from "../../assets/neometry.jpg";
import amiware from "../../assets/amiware.jpg";
import signature from "../../assets/signature.png";
import warehouse_1 from "../../assets/warehouse_1.jpg";
import warehouse_2 from "../../assets/warehouse_2.jpg";

class about extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sentinel: true,
      neometry: false
    };
  }
  render() {
    return (
      <div className="container-box">
        <div>
            <div className="home-design-conta">
              <div className="sc-hm-one-about">
                <div className="sc-hm-one-in-about">
                  <Container>
                    <Row className="homAdse-section">
                      <Col md={2}></Col>
                      <Col md={8}>
                        <div className="text-pop-about">
                        <p className="txt_ Title" id="myElement4">
                            Driven by force of excellence
                          </p>
                          <p className="txt_ subTitle">
                            We at Neophyte improve Process Visibility and Automation Management intelligent Ambient Machines leading to minimalize people-induced losses & product-linked costs.
                          </p>
                          <div className="align-items">
                              <button
                                className="visit-site-about"
                              >
                                <a href="#about-div2-info">Meet Team</a>
                              </button>
                          </div>
                        </div>
                      </Col>
                      <Col md={2}></Col>
                    </Row>
                  </Container>
                </div>
              </div>
              <div className="content-box div2" id="about-div2-info">
                <Row>
                  <Col md={3}>
                    <Zoom right cascade>
                      <p className="services-top-title">What We<br/>Care</p>
                    </Zoom>
                  </Col>
                  <Col md={3}>
                    <div className='cards'>
                      <div className="card">
                        <div className="card-body">
                        <img src={team}/>
                          <h2>People</h2>
                          <p className="careCards_txt">Human-Computer-Interaction interface for the warehouse manager to set custom rules across processes & live updates of compilance vioations, anomolies and deviations of tracked KPIs from optimal benchmarks</p>
                        </div>
                      </div>
                    </div> 
                  </Col>
                  <Col md={3}>
                    <div className='cards'>
                      <div className="card">
                        <div className="card-body-2">
                        <img src={product}/>
                          <h2>Product</h2>
                          <p className="careCards_txt">Employ "mesasure-once and managed throughtout" philosophy for the product's inbound to outbound journey within the warehouse & optimizes packing material requirements, and early detection of damages</p>
                        </div>
                      </div>
                    </div> 
                  </Col>
                  <Col md={3}>
                    <div className='cards'>
                      <div className="card">
                        <div className="card-body-3">
                        <img src={settings}/>
                          <h2>Process</h2>
                          <p className="careCards_txt">Harnesse existing IOT sensor infrastructure as an input to our Context and Task Aware Engine - AmiWare, which seamlessly integrates with and updates WMS (Warehouse Management System) and Warehouse Control System</p>
                        </div>
                      </div>
                    </div> 
                  </Col>
                </Row>
                <br/><br/>
                <Row>
                  <Col md={6}>
                    <img src={sample_stock} className="stock_img"/>
                  </Col>
                  <Col md={6}>
                    <img src={play} className="play_img"/>
                    <p className="about-midSide-div2">Affordable Pricing, Certified Forwarders</p>
                    <p className="about-midSide-div2-title">Safe, Reliable and Optimal Warehouse Sorting Solutions That Saves Your Time!</p>
                    <p className="about-midSide-div2-para">We pride ourselves on providing one of the best in class warehouse solutions that ranges from optimizing packing material requirements, fleet management decision making, and early detection of damages to providing seemless connectivity with WMS and WCS.</p>
                    <img src={signature} style={{width: 170, height: 50}}/>
                    <button
                      className="requestQuote"
                    >
                      Request Quote
                    </button>
                  </Col>
                </Row>
                
              </div>
            </div>
            <div className="why-us">
              <Row>
                <Col md={6}>
                  <div className="why-us-info">
                    <img src={next} className="next-img"/>
                    <p className="why-midSide-div2-title">Why Choose Us</p>
                    <p className="why-midSide-div2-para">We believe that the products, offered by our company, should satify the higher expectations of our clients. We are dedicated in creating added value for our customers by implementing high-end optimized technology in our work. This is why the desire of constant improvement is the driving force behind our organization.</p>
                    <p className="why-midSide-div2-para">We have been providing high-edge technology warehouse solution at the fair pricing. Our skilled team, 24x7 Client Support, Context and Task Aware Enginer AmiWare, combined with years of experience.</p>
                    <div className="badges-div">
                      <Row>
                        <Col md={4} sm={4} xs={4}>
                          <center>
                            <img src={trust} style={{height: 65, width: 65}}/>
                            <p className="badge-txt">Trusted by 4 Clients Worldwide</p>
                          </center>
                        </Col>
                        <Col md={4} sm={4} xs={4}>
                          <center>
                            <img src={rating} style={{height: 65, width: 65}}/>
                            <p className="badge-txt">Rated 4.2/5 on<br/>TrustPilot</p>
                          </center>
                        </Col>
                        <Col md={4} sm={4} xs={4}>
                          <center>
                            <img src={badge} style={{height: 65, width: 65}}/>
                            <p className="badge-txt">An ISO Certified & Govt Registered Company</p>
                          </center>
                        </Col>
                      </Row>
                    </div>
                    
                  </div>
                </Col>
                <Col md={6}>
                  <img src={warehouse_1} className="warehouse-img-1"/>
                </Col>
              </Row>
            </div>
            <div className="sc-hm-one-products">
              <Zoom left cascade>
                  <p className="txt_products">Our Products</p> 
              </Zoom>
              <p className="product-subTitle">We provide complete warehouse monitoring and conveyour sorting solutions.</p>
              <div className="carousel-div">
                <Row>
                  <Col md={4}>
                    <div className="page-container">
                        <BlogCard cardImage={neometry} cardText={"NeoMetry"}/>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="page-container">
                        <BlogCard cardImage={sentinel} cardText={"Sentinel"}/>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="page-container">
                        <BlogCard cardImage={amiware} cardText={"AmIWare"}/>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="sc-hm-one-products">
              <Row>
                <Col md={6}>
                  <img src={clients} className="clients-img"/>
                    <p className="about-midSide-div2">Warehouse Management and OCR Solutions</p>
                    <p className="about-midSide-div2-title useCase-title">Competitive Advantages and Use Cases</p>
                    <p className="about-midSide-div2-para">We pride ourselves on providing one of the best in class warehouse solutions that ranges from optimizing packing material requirements, fleet management decision making, and early detection of damages to providing seemless connectivity with WMS and WCS.</p>
                    <Row>
                      <Col>
                        <Row>
                          <div>
                            <BiCheck
                              size={30}
                              className="closeIcon"
                            />
                            <span className="pricing-span">Transparent & Fair Pricing Plans</span>
                          </div>
                        </Row>
                        <Row>
                          <div>
                            <BiCheck
                              size={30}
                              className="closeIcon"
                            />
                            <span className="pricing-span">24x7 Clients Support</span>
                          </div>
                        </Row>
                        <Row>
                          <div>
                            <BiCheck
                              size={30}
                              className="closeIcon"
                            />
                            <span className="pricing-span">Real Time High-Value Cage Area Monitoring</span>
                          </div>
                        </Row>
                        <Row>
                          <div>
                            <BiCheck
                              size={30}
                              className="closeIcon"
                            />
                            <span className="pricing-span">Damage & Quality Accessment</span>
                          </div>
                        </Row>
                        <button
                          className="requestQuote"
                          style={{marginTop: "4%"}}
                        >
                          More About Us
                        </button>
                      </Col>
                    </Row>
                </Col>
                <Col md={6}>
                  <img src={warehouse_2} className="warehouse-img-2"/>
                </Col>
              </Row>
            </div>
            <div className="contact-section-home">
              <Row>
                <Col md={8}>
                </Col>
                <Col md={4}>
                  <div className="form-e">
                    <p className="send-mssge">Send Message</p>
                    <form>
                      <div className="form-container">
                        <p className="ct-frm-lbl">Name :</p>
                        <input
                          className="in-cus-ct input_"
                          type="text"
                          placeholder="Name"
                          enterKeyHint="next"
                        />

                        <p id="marginInputs" className="ct-frm-lbl">
                          Email :
                        </p>

                        <input
                          className="in-cus-ct input_"
                          type="text"
                          placeholder="Email"
                          inputMode="email"
                          enterKeyHint="next"
                        />

                        <p id="marginInputs" className="ct-frm-lbl">
                          Phone Number :
                        </p>

                        <input
                          className="in-cus-ct input_"
                          type="tel"
                          placeholder="Phone Number"
                        />

                        <p id="marginInputs" className="ct-frm-lbl">
                          Message :
                        </p>

                        <input
                          className="in-cus-ct messageInput"
                          type="text"
                          placeholder="Message"
                        ></input>
                      </div>
                      <Row>
                        <Col
                          style={{ marginTop: "4%", marginBottom: "3%" }}
                        >
                          <center>
                            <button
                              style={{ borderRadius: 60 }}
                              type="submit"
                            >
                              Submit
                            </button>
                          </center>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </Col>
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
        <p>Bloggity bloggity bloggity blog. This would be the full text of the abbreviated blog post.</p>
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
export default withRouter(about);
