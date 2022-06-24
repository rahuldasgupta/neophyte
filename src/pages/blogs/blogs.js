import React from "react";
import { withRouter } from "react-router-dom";
import "./blogs.css";
import "./blogs.scss";
import Footer from "../../components/Footer/footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from 'react-reveal/Fade';
import 'react-multi-carousel/lib/styles.css';

//Images
import quote_left from "../../assets/quote-left.png";
import quote_right from "../../assets/quote-right.png";
import office_1 from "../../assets/office_1.jpg";
import office_2 from "../../assets/office_2.jpg";
import office_3 from "../../assets/office_3.png";
import office_4 from "../../assets/office_4.png";

class blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: false,
      leaders: true,
      switchView: true,
      firstPost: true,
      secondPost: false,
      thirdPost: false
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
              <div className="sc-hm-one-blog">
                <div className="sc-hm-one-in-about">
                  <Container>
                    <Row>
                      <Col md={2}></Col>
                      <Col md={8} xs={12} sm={12}>
                        <div className="text-pop-about">
                          <Fade top duration={1250}>
                            <p className="txt_ Title" id="myElement4">
                              Blogs
                            </p>
                            <p className="txt_ subTitle">
                              Read about our recents developments, enhancements and achievements and get a glimpse of our future prospects.
                            </p>
                            <div className="align-items">
                                <button
                                  className="visit-site-about"
                                >
                                  <a href="#about-div2-info">Read Posts</a>
                                </button>
                            </div>
                          </Fade>
                        </div>
                      </Col>
                      <Col md={2}></Col>
                    </Row>
                  </Container>
                </div>
              </div>
              <div className="blogsDiv" id="about-div2-info">
                <Fade top duration={1500}>
                  <p className="txt_recent">Recent Posts</p>
                  <Row>
                    <Col md={8} xs={12} sm={12}>
                      {
                        this.state.firstPost?
                        <div className="blogsDiv-inner-2">
                          <p className="services-top-title">Deep dive into aiSentinel: Search</p>
                          <div className="iframe-forMobile">
                            <center>
                              <iframe width="100%" height="228" src="https://www.youtube.com/embed/QPsBMX1wwRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{borderRadius: 14}}></iframe>
                            </center>
                          </div>
                          <div className="iframe-forPC">
                            <center>
                              <iframe width="560" height="315" src="https://www.youtube.com/embed/QPsBMX1wwRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{borderRadius: 14}}></iframe>
                            </center>
                          </div>
                            <div>
                              <p className="header-card-left-date">10:25 PM • 24-03-2022</p>
                              <p className="blog-context-txt">This article provides a deep dive into "Search" functionality with aiSentinel. Recall that aiSentinel connects with security cameras (CCTV cameras) in real time. Search is available in the postmortem view, where the user can select a camera, and a time range. He can then search for events for finer analysis. These include:</p>
                              <ul>
                                <li>Search with a natural language query for objects and color (e.g. "Person wearing red")</li>
                                <li>Area based Search (search if a person has entered a particular region)</li>
                                <li>Face Search: Search if a given person (via a face image) has entered</li>
                                <li>Person Search: Search if a given person (via a full body image of that person) has entered.</li>
                              </ul>
                              <img src={quote_left} style={{height: 40, width: 40}}/>
                              <Row>
                                <Col md={1}></Col>
                                <Col md={11}>
                                  <p className="quote-txt-blogs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since a very long time.</p>
                                </Col>
                                <Col md={1}></Col>
                              </Row>
                              <img src={quote_right} className="quote-right-img-blogs"/>
                            </div>
                        </div>
                        :
                        <></>
                      }
                      {
                        this.state.secondPost?
                        <div className="blogsDiv-inner-2">
                          <p className="services-top-title">Deep Learning based Object Detection</p>
                          <div className="iframe-forMobile">
                            <center>
                              <iframe width="100%" height="228" src="https://www.youtube.com/embed/3s6Emx_y7Hc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{borderRadius: 14}}></iframe>
                            </center>
                          </div>
                          <div className="iframe-forPC">
                            <center>
                              <iframe width="560" height="315" src="https://www.youtube.com/embed/3s6Emx_y7Hc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{borderRadius: 14}}></iframe>
                            </center>
                          </div>
                            <div>
                              <p className="header-card-left-date">10:25 PM • 24-03-2022</p>
                              <p className="blog-context-txt">This article goes over our deep learning based object detection suite, which is a part of Newton. We can detect several classes of objects including people, vehicles like cars, trucks, bicycles, motor bikes, animals etc. Our Object Detection suite has been integrated into several products of AitoeLabs, where we can detect these objects in real time and send out alerts, search for these objects in the video etc.</p>
                              <p className="blog-context-txt">Our object detection does not need expensive GPUs to run. We can run our algorithms at reasonable rates (10-15 frames per second) on CPU! This makes it easy to run in real time mode on premise, thereby considerably reducing the costs of expensive GPU infrastructure.</p>
                              <ul>
                                <li><b>Secure:</b>  As a part of secure, we can give real time alerts if a person or an animal is seen to enter restricted area (intrusion detection), or if they are loitering. We can also detect overcrowding in scenarios where there is a restriction with the number of people, or inactivity detection when a person is not present in a certain area (for example, a guard who is supposed to be guarding a premise).</li>
                                <li><b>Search:</b> We detect people, animals, vehicles in a video and tag them in a database. We also then detect sub-attributes and characteristics of these objects (e.g. Color, age/gender, vehicle type etc.) These are then available for the user to query in the video.</li>
                                <li><b>Statistics:</b> Detecting people, animals, vehicles is useful not only for counts, but also for Heatmap, Flowmap and Dwell time analysis.</li>
                                <li><b>Summarization:</b> Finally, we use signals such as people, animals and vehicles in our summarization algorithms to determine important events.</li>
                              </ul>
                            </div>
                        </div>
                        :
                        <></>
                      }
                      {
                        this.state.thirdPost?
                        <div className="blogsDiv-inner-2">
                          <p className="services-top-title">Introducing aiSentinel for Real time Video Analytics</p>
                          <div className="iframe-forMobile">
                            <center>
                              <iframe width="100%" height="228" src="https://www.youtube.com/embed/K9112fY1_m8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{borderRadius: 14}}></iframe>
                            </center>
                          </div>
                          <div className="iframe-forPC">
                            <center>
                              <iframe width="560" height="315" src="https://www.youtube.com/embed/K9112fY1_m8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{borderRadius: 14}}></iframe>
                            </center>
                          </div>
                            <div>
                              <p className="header-card-left-date">10:25 PM • 24-03-2022</p>
                              <p className="blog-context-txt">AitoeLabs introduces aiSentinel, our real time analytics product. aiSentinel connects to CCTV cameras and analyzes the video stream in real time. The users can configure cameras, and perform analytics. </p>
                              <p className="blog-context-txt">aiSentinel supports real time analytics and alerting (the Secure aspect of aiSentinel) and post mortem analytics (Search, Summarize and Statistics aspects of aiSentinel).</p>
                              <p className="blog-context-txt">Search includes Area based search, Image search (searching based on, for example, a "face" or an image of a "car"), natural language query (for example, "Person wearing Red") etc. Statistics includes Time series and counts, Heatmaps and Dwell times. Summarization feature will capture the most important highlights for quick post mortem analysis. Finally Security provides real time alerts for various custom rules, including Intrusion detection, Loitering, Over crowding detection, baggage left behind detection, Camera tampering, Inactivity detection, anomaly detection etc.</p>
                            </div>
                        </div>
                        :
                        <></>
                      }
                    </Col>
                    <Col md={4} xs={12} sm={12}>
                      <div className="blogsDiv-inner">
                        <p className="txt_recentMobile">Recent Posts</p>
                        <div class="box-blogs" onClick={() => this.setState({firstPost: true, secondPost:false, thirdPost: false})}>
                          <Row>
                            <Col md={4} xs={4} sm={4}>
                              <img src={office_1} className="card-ions-blog"/>
                            </Col>
                            <Col md={8} xs={8} sm={8}>
                              <p className="blog-card-left-header">Deep dive into aiSentinel</p>
                              <p className="blog-card-left-subheader">This is some dummy text for short brief</p>
                              <p className="blog-card-left-date">10:25 PM • 24-03-2022</p>
                            </Col>
                          </Row>
                        </div>
                        <div class="box-blogs" onClick={() => this.setState({firstPost: false, secondPost:true, thirdPost: false})}>
                          <Row>
                            <Col md={4} xs={4} sm={4}>
                              <img src={office_2} className="card-ions-blog"/>
                            </Col>
                            <Col md={8} xs={8} sm={8}>
                              <p className="blog-card-left-header">Deep Learning</p>
                              <p className="blog-card-left-subheader">This is some dummy text for short brief</p>
                              <p className="blog-card-left-date">10:25 PM • 24-03-2022</p>
                            </Col>
                          </Row>
                        </div>
                        <div class="box-blogs" onClick={() => this.setState({firstPost: false, secondPost:false, thirdPost: true})}>
                          <Row>
                            <Col md={4} xs={4} sm={4}>
                              <img src={office_3} className="card-ions-blog"/>
                            </Col>
                            <Col md={8} xs={8} sm={8}>
                              <p className="blog-card-left-header">Real time Video Analytics</p>
                              <p className="blog-card-left-subheader">This is some dummy text for short brief</p>
                              <p className="blog-card-left-date">10:25 PM • 24-03-2022</p>
                            </Col>
                          </Row>
                        </div>
                        <div class="box-blogs" onClick={() => this.setState({firstPost: false, secondPost:true, thirdPost: false})}>
                          <Row>
                            <Col md={4} xs={4} sm={4}>
                              <img src={office_4} className="card-ions-blog"/>
                            </Col>
                            <Col md={8} xs={8} sm={8}>
                              <p className="blog-card-left-header">Face Analytics Suite</p>
                              <p className="blog-card-left-subheader">This is some dummy text for short brief</p>
                              <p className="blog-card-left-date">10:25 PM • 24-03-2022</p>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Fade>
                
              </div>
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
export default withRouter(blogs);
