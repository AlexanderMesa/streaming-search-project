import React, { Component } from "react";
import Modal from "./Modal";

// --------------------------------------------------------
// styling
const navStyle = {
  backgroundImage: "url('//i.imgur.com/mjWffKU.png')",

  backgroundSize: "contain",
  minHeight: "20em",
  backgroundRepeat: "no-repeat",
  display: "flex",
  padding: "0"
};
const linksStyle = {
  padding: "0",
  display: "flex"
};
// --------------------------------------------------------

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav
          className="container navbar navbar-expand-md navbar-dark justify-content-between rounded mb-0"
          style={navStyle}
        >
          {/* eslint-disable-next-line */}
          <a className="navbar-brand cyan-text" href="" />

          <div className="linksContainer" style={linksStyle}>
            <ul className="navbar-nav mr-auto">
              <div>
                {/* <li className="nav-item active"> */}
                <Modal
                  currentName={this.props.currentName}
                  modalClose={this.props.modalClose}
                  btnName={this.props.user ? "Profile" : "Sign In"}
                >
                  {this.props.renderBtn()}
                </Modal>

                {/* </li> */}
                {/* <li className="nav-item active"> */}
                {/* </li> */}
              </div>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
