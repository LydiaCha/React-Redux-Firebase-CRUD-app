import React, { Component } from "react";
import { getUser, logout } from "../actions/userAction";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand font-weight-bold" href="/">
          Mind the App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                View all articles <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/create">
                Create article
              </a>
            </li>
            <div>
              {this.props.user == null ? (
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              ) : (
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/logout"
                    onClick={() => this.props.logout()}
                  >
                    Logout
                  </a>
                </li>
              )}
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps, { getUser, logout })(Navbar);
