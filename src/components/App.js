import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts, savePost, deletePost } from "../actions/postsAction";
import { getUser } from "../actions/userAction";

class App extends Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      title: "",
      body: "",
    };
    //bind
    this.renderPosts = this.renderPosts.bind(this);
  }

  // render posts from firebase
  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      return (
        <div>
          <br></br>
          <div key={key} className="card">
            <div className="card-body">
              <Link to={`/${key}`}>
                <h5
                  className="card-title"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {" "}
                  {post.title}{" "}
                </h5>
              </Link>
              <div
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                <p className="card-text">{post.body}</p>
              </div>
              <br></br>
              {post.uid === this.props.user.uid && (
                <div>
                  <div className="d-inline" style={{ paddingRight: 10 }}>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.props.deletePost(key)}
                    >
                      Delete
                    </button>
                  </div>
                  <div className="d-inline">
                    <a
                      className="btn btn-primary"
                      href={`/${key}/edit`}
                      role="button"
                    >
                      Edit
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderPosts()}</div>;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts,
    user: state.user,
  };
}

export default connect(mapStateToProps, {
  getPosts,
  savePost,
  deletePost,
  getUser,
})(App);
