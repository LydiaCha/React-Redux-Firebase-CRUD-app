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
                value={this.state.title}
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
                value={this.state.body}
                required
              />
            </div>
            <div>
              <button className="btn btn-primary">Save</button>
            </div>
          </form>
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
