import React, { useState } from 'react'
import { connect } from 'react-redux'
import classes from './CreatePost.module.scss'
import * as postAction from '../../redux/post/PostAction'

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
    console.log(`submit =>`, payload)
  }

  return (
    <div className={classes.Wrapper}>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Subject</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Subject here.."
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}/>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Content</label>
        <textarea
          name="body"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder='Content Here'
          value={body}
          onChange={(e) => setBody(e.target.value)}></textarea>
      </div>
      <div className='row'>
        <div className='col-md-10'></div>
        <div className='col-md-2'>
          <div className="d-grid gap-2">
            <button className='btn btn-primary btn-block' onClick={onSubmitHandler}>Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
    onCreatedPost: (payload) => dispatch(postAction.createPost(payload)),
  }
}

export default connect(null, mapDispatchToProps)(CreatePost)