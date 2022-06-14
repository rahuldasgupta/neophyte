import React from "react";
import { withRouter } from "react-router-dom";
import "./home.css";
import "./home.scss"
import Footer from "../../components/Footer/footer";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slide from 'react-reveal/Slide';
import { BiCheck } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import Fade from 'react-reveal/Fade';
import Select from "react-select";
import 'react-multi-carousel/lib/styles.css';

//Images
import heroImage1 from "../../assets/images/GroupCntr2.png";
import heroImage2 from "../../assets/images/GroupCntr.png";
import heroImage3 from "../../assets/images/img3rd.png";
import team from "../../assets/team.png";
import product from "../../assets/product.png";
import settings from "../../assets/settings.png";
import sample_stock from "../../assets/sample_stock.jpg";
import clients from "../../assets/clients.jpg";
import trust from "../../assets/trust.png";
import rating from "../../assets/rating.png";
import badge from "../../assets/badge.png";
import sentinel from "../../assets/sentinel.jpg";
import neometry from "../../assets/neometry.jpg";
import amiware from "../../assets/amiware.jpg";
import signature from "../../assets/signature.png";
import warehouse_1 from "../../assets/warehouse_1.jpg";
import warehouse_2 from "../../assets/warehouse_2.jpg";

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#F1F1F1",
    borderRadius: 5,
    borderColor: "white",
    boxShadow: null,
    height: 48,
    paddingLeft: 10,
  }),
  menu: base => ({
    ...base,
    // override border radius to match the box
    borderRadius: 0,
    // kill the gap
    marginTop: 0
  }),
  menuList: base => ({
    ...base,
    // kill the white space on first and last option
    padding: 0
  })
};


const priceOptions = [
  { value: "Query", label: "Query" },
  { value: "Feedback", label: "Feedback" },
  { value: "Demo Request", label: "Demo Request" },
];

