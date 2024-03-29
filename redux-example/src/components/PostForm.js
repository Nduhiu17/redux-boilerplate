import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';


class PostForm extends Component {
  constructor(props){
      super(props);
      this.state = {
          title:''
      };
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }

 
  onChange(e){
      this.setState({[e.target.name]:e.target.value});
  }

  onSubmit(e){
      e.preventDefault();
      const post = {
          title:this.state.title
      };

      this.props.createPost(post)

  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Title: </label><br />
                <input type="text" name="title" onChange={this.onChange} value={this.state.title }/>
                <button type="submit">Submit</button>
            </div>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
    createPost: propTypes.func.isRequired
}

export default connect(null,{ createPost })(PostForm);
