import React from "react";
import { withRouter } from "react-router-dom";
import "./about.css";
import "./about.scss";
import Footer from "../../components/Footer/footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Zoom from 'react-reveal/Zoom';
import { FaRegBuilding } from "react-icons/fa";
import { AiOutlineSetting, AiOutlineSafety } from "react-icons/ai";
import { BsPeopleFill, BsArrowRightCircle } from "react-icons/bs";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import 'react-multi-carousel/lib/styles.css';

//Images
import quote_left from "../../assets/quote-left.png";
import quote_right from "../../assets/quote-right.png";
import signature from "../../assets/signature.png";
import office_1 from "../../assets/office_1.jpg";
import office_2 from "../../assets/office_2.jpg";
import office_3 from "../../assets/office_3.png";
import office_4 from "../../assets/office_4.png";
import anurag from "../../assets/team/anurag.png";
import hongkong from "../../assets/team/hongkong.png";
import abhinav from "../../assets/team/abhinav.png"; 
import universita from "../../assets/team/universita.png";
import pranjal from "../../assets/team/pranjal.JPG"; 
import madras from "../../assets/team/madras.webp";

class about extends React.Component {
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
                <div>
                  <p className="services-top-title">Our startup story</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <img src={quote_left} style={{height: 70, width: 70}}/>
                  <Row>
                    <Col md={1}></Col>
                    <Col md={11}>
                      <p className="quote-txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since a very long time.</p>
                    </Col>
                    <Col md={1}></Col>
                  </Row>
                  <img src={quote_right} className="quote-right-img"/>
                  <img src={signature} style={{width: 170, height: 50, marginLeft:"9%"}}/>
                </div>
              </div>
            </div>
            {
              this.state.switchView ?
                <div className="why-us-about">
                  <div className="why-us-about-inner">
                    <p className="why-midSide-div2-title-about">The Leadership</p>
                    <Row>
                      <Col md={4}>
                        <div className='cards-about-team'>
                          <div className="card-about-team">
                            <div className="card-body-about-team">
                              <center><img src={anurag} className="team-imgs"/></center>
                            </div>
                            <p className="team-text-title">Anurag S.</p>
                            <p className="team-text-subtitle">Co-Founder & CEO</p>
                            <center><img src={hongkong} className="team-univ-imgs"/></center>
                          </div>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className='cards-about-team'>
                          <div className="card-about-team">
                            <div className="card-body-about-team">
                              <center><img src={abhinav} className="team-imgs"/></center>
                            </div>
                            <p className="team-text-title">Dr. Abhinav Anand</p>
                            <p className="team-text-subtitle">Co-Founder & CEO</p>
                            <center><img src={universita} className="team-univ-imgs-universita"/></center>
                          </div>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className='cards-about-team'>
                          <div className="card-about-team">
                            <div className="card-body-about-team">
                              <center><img src={pranjal} className="team-imgs"/></center>
                            </div>
                            <p className="team-text-title">Pranjal Bhaskare</p>
                            <p className="team-text-subtitle">VP Engineering</p>
                            <center><img src={madras} className="team-univ-imgs-madras"/></center>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div>
                      <Row >
                        <Col md={8}>
                        </Col>
                        <Col md={4}>
                          <button
                            className="visit-site-about-team"
                            onClick={this.changeView}
                          >
                            <Row>
                              <Col md={10}>
                                <p>
                                  Meet The Team Behind
                                </p>
                              </Col>
                              <Col md={2}>
                                <BsArrowRightCircle
                                  size={22}
                                  className="nextIconX"
                                />
                              </Col>
                            </Row>
                          </button>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              :
              <div className="why-us-about">
                <div className="why-us-about-inner">
                  <p className="why-midSide-div2-title-about">The Team Behind</p>
                  <Row>
                    <Col md={4}>
                      <div className='cards-about-team'>
                        <div className="card-about-team">
                          <div className="card-body-about-team">
                            <center><img src={anurag} className="team-imgs"/></center>
                          </div>
                          <p className="team-text-title">Anurag S.</p>
                          <p className="team-text-subtitle">Co-Founder & CEO</p>
                          <center><img src={hongkong} className="team-univ-imgs"/></center>
                        </div>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className='cards-about-team'>
                        <div className="card-about-team">
                          <div className="card-body-about-team">
                            <center><img src={abhinav} className="team-imgs"/></center>
                          </div>
                          <p className="team-text-title">Dr. Abhinav Anand</p>
                          <p className="team-text-subtitle">Co-Founder & CEO</p>
                          <center><img src={universita} className="team-univ-imgs-universita"/></center>
                        </div>
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className='cards-about-team'>
                        <div className="card-about-team">
                          <div className="card-body-about-team">
                            <center><img src={pranjal} className="team-imgs"/></center>
                          </div>
                          <p className="team-text-title">Pranjal Bhaskare</p>
                          <p className="team-text-subtitle">VP Engineering</p>
                          <center><img src={madras} className="team-univ-imgs-madras"/></center>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div>
                    <Row >
                      <Col md={8}>
                      </Col>
                      <Col md={4}>
                        <button
                          className="visit-site-about-team"
                          onClick={this.changeView}
                        >
                          <Row>
                            <Col md={10}>
                              <p>
                                Meet The Leaders
                              </p>
                            </Col>
                            <Col md={2}>
                              <BsArrowRightCircle
                                size={22}
                                className="nextIconX"
                              />
                            </Col>
                          </Row>
                        </button>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            }
            <div className="sc-hm-one-products">
              <Zoom left cascade>
                  <p className="txt_products">Our Workspace</p> 
              </Zoom>
              <p className="product-subTitle">The place where all the great and creative minds of Neophyte collaborate.</p>
              <div className="carousel-div">
                <Row>
                  <Col md={3} xs={3} sm={3}>
                    <div className="page-container">
                      <img src={office_1} className="office-imgs img-down"/>
                    </div>
                  </Col>
                  <Col md={3} xs={3} sm={3}>
                    <div className="page-container">
                      <img src={office_2} className="office-imgs"/>
                    </div>
                  </Col>
                  <Col md={3} xs={3} sm={3}>
                    <div className="page-container">
                      <img src={office_3} className="office-imgs img-down"/>
                    </div>
                  </Col>
                  <Col md={3} xs={3} sm={3}>
                    <div className="page-container">
                        <img src={office_4} className="office-imgs"/>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className="sc-hm-one-products">
              <p className="txt_products vision-txt-margin">Vision & Journey</p>
              <Row>
                <Col md={4}>
                  <Timeline position="alternate">
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: 'auto 0', fontSize: 15, fontWeight:"bold" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                      >
                        2021
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                          <FaRegBuilding />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: '15px', px: 2 }}>
                        <Typography variant="h6" component="span">
                          Founded
                        </Typography>
                        <Typography
                          sx={{ fontSize: 13, }}
                        >
                          Neophyte Incorporated
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: 'auto 0', fontSize: 15, fontWeight:"bold" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        2022
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="error">
                          <AiOutlineSetting />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                          Neometry
                        </Typography>
                        <Typography
                          sx={{ fontSize: 13, }}
                        >
                          R&D and Product Launch 
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="warning">
                          <AiOutlineSafety className="timeline-icon"/>
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                          Sentinel
                        </Typography>
                        <Typography
                          sx={{ fontSize: 13, }}
                        >
                          Product Launch 
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot color="success">
                          <BsPeopleFill />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                          Client
                        </Typography>
                        <Typography
                          sx={{ fontSize: 13, }}
                        >
                          Provided solutions for ABC (P) Ltd
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </Col>
                <Col md={1}></Col>
                <Col md={7}>
                  <p className="vision-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  <p className="vision-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
