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
import { GiButterfly } from "react-icons/gi";
import { BiSupport, BiInfoCircle, BiUserCircle } from "react-icons/bi";
import { BsBoxSeam, BsNewspaper } from "react-icons/bs";
import { FaWarehouse } from "react-icons/fa";
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
        <center>
          <img src={logo} style={{ height: 35, width: 150, marginTop:"10%", marginBottom: "10%" }} />
        </center>
        <Menu iconShape="square">
          <MenuItem icon={<BiInfoCircle size={32} color={"#fff"}/>}>
            <a>
              <span className="sidebar-item-txt">About</span>
            </a>
          </MenuItem>
          <MenuItem icon={<FaWarehouse size={26} color="white"/>}>
            <a>
              <span className="sidebar-item-txt">Sentinel</span>
            </a>
          </MenuItem>
          <MenuItem icon={<BsBoxSeam size={26} color={"#fff"}/>}>
            <a>
              <span className="sidebar-item-txt">NeoMetry</span>
            </a>
          </MenuItem>
          
          <MenuItem icon={<BsNewspaper size={25} color={"#fff"}/>}>
            <a>
              <span className="sidebar-item-txt">Blogs</span>
            </a>
          </MenuItem>
          <MenuItem icon={<BiSupport size={27} color={"#fff"}/>}>
            <a>
              <span className="sidebar-item-txt">Support</span>
            </a>
          </MenuItem>
          <MenuItem icon={<GiButterfly size={27} color={"#fff"}/>}>
            <a>
              <span className="sidebar-item-txt">AmIWare</span>
            </a>
          </MenuItem>
          <div className="empty-sidebar-div"></div>
        </Menu>
      </ProSidebar>
    );
  }
}

export default withRouter(SideBar);
