import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export class CommentBox extends React.Component {
    state = { comment: '' };

    componentDidMount() {
        this.shouldNavigateAway();
    };

    componentDidUpdate() {
        this.shouldNavigateAway();
    };

    shouldNavigateAway() {
        if(!this.props.auth) {
            this.props.history.push('/');
        }
    }

    handleChange = (event) => {
        this.setState({ comment: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <h4>Add a Comment</h4>
                    <textarea onChange={ this.handleChange } value={this.state.comment} />
                    <div>
                        <button>Submit Button</button>
                        
                    </div>
                </form>
                <button className="fetch-comments" onClick={ this.props.fetchComments }>Fetch Comments</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

const mapDispatchToProps = (dispatch) => ({
    saveComment: (comment) => dispatch(actions.saveComment(comment)),
    fetchComments: () => dispatch(actions.fetchComments()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);