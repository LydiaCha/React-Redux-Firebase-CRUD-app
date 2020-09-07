import React, { Component } from "react";
import { connect } from "react-redux";
import { savePost } from "../actions/postsAction";

class PostCreate extends Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      title: "",
      body: "",
    };
    //bind
    this.onInputChange = this.onInputChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
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
      uid: this.props.user.uid,
    };
    this.props.savePost(post);
    this.setState({
      title: "",
      body: "",
    });
  }

  render() {
    return (
      <div className="container">
        <br></br>
        <br></br>
        <br></br>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title text-center">Create a new post</h3>
            <br></br>
            <div className="panel-body">
              <form onSubmit={this.onHandleSubmit}>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={this.onInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    type="text"
                    name="body"
                    placeholder="Body"
                    cols="80"
                    rows="20"
                    onChange={this.onInputChange}
                    required
                  />
                </div>
                <div>
                  <button className="btn btn-success">Save</button>
                </div>
              </form>
            </div>
          </div>
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
  savePost,
})(PostCreate);
