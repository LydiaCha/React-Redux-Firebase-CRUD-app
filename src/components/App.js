import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts, savePost, deletePost } from "../actions/postsAction";
import PostCard from "./PostCard";
import { getUser } from "../actions/userAction";

class App extends Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      title: '',
      body: '',
    };
    //bind
    this.onInputChange = this.onInputChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
  }

  // handle input change
  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // handle form submit
  onHandleSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
      uid: this.props.user.uid
    };
    this.props.savePost(post);
    this.setState({
      title: '',
      body: '',
    });
  }

  // render posts from firebase
  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
      return (
        <PostCard key={key}>
          <Link to={`/${key}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.body}</p>
          {post.uid === this.props.user.uid && (
            <div>
              <button
                className="btn btn-danger btn-xs"
                onClick={() => this.props.deletePost(key)}
              >
                Delete
              </button>
              <button className="btn btn-info btn-xs pull-right">
                <Link to={`/${key}/edit`}>Update</Link>
              </button>
            </div>
          )}
        </PostCard>
      );
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-sm-6 col-sm-offset-3">
          <form onSubmit={this.onHandleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="title"
                placeholder="title"
                onChange={this.onInputChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                type="text"
                name="body"
                placeholder="body"
                onChange={this.onInputChange}
                required
              />
            </div>
            <div>
              <button className="btn btn-primary">Save</button>
            </div>
          </form>
          {this.renderPosts()}
        </div>
      </div>
    );
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
