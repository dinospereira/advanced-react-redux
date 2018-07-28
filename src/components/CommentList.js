import React from 'react';
import { connect } from 'react-redux';

class CommentList extends React.Component {
    renderComments() {
        return this.props.comments.map((comment, index) => <li key={index}>{comment}</li>)
    }
    
    render() {
        return (
            <div>
                <h4>Comment List</h4>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    comments: state.comments,
})

export default connect(mapStateToProps, null)(CommentList);