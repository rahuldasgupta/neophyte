import React from "react";
import { withRouter } from "react-router-dom";
import "./neometry.css";
import "./neometry.scss"
import Footer from "../../components/Footer/footer";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import { BiCheck } from "react-icons/bi";
import 'react-multi-carousel/lib/styles.css';
import { BsArrowRight, BsArrowRightCircle } from "react-icons/bs";


//Images
import neometry_screen_1 from "../../assets/neometry_screen_4.png";
import neo_icon_1 from "../../assets/neo_icon_1.png";
import clients from "../../assets/clients.jpg";
import neometry_video from "../../assets/neometry_video.mp4";
import warehouse_2 from "../../assets/warehouse_2.jpg";
import neometry_1 from "../../assets/neometry_1.png";
import neometry_2 from "../../assets/neometry_4.png";
import neometry_3 from "../../assets/neometry_3.png";
import no_touch from "../../assets/no-touch.png";
import ai from "../../assets/ai.png";
import cartoons from "../../assets/cartoons.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1000 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1000, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

class neometry_screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchView: true,
      sentinel: true,
      neometry: false
    };
  }
  changeView = () => {
    this.setState({ sentinelView: !this.state.sentinelView, sentinel: !this.state.sentinel, neometry: !this.state.neometry });
 };
  render() {
    return (
      <div className="container-box">
        <div>
            <div className="home-design-conta">
              <div className="bg-video-wrap">
                <video autoPlay loop muted>
                  <source src={neometry_video} type='video/mp4' />
                </video>
                <div className="overlay">
                </div>
                <div className="intro-text-header">
                <Container>
                    <Row className="homAdse-section">
                      <Col md={1}></Col>
                      <Col md={10}>
                        <div className="text-pop-about">
                          <p className="txt_ Title" id="myElement4">                         
                              NeoMetry - A Smart Products Profiler
                          </p>
                          <Row>
                            <Col md={2}></Col>
                            <Col md={8}>
                              <p className="txt_ subTitle">
                                Accurate & comprehensive profiling of inbound shipments on moving conveyors for automated Cataloging and Sorting of orders.
                            </p>
                            </Col>
                            <Col md={2}></Col>
                          </Row>
                          <div className="align-items">
                              <button
                                className="visit-site-about"
                              >
                                <a href="#about-div2-info">Discover</a>
                              </button>
                          </div>
                        </div>
                      </Col>
                      <Col md={1}></Col>
                    </Row>
                  </Container>
                </div>
              </div>
              <div className="content-box div2" id="about-div2-info">
                <Row>
                  <Col md={6} sm={12} xs={12}>
                    <p className="about-midSide-div2">Affordable Pricing, Certified Forwarders</p>
                    <p className="about-midSide-div2-title">Our Smart Products Profiler Solutions That Enhances Your Efficiency!</p>
                    <p className="about-midSide-div2-para">We pride ourselves on providing one of the best in class warehouse solutions that ranges from optimizing packing material requirements, fleet management decision making, and early detection of damages to providing seemless connectivity with WMS and WCS.</p>
                    <button
                      className="requestQuote neometry-btn"
                    >
                      Request Quote
                    </button>
                  </Col>
                  <Col md={1}></Col>
                  <Col md={5} sm={12} xs={12}>
                    <img src={neometry_screen_1} className="stock_img"/>
                    <div class="box-neometry">
                      <img src={neo_icon_1} style={{height: 50, width: 50}}/>
                      <p className="about-midSide-div2-neo">AmIWare Powered Products Profiler & Sorter</p>
                      <BsArrowRight
                        size={20}
                        className="closeIconX"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="why-us-neo">
              <Row>
                <Col md={4}>
                  <div className="neometry_div_1">
                  <div class="box-neometry-1">
                    <div className="box-neometry-1-inner">
                      <p className="box-text-title">Help Your Business Win</p>
                      <p className="box-text-subtitle">Neophyte has provided warehouse solutions to over 10 clients across different industries and fields.</p>
                      <button
                        className="requestSolution"
                      >
                        Find Your Solution
                      </button>
                    </div>
                      
                    </div>
                  </div>
                </Col>
                <Col md={8}>
                  <Row>
                    <Col md={4}>
                      <div class="box-neometry-2">
                        <div className="box-neometry-2-inner">
                          <img src={no_touch} style={{height: 50, width: 50}}/>
                          <p className="box-text-title-2">Low-Touch / No-Touch</p>
                          <p className="box-text-subtitle-2">Neophyte has provided warehouse solutions to over 10 clients across different industries and fields. Warehouse solutions to over 10 clients across different industries</p>
                        </div>
                      </div>
                  </Col>
                  <Col md={4}>
                      <div class="box-neometry-2">
                        <div className="box-neometry-2-inner">
                          <img src={ai} style={{height: 50, width: 50}}/>
                          <p className="box-text-title-2">Sustainable AI & ML Vision</p>
                          <p className="box-text-subtitle-2">Neophyte has provided warehouse solutions to over 10 clients across different industries and fields. Warehouse solutions to over 10 clients across different industries</p>
                        </div>
                      </div>
                      <div className="explore-next-div">
                        <Row >
                          <Col md={5}>
                            <p className="explore-more-txt">Explore more</p>
                          </Col>
                          <Col md={1}>
                            <BsArrowRightCircle
                              size={22}
                              className="closeIconX"
                            />
                          </Col>
                        </Row>
                      </div>
                      
                  </Col>
                  <Col md={4}>
                      <div class="box-neometry-2">
                        <div className="box-neometry-2-inner">
                          <img src={cartoons} style={{height: 52, width: 52}}/>
                          <p className="box-text-title-2">Fit For All<br/>Box Sizes</p>
                          <p className="box-text-subtitle-2">Neophyte has provided warehouse solutions to over 10 clients across different industries and fields. Warehouse solutions to over 10 clients across different industries</p>
                        </div>
                      </div>
                      
                  </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <div className="sc-hm-one-products-neo">
              <Zoom left cascade>
                  <p className="txt_products-neo">What We Offer</p> 
              </Zoom>
              <p className="product-subTitle">We provide complete warehouse monitoring and conveyour sorting solutions.</p>
              <div className="carousel-div-neo">
                <Row>
                  <Col md={4}>
                    <div class='container-neo'>
                      <div class='card-neo'>
                        <div class='card__top-neo'>
                          <i class='fas-neo fa-book-neo'></i>
                          <img src={neometry_1} style={{width:85, height: 85}}/>
                          <p className="card-box-neo-text">Comprehensive Product Profiling</p>
                        </div>
                        <div class='card__bottom-neo'>
                          <p>Cascading Style Sheets are an important way to control how your web pages look. CSS controls the fonts, text, colors, backgrounds, margins, and layout.</p>
                          <div>
                            <a href='#'>Read More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div class='container-neo-1'>
                      <div class='card-neo-1'>
                        <div class='card__top-neo-1'>
                          <i class='fas-neo-1 fa-book-neo-1'></i>
                          <img src={neometry_2} style={{width:90, height: 90}}/>
                          <p className="card-box-neo-text">Optimal Sorting & Routing</p>
                        </div>
                        <div class='card__bottom-neo-1'>
                          <p>Cascading Style Sheets are an important way to control how your web pages look. CSS controls the fonts, text, colors, backgrounds, margins, and layout.</p>
                          <div>
                            <a href='#'>Read More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div class='container-neo-2'>
                      <div class='card-neo-2'>
                        <div class='card__top-neo-2'>
                          <i class='fas-neo-2 fa-book-neo-2'></i>
                          <img src={neometry_3} style={{width:90, height: 90}}/>
                          <p className="card-box-neo-text">Damage & Quality Assesment</p>
                        </div>
                        <div class='card__bottom-neo-2'>
                          <p>Cascading Style Sheets are an important way to control how your web pages look. CSS controls the fonts, text, colors, backgrounds, margins, and layout.</p>
                          <div>
                            <a href='#'>Read More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="why-us-neo-2">
              <Row>
                <Col md={4}>
                  <div className="why-us-neo-2-inner">
                    <p className="why-us-neo-2-inner-txt">
                    Measure-once and Managed-throughout philosophy for the product's inbound to outbound journey within the warehouse  resulting in better order fulfillment processing which optimizes packing material requirements, fleet management decision making, and early detection of damages to prevent costs emerging from returned shipments
                    </p>
                  </div>
                </Col>
                <Col md={8}>
                <div className="neometry_div2_1"></div>
                </Col>
              </Row>
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
                            <span className="pricing-span">A.I Product Profiling</span>
                          </div>
                        </Row>
                        <Row>
                          <div>
                            <BiCheck
                              size={30}
                              className="closeIcon"
                            />
                            <span className="pricing-span">Optimal Sorting</span>
                          </div>
                        </Row>
                        <Row>
                          <div>
                            <BiCheck
                              size={30}
                              className="closeIcon"
                            />
                            <span className="pricing-span">Quality Assesment</span>
                          </div>
                        </Row>
                        <Row>
                          <div>
                            <BiCheck
                              size={30}
                              className="closeIcon"
                            />
                            <span className="pricing-span">Damage Prevention & Detection</span>
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
export default withRouter(neometry_screen);
