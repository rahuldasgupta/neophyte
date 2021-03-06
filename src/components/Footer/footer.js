import React from "react";
import { withRouter } from "react-router-dom";
import "./footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.gif";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends React.Component {
  render() {
    return (
        <div>
            <Row className="footer_contant">
                <Col xs={12} sm={12} md={4} lg={4}>
                    <div className="items-cls">
                        <div className="quick-links">
                            <img
                                alt="logo"
                                src={logo}
                                className="footer-logo"
                            />
                            <hr align="center" />
                            <Row>
                                <Col md={1} lg={1} xs={1} sm={1}>
                                    <img
                                        alt="logo"
                                        src={facebook}
                                        className="social-icons"
                                    />
                                </Col>
                                <Col md={1} lg={1} xs={1} sm={1}>
                                    <img
                                        alt="logo"
                                        src={linkedin}
                                        className="social-icons"
                                    />
                                </Col>
                                <Col md={1} lg={1} xs={1} sm={1}>
                                    <img
                                        alt="logo"
                                        src={instagram}
                                        className="social-icons"
                                    />
                                </Col>
                                <Col md={1} lg={1} xs={1} sm={1}>
                                    <img
                                        alt="logo"
                                        src={twitter}
                                        className="social-icons"
                                    />
                                </Col>
                                <Col md={1} lg={1} xs={1} sm={1}>
                                    <img
                                        alt="logo"
                                        src={youtube}
                                        className="social-icons"
                                        style={{borderRadius: 5}}
                                    />
                                </Col>
                                <Col md={7} lg={7} xs={7} sm={7}></Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                    <div className="items-cls sec">
                        <div className="links">
                            <p className="links">
                                <Link className="links_text" to="/about-us">About</Link>
                            </p>
                            <p className="links">
                                <Link className="links_text" to="/contact">Contact Us</Link>
                            </p>
                            <p className="links">
                                <Link className="links_text" to="/privacy-policy">Sentinal</Link>
                            </p>
                            <p className="links">
                                <Link className="links_text" to="/privacy-policy">NeoMetry</Link>
                            </p>
                            <p className="links">
                                <Link className="links_text" to="/privacy-policy">Request Demo</Link>
                            </p>
                            <p className="links">
                                <Link className="links_text" to="/terms-of-use">Terms and Conditions</Link>
                            </p>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={4}>
                    <p className="info">
                        Plot No 401,<br/>
                        Vishwakarma / Annapurna Mahila Mandal CHS,<br/>
                        Sector 21, Kharghar,<br/>
                        Navi Mumbai, Maharashtra 410210<br/><br/>
                        Email - sales@neophyte.live
                    </p>
                </Col>
            </Row>
        </div>
    );
  }
}

export default withRouter(Footer);