class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchView: true,
      sentinel: true,
      visitPackage: null,
      neometry: false,
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };
  }
  changeView = () => {
    this.setState({ sentinelView: !this.state.sentinelView, sentinel: !this.state.sentinel, neometry: !this.state.neometry });
 };
  render() {
    const { visitPackage } = this.state;
    return (
      <div className="container-box">
        <div>
            <div className="home-design-conta">
              <div className="sc-hm-one">
                <div className="sc-hm-one-in">
                  <Container>
                    <Row className="homAdse-section">
                      <Col md={6}>
                        <div className="text-pop">
                          <Fade top>
                            <p className="txt_ Title" id="myElement4">
                              Ambient Intelligence for Industry 4.0
                            </p>
                            <p className="txt_ subTitle">
                              We improve Process Visibility and Automation Management for Supply Chain Ecosystems with intelligent Ambient Machines leading to minimalize people-induced losses & product-linked costs.
                            </p>
                            <div className="align-items">
                              <Link to="/create-order">
                                <button
                                  className="visit-site"
                                >
                                  Get Demo
                                </button>
                              </Link>
                            </div>
                          </Fade>
                        </div>
                      </Col>
                      <Col md={6} lg={6}>
                        <Row>
                          <Col style={{ textAlign: "center" }} md={6} lg={6}>
                            <div className="aln-hm-cn">
                              <Slide top>
                                <img
                                  alt="sample"
                                  src={heroImage1}
                                  className="entr-gr-one"
                                />
                              </Slide>
                            </div>
                          </Col>
                          <Col style={{textAlign: "center",}} md={6} lg={6}>
                            <div className="aln-itms-cntr">
                              <Slide top>
                                <img
                                  alt="sample"
                                  src={heroImage2}
                                  className="entr-gr-two"
                                />
                              </Slide>
                            </div>
                          </Col>
                        </Row>
                        <Col md={6} lg={6}>
                          <div className="aln-itms-cntr-btm">
                            <Slide bottom>
                              <img
                                alt="sample"
                                src={heroImage3}
                                className="entr-gr-three"
                              />
                            </Slide>
                          </div>
                        </Col>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
              <div className="content-box div2">
                <Fade top duration={1850} cascade>
                  <Row>
                    <Col md={3} xs={12} sm={12}>
                      <p className="services-top-title">What We<br/>Care</p>
                    </Col>
                    <Col md={3} xs={12} sm={12}>
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
                    <Col md={3} xs={12} sm={12}>
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
                    <Col md={3} xs={12} sm={12}>
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
                    <Col md={6} xs={12} sm={12}>
                      <img src={sample_stock} className="stock_img"/>
                    </Col>
                    <Col md={6} xs={12} sm={12}>
                      <p className="about-midSide-div2">Affordable Pricing, Certified Forwarders</p>
                      <p className="about-midSide-div2-title">Safe, Reliable and Optimal Warehouse Sorting Solutions That Saves Your Time!</p>
                      <p className="about-midSide-div2-para">We pride ourselves on providing one of the best in class warehouse solutions that ranges from optimizing packing material requirements, fleet management decision making, and early detection of damages to providing seemless connectivity with WMS and WCS.</p>
                      <img src={signature} style={{width: 170, height: 50}}/>
                      <button className="requestQuote">
                        Request Quote
                      </button>
                    </Col>
                  </Row>
                </Fade>
              </div>
            </div>
            <div className="why-us">
              <Row>
                <Col md={6} sm={12} xs={12}>
                  <div className="why-us-info">
                    <Fade top duration={1750}>
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
                    </Fade>
                  </div>
                </Col>
                <Col md={6}>
                  <img src={warehouse_1} className="warehouse-img-1"/>
                </Col>
              </Row>
            </div>
            <div className="sc-hm-one-products">
              <Fade top duration={1100}>
                <p className="txt_products">Our Products</p> 
                <p className="product-subTitle">We provide complete warehouse monitoring and conveyour sorting solutions</p>
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
              </Fade>
            </div>
            <div className="sc-hm-one-products-home2">
              <Row>
                <Col md={6} xs={12} sm={12}>
                  <Fade top duration={1400}>
                    <img src={clients} className="clients-img-neo"/>
                    <p className="about-midSide-div2-abc">Warehouse Management and OCR Solutions</p>
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
                  </Fade>
                </Col>
                <Col md={1}></Col>
                <Col md={4}>
                  <img src={warehouse_2} className="warehouse-img-2-neo"/>
                </Col>
              </Row>
            </div>
            <div className="why-us-contact" id="contact-us">
              <Row>
              <Col md={5} xs={12} sm={12}>
                  <div className="contact-div-first-home">
                    <Fade top duration={1400}>
                      <p className="contact-div1-title">Contact Information</p>
                      <p className="contact-div1-subtitle">Fill up the form and our team will get back to you in 24 hrs</p>
                      <div className="contact-icon-first-home">
                        <Row>
                          <Col md={1}>
                            <FaPhoneAlt
                              size={22}
                              className="loc-icons"
                            />
                          </Col>
                          <Col md={5}>
                            <p className="contact-div1-subtitle-home number">+91 879-480-3021</p>
                          </Col>
                        </Row>
                      </div>
                      <div className="contact-icon-second-home">
                        <Row>
                          <Col md={1}>
                            <IoIosMail
                              size={28}
                              className="loc-icons"
                            />
                          </Col>
                          <Col md={4}>
                            <p className="contact-div1-subtitle-home number" onClick={() => window.location = 'mailto:sales@neophyte.live'}>sales@neophyte.live</p>
                          </Col>
                        </Row>
                      </div>
                      <div className="contact-icon-second-home">
                        <Row>
                          <Col md={1}>
                            <ImLocation
                              size={28}
                              className="loc-icons"
                            />
                          </Col>
                          <Col md={9}>
                            <p className="contact-div1-subtitle-home number-2" onClick={() => window.open("https://maps.google.com?q="+19.05033358336438+","+73.06530312559231 )}>
                              Plot No 401,<br/>
                              Vishwakarma / Annapurna Mahila Mandal CHS,
                              Sector 21, Kharghar
                              Navi Mumbai, Maharashtra 410210
                            </p>
                          </Col>
                        </Row>
                      </div>
                    </Fade>
                  </div>
                </Col>
                <Col md={7} xs={12} sm={12}>
                  <div className="sc-hm-one-contact">
                    <div className="sc-hm-one-in">
                      <div className="home-contact-inner">
                        <Fade top duration={1400}>
                          <input
                            className="in-cus-ct input_"
                            type="text"
                            placeholder="Name"
                            enterKeyHint="next"
                          />
                          <input
                            className="in-cus-ct input_"
                            type="text"
                            placeholder="Email"
                            inputMode="email"
                            enterKeyHint="next"
                          />
                          <div className="home-contact-select">
                            <Select
                              onChange={this.handlePackage}
                              value={priceOptions.find(
                                (item) => item.value === visitPackage
                              )}
                              styles={customStyles}
                              options={priceOptions}
                              placeholder={
                                <div>Select</div>
                              }
                            />
                          </div>
                          <input
                            className="in-cus-ct messageInput"
                            type="text"
                            placeholder="Message"
                          />
                          <center>
                            <button
                              className="requestQuote-homecontact "
                            >
                              Submit
                            </button>
                          </center>
                        </Fade>
                      </div>
                    </div>
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
export default withRouter(home);
