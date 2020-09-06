import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PostContent extends Component {

    render() {
        const { post } = this.props;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <Link to="/"> &#171; Back</Link>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        post: state.posts[ownProps.match.params.id],
        uid: state.user.uid
    };
}

export default connect(mapStateToProps)(PostContent);