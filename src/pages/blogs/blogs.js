import React from "react";
import { withRouter } from "react-router-dom";
import "./blogs.css";
import "./blogs.scss";
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

class blogs extends React.Component {
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
              <div className="sc-hm-one-blog">
                <div className="sc-hm-one-in-about">
                  <Container>
                    <Row className="homAdse-section">
                      <Col md={2}></Col>
                      <Col md={8}>
                        <div className="text-pop-about">
                        <p className="txt_ Title" id="myElement4">
                            Blogs
                          </p>
                          <p className="txt_ subTitle-blogs">
                            Read about our recents developments, enhancements and achievements and get a glimpse of our future prospects.
                          </p>
                          <div className="align-items">
                              <button
                                className="visit-site-about"
                              >
                                <a href="#about-div2-info">Read Posts</a>
                              </button>
                          </div>
                        </div>
                      </Col>
                      <Col md={2}></Col>
                    </Row>
                  </Container>
                </div>
              </div>
              <div className="blogsDiv" id="about-div2-info">
                <p className="txt_recent">Recent Posts</p>
                <Row>
                  <Col md={4}>
                    <div className="blogsDiv-inner">
                      <div class="box-blogs">
                        <Row>
                          <Col md={4}>
                            <img src={office_1} className="card-ions-blog"/>
                          </Col>
                          <Col md={8}>
                            <p className="blog-card-left-header">New Office</p>
                            <p className="blog-card-left-subheader">This is some dummy text for short brief</p>
                            <p className="blog-card-left-date">10:25 PM • 24-03-2022</p>
                          </Col>
                        </Row>
                      </div>
                      <div class="box-blogs">
                        <Row>
                          <Col md={4}>
                            <img src={office_2} className="card-ions-blog"/>
                          </Col>
                          <Col md={8}>
                            <p className="blog-card-left-header">New Office</p>
                            <p className="blog-card-left-subheader">This is some dummy text for short brief</p>
                            <p className="blog-card-left-date">10:25 PM • 24-03-2022</p>
                          </Col>
                        </Row>
                      </div>
                      <div class="box-blogs">
                        <Row>
                          <Col md={4}>
                            <img src={office_3} className="card-ions-blog"/>
                          </Col>
                          <Col md={8}>
                            <p className="blog-card-left-header">New Office</p>
                            <p className="blog-card-left-subheader">This is some dummy text for short brief</p>
                            <p className="blog-card-left-date">10:25 PM • 24-03-2022</p>
                          </Col>
                        </Row>
                      </div>
                      <div class="box-blogs">
                        <Row>
                          <Col md={4}>
                            <img src={office_4} className="card-ions-blog"/>
                          </Col>
                          <Col md={8}>
                            <p className="blog-card-left-header">New Office</p>
                            <p className="blog-card-left-subheader">This is some dummy text for short brief</p>
                            <p className="blog-card-left-date">10:25 PM • 24-03-2022</p>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                  <Col>
                  <div className="blogsDiv-inner-2">
                    <center>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/Vj5RmNNxhI0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </center>
                      <div>
                        <p className="services-top-title">Random Blog Title</p>
                        <p className="blog-context-txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p className="blog-context-txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                  </Col>
                </Row>
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
