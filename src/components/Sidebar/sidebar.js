import React from "react";
import { withRouter } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import "./custom.scss";
import "./sidebar_styles.css";
import { AiOutlineHome, AiOutlineCodeSandbox } from "react-icons/ai";
import { BiSupport, BiInfoCircle, BiUserCircle } from "react-icons/bi";
import { FcAdvertising } from "react-icons/fc";
import logo from "../../assets/logo.gif";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBar: false,
    };
  }
  toggleButton = () => {
    this.setState({
      sideBar: !this.state.sideBar,
    });
  };
  render() {
    return (
      <ProSidebar>
        <center><img src={logo} className="footer-logo" /></center>
        <Menu iconShape="square">
          <MenuItem icon={<FcAdvertising size={25} color={"#fff"}/>}>
            <button
                  className="btn"
                  onClick={() => this.props.history.push("/ads")}
            >
                  Sentinel
            </button>
          </MenuItem>
          <MenuItem icon={<BiSupport size={25} color={"#fff"}/>}>
            <button
                  className="btn"
                  onClick={() => this.props.history.push("/contact")}
            >
                  Contact
            </button>
          </MenuItem>
          <MenuItem icon={<BiInfoCircle size={25} color={"#fff"}/>}>
            <button
                  className="btn"
                  onClick={() => this.props.history.push("/about-us")}
            >
                  About
            </button>
          </MenuItem>
          <MenuItem icon={<AiOutlineCodeSandbox size={25} color={"#fff"}/>}>
          <button
                  className="btn"
                  onClick={() => this.props.history.push("/services")}
            >
                  Services
          </button>
          </MenuItem>
          <MenuItem icon={<AiOutlineHome size={25} color={"#fff"}/>}>
            <button
                  className="btn"
                  onClick={() => this.props.history.push("/")}
            >
                  Home
            </button>
          </MenuItem>
          <MenuItem icon={<BiUserCircle size={25} color={"#fff"}/>}>
            <button
                  className="btn"
                  onClick={() => this.props.history.push("/")}
            >
                  Profile
            </button>
          </MenuItem>
          <MenuItem iconShape="square">Dashboard</MenuItem>
          <MenuItem iconShape="square">Dashboard</MenuItem>
          <MenuItem iconShape="square">Dashboard</MenuItem>
          <MenuItem iconShape="square">Dashboard</MenuItem>
        </Menu>
      </ProSidebar>
    );
  }
}

export default withRouter(SideBar);
