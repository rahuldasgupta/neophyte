import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import SideBar from "../Sidebar/sidebar";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

import logo from "../../assets/logo.gif";
import sidebar_icon from "../../assets/icon/sidebar_icon.png";
import { IoClose } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import Layer1 from "../../assets/Layer1.svg";
import Layer2 from "../../assets/layer2.png";
import Layer3 from "../../assets/layer3.png";
import amiware_logo from "../../assets/amiware_logo.png";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";
import 'react-toastify/dist/ReactToastify.css';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactModal: false,
      amiwareModal: false,
      errors: {},
      introduction: true,
      technology: false,
      workflow: false
    };
    this.openModal = this.openModal.bind(this);
    this.openAmiwareModal = this.openAmiwareModal.bind(this);
  }
  toggleButton = () => {
    this.setState({
      sideBar: !this.state.sideBar,
    });
  };
  openModal() {
    this.setState({ contactModal: !this.state.contactModal });
  }
  openAmiwareModal() {
    this.setState({ amiwareModal: !this.state.amiwareModal });
  }
  successToast() {
    toast.success("Authenticated", {
      position: "bottom-center",
      autoClose: 2700,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  errorToast() {
    toast.error("Authentication Error", {
      position: "bottom-center",
      autoClose: 2700,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  render() {
    return (
      <>
      <Modal
          show={this.state.contactModal}
          backdrop="static"
          keyboard={false}
          dialogClassName="border-radius-1"
          centered
          size="xl"
        >
          <ModalBody>
            <div >
              <Row>
                <Col md={5}>
                  <div className="contact-div-first">
                    <p className="contact-div1-title">Contact Information</p>
                    <p className="contact-div1-subtitle">Fill up the form and our team will get back to you in 24 hrs</p>
                    <div className="contact-icon-first">
                      <Row>
                        <Col md={1}>
                          <FaPhoneAlt
                            size={20}
                            className="loc-icons"
                          />
                        </Col>
                        <Col md={4}>
                          <p className="contact-div1-subtitle number">+91 879-480-3021</p>
                        </Col>
                      </Row>
                    </div>
                    <div className="contact-icon-second">
                      <Row>
                        <Col md={1}>
                          <IoIosMail
                            size={25}
                            className="loc-icons"
                          />
                        </Col>
                        <Col md={4}>
                          <p className="contact-div1-subtitle number" onClick={() => window.location = 'mailto:sales@neophyte.live'}>sales@neophyte.live</p>
                        </Col>
                      </Row>
                    </div>
                    <div className="contact-icon-second">
                      <Row>
                        <Col md={1}>
                          <ImLocation
                            size={25}
                            className="loc-icons"
                          />
                        </Col>
                        <Col md={9}>
                          <p className="contact-div1-subtitle number-2" onClick={() => window.open("https://maps.google.com?q="+19.05033358336438+","+73.06530312559231 )}>
                            Plot No 401,<br/>
                            Vishwakarma / Annapurna Mahila Mandal CHS,
                            Sector 21, Kharghar
                            Navi Mumbai, Maharashtra 410210
                          </p>
                        </Col>
                      </Row>
                    </div>
                    <div className="contact-icon-third">
                      <Row>
                        <Col md={1} lg={1}>
                            <img
                                alt="logo"
                                src={facebook}
                                className="social-icons-contact"
                            />
                        </Col>
                        <Col md={1} lg={1}>
                            <img
                                alt="logo"
                                src={linkedin}
                                className="social-icons-contact"
                            />
                        </Col>
                        <Col md={1} lg={1}>
                            <img
                                alt="logo"
                                src={instagram}
                                className="social-icons-contact"
                            />
                        </Col>
                        <Col md={1} lg={1}>
                            <img
                                alt="logo"
                                src={twitter}
                                className="social-icons-contact"
                            />
                        </Col>
                        <Col md={7} lg={7}></Col>
                      </Row>
                    </div>
                    
                  </div>
                </Col>
                <Col md={7}>
                  <div className="contact-div-second">
                    <IoClose
                      size={30}
                      className="closeIconX"
                      onClick={() => this.setState({ contactModal: false })}
                    />
                      <Row>
                        <Col md={6}>
                            <TextField id="standard-basic" sx={{width: 235}} label="First Name" variant="standard" size="small" style={{height: 55, marginTop: "30%", marginLeft: -13}}/>
                        </Col>
                        <Col md={6}>
                            <TextField id="standard-basic" sx={{width: 235}} label="Last Name" variant="standard" size="small" style={{height: 55, marginTop: "30%", marginLeft:27}}/>
                        </Col>
                      </Row>
                    <div className="contact-textField-height">   
                      <Row>
                        <Col md={6}>
                            <TextField id="standard-basic" sx={{width: 235}} label="Email" variant="standard" size="small" style={{height: 55, }}/>
                        </Col>
                        <Col md={6}>
                            <TextField id="standard-basic" sx={{width: 235}} label="Phone Number" variant="standard" size="small" style={{height: 55,}}/>
                        </Col>
                      </Row>
                    </div>
                    <div className="contact-textField-height-third">
                      <Row>
                        <Col>
                          <Checkbox
                            icon={<BsCircle size={20} className="chbk-icons"/>}
                            checkedIcon={<BsCheckCircleFill size={20} className="chbk-icons"/>}
                          />
                          <span>Complaint</span>
                        </Col>
                        <Col>
                          <Checkbox
                            icon={<BsCircle size={20} className="chbk-icons"/>}
                            checkedIcon={<BsCheckCircleFill size={20} className="chbk-icons"/>}
                          />
                          <span>Feedback</span>
                        </Col>
                        <Col>
                          <Checkbox
                            icon={<BsCircle size={20} className="chbk-icons"/>}
                            checkedIcon={<BsCheckCircleFill size={20} className="chbk-icons"/>}
                          />
                          <span>Enquiry</span>
                        </Col>
                      </Row> 
                    </div>
                    <div className="contact-textField-height-third">
                      <TextField id="standard-basic" sx={{width: "90%"}} label="Message" variant="standard" size="small" style={{height: 65, marginTop: -40, marginLeft: -12}}/>
                    </div>
                    <div className="contact-sbmit-btn">
                      <button
                        className="submitBtn"
                        //onClick={() => this.successToast()}
                        style={{borderRadius: 5}}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </ModalBody>
        </Modal>
        <Modal
          show={this.state.amiwareModal}
          backdrop="static"
          keyboard={false}
          dialogClassName="border-radius-1"
          centered
          size="xl"
        >
          <ModalBody>
            <div>
              <Row>
                <Col md={4}>
                  <div className="contact-div-first">
                    <p className="amiware-div1-title">AmiWare</p>
                    <p className="amiware-div1-subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                    <p onClick={() => this.setState({ introduction: true, technology: false, workflow: false })} className={this.state.introduction ? "amiware-links-title-ami-flipped" : "amiware-links-title"}>Introduction</p>
                    <p onClick={() => this.setState({ introduction: false, technology: true, workflow: false })} className={this.state.technology ? "amiware-links-title-ami-flipped" : "amiware-links-title"}>Technology</p>
                    <p onClick={() => this.setState({ introduction: false, technology: false, workflow: true })} className={this.state.workflow ? "amiware-links-title-ami-flipped" : "amiware-links-title"}>Work Flow</p>
                  </div>
                </Col>
                <Col md={8}>
                  <div className="contact-div-second">
                    <IoClose
                      size={30}
                      className="closeIconX"
                      onClick={() => this.setState({ amiwareModal: false })}
                    />
                    {
                      this.state.introduction?
                      <div className="intro-amiware-view">
                        <center>
                          <img
                              src={amiware_logo}
                              className="amiware_logo-image"
                          />
                        </center>
                        
                        <img
                            src={Layer1}
                            className="layer1-img"
                        />
                        <p className="layer1-txt">AmIware improves <span className="amiware-hightlight">Process Visibilty and Automation Management</span> for supply chain ecosystems with intelligent Ambient Machines, leading to minimal people-induced losses and product-linked costs.</p>
                      </div>
                      :
                      <></>
                    }
                    {
                      this.state.technology?
                        <div className="intro-amiware-view2">
                          <img
                              src={Layer2}
                              className="layer2-img"
                          />
                        </div>
                      :
                      <></>
                    }
                    {
                      this.state.workflow?
                        <div className="intro-amiware-view">
                          <center>
                            <img
                                src={amiware_logo}
                                className="amiware_logo-image"
                            />
                          </center>
                          <p className="layer1-txt">Our <span className="amiware-hightlight">context and task aware engine - AmiWare</span>, Connets with the existing IoT Infrasture & transform them into intelligent Ambient Machines each performing three fundamental operations - Sense, Process and Interact.</p>
                          <p className="layer1-txt">AmiWare ensures end-to-end monitoring and reporting of processess & sub-processes within the warehouse floor by enabling collaborative HCI between <span className="amiware-hightlight">Ambient Machines</span> and<span className="amiware-hightlight"> Ambient Agents</span> (or workers)</p>
                          <img
                              src={Layer3}
                              className="layer3-img"
                          />
                        </div>
                      :
                      <></>
                    }
                  </div>
                </Col>
              </Row>
            </div>
          </ModalBody>
        </Modal>
        <Nav>
          <div className="side-bar">
            {
              this.state.sideBar ?
              <Row>
                <Col>
                  <SideBar />
                </Col>
                <Col>
                  <IoClose
                      style={{marginLeft: -80,}}
                      size={25}
                      className="closeIcon"
                      onClick={() => this.setState({ sideBar: false })}
                    />
                </Col>
              </Row>
              :
              <Row>
                <Col className="sidebar-icon">
                  <img
                      alt="sidebar"
                      src={sidebar_icon}
                      className="sidebar-icon"
                      onClick={() => this.setState({ sideBar: true })}
                    />
                </Col>
                <Col>
                  <a href="https://neophyte.vercel.app/">
                    <img
                      alt="logo"
                      src={logo}
                      style={{ height: 40, width: 120, marginLeft: "80%", marginTop: -20 }}
                    />
                  </a>
                </Col>
              </Row>
            }
          </div>
          <NavMenu>
            <div style={{ marginRight: "11%", marginLeft:"3%" }}>
              <a href="https://neophyte.vercel.app/about"><span className="about-nav-text">About</span></a>
            </div>
            <NavLink to="/services" style={{ marginRight: "8%" }}>
              <span className="services-nav-text">Blogs</span>
            </NavLink>
              <p
                className="navbar_txt"
                onClick={this.openModal}
                style={{ marginRight: "9%" }}
              >
                Contact
              </p>
            <a href="https://neophyte.vercel.app/">
              <img alt="logo" src={logo} style={{ height: 35, width: 150 }} />
            </a>
            <label class="dropdown">
              <div class="dd-button">
                <span className="contact-nav-text">Products</span>
              </div>
              <input type="checkbox" class="dd-input" id="test"/>
              <ul class="dd-menu">
                <a href="https://neophyte.vercel.app/sentinel"><li>Sentinel</li></a>
                <a href="https://neophyte.vercel.app/neometry"><li>Neometry</li></a>
              </ul>
            </label>
            <p
              className="navbar_txt"
              onClick={this.openAmiwareModal}
              style={{ marginRight: "8%" }}
            >
              AmIWare
            </p>
            <NavLink to="/about" style={{ marginRight: "7%", }}>
                Demo
            </NavLink>
          </NavMenu>
        </Nav>
      </>
    );
  }
}

export default Navbar;
