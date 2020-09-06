import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUser } from "../actions/userAction";
import { getPosts } from "../actions/postsAction";

class Loading extends Component {
  componentWillMount() {
    const { userLoading, postsLoading } = this.props;
    // if we havent tried to load the user, load user
    if (userLoading === undefined) {
      this.props.getUser();
    }

    // if we havent tried to get posts, load posts
    if (postsLoading === undefined) {
      this.props.getPosts();
    }
  }

  componentWillReceiveProps(nextProps) {
    // wait for user to get authenticated and try to load posts
    if (nextProps.postsLoading === -1 && nextProps.user !== null) {
      this.props.getPosts();
    }
  }

  render() {
    const { userLoading, postsLoading, children } = this.props;
    if ((!userLoading && !postsLoading) || this.props.user === null) {
      return <div>{children}</div>;
    } else {
      return (
        <div>
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    userLoading: state.loading.user,
    postsLoading: state.loading.posts,
    user: state.user,
  };
}

export default withRouter(
  connect(mapStateToProps, { getUser, getPosts })(Loading)
);
