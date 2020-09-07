import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PostContent extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="container">
      <br></br><br></br><br></br>
      <h3 className="panel-title text-center">View post</h3>
      <br></br>
        <div class="card">
          <h5 class="card-header">{post.title}</h5>
          <div class="card-body">
            <p class="card-text">{post.body}</p>
          </div>
        </div>
        <div>
        <br></br>
          <a href="/" class="btn btn-primary">
            &#171; Back
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    post: state.posts[ownProps.match.params.id],
    uid: state.user.uid,
  };
}

export default connect(mapStateToProps)(PostContent);
