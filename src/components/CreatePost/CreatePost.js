import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import classes from './CreatePost.module.scss'
import * as postAction from '../../redux/post/PostAction'
import Swal from 'sweetalert2'

function CreatePost(props) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const onSubmitHandler = () => {
    let payload = {
      title: title,
      body: body,
      userId: 1
    }
    props.onCreatedPost(payload)
  }
  
  useEffect(() => {
    setTitle('')
    setBody('')
  }, [props.changeListener])

  useEffect(() => {
    if (props.isSuccessPost) {
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Success post',
        showConfirmButton: false,
        timer: 1500
      })
      props.onSetIsSuccessPost()
    }
    // eslint-disable-next-line
  }, [props.isSuccessPost])

  return (
    <div className={classes.Wrapper}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Subject</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Subject here.."
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Content</label>
        <textarea
          name="body"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder='Content Here'
          value={body}
          onChange={(e) => setBody(e.target.value)}></textarea>
      </div>
      <div className='row'>
        <div className='col-md-10'></div>
        <div className='col-md-2 col-sm-12'>
          <div className="d-grid gap-2">
            <button className='btn btn-primary btn-block' onClick={onSubmitHandler}>Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.PostReducer.posts,
    changeListener: state.PostReducer.changeListener,
    isSuccessPost: state.PostReducer.isSuccessPost,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreatedPost: (payload) => dispatch(postAction.createPost(payload)),
    onSetIsSuccessPost: () => dispatch(postAction.setIsSuccessPost())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)