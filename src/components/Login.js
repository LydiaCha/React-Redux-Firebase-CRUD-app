import React, { Component } from "react";
import { connect } from "react-redux";
import { googleLogin } from "../actions/userAction";

class Login extends Component {
  // if the user is logged in, take them to the home page
  componentWillMount() {
    if (this.props.user !== null) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== null) {
      nextProps.history.push("/");
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row text-center"></div>
        <div className="col-sm-12 jumbotron">
          <h1>Login</h1>
        </div>
        <div className="col-sm-6">
          <button
            className="btn btn-danger btn-lg"
            onClick={this.props.googleLogin}
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, onwProps) {
  return {
      user: state.user
  };
}

export default connect(mapStateToProps, { googleLogin })(Login);
