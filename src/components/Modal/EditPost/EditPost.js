import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as postAction from '../../../redux/post/PostAction'
import Swal from 'sweetalert2'

function EditPost(props) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [id, setId] = useState('')
  const [userId, setUserId] = useState('')

  useEffect(() => {
    if (props.detailPostForChange) {
      setTitle(props.detailPostForChange.title)
      setBody(props.detailPostForChange.body)
      setId(props.detailPostForChange.id)
      setUserId(props.detailPostForChange.userId)
    }
  }, [props.detailPostForChange])

  const submitUpdateHandler = () => {
    let payload = {
      id, userId, title, body
    }
    props.onUpdatedPost(payload, id)
  }

  useEffect(() => {
    if (props.isSuccessUpdatePost) {
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Success update',
        showConfirmButton: false,
        timer: 1500
      })
      props.onSetIsSuccessUpdatePost()
    }
    // eslint-disable-next-line
  }, [props.isSuccessUpdatePost])

  return (<div className="modal fade" id="editPostModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Body</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={body}
              onChange={(e) => setBody(e.target.value)}>
            </textarea>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => submitUpdateHandler()}>Update</button>
        </div>
      </div>
    </div>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.PostReducer.posts,
    detailPostForChange: state.PostReducer.detailPostForChange,
    isSuccessUpdatePost: state.PostReducer.isSuccessUpdatePost,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdatedPost: (payload, id) => dispatch(postAction.updatePost(payload, id)),
    onSetIsSuccessUpdatePost: () => dispatch(postAction.setIsSuccessUpdatePost())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditPost)