import React, { Component } from "react";
import { connect } from "react-redux";
import { editPost } from "../actions/postsAction";

class PostEdit extends Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      title: this.props.post.title,
      body: this.props.post.body,
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
      uid: this.props.uid,
    };
    this.props.editPost(this.props.match.params.id, post);
    this.setState({
      title: "",
      body: "",
    });
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="container">
        <br></br>
        <br></br>
        <br></br>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title text-center">Edit post</h3>
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
                    value={this.state.title}
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
                    value={this.state.body}
                    required
                  />
                </div>
                <div>
                  <button className="btn btn-success">Update</button>
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
    post: state.posts[ownProps.match.params.id],
    uid: state.user.uid,
  };
}

export default connect(mapStateToProps, { editPost })(PostEdit);
