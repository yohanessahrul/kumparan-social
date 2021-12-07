import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import classes from './Comments.module.scss'
import * as commentAction from '../../../redux/comment/CommentAction'


function Comments(props) {
  const myRef = useRef(null)
  const [allCommentsByPostId, setAllCommentsByPostId] = useState()
  const [comment, setComment] = useState('')

  const executeScroll = () => myRef.current.scrollIntoView()    

  useEffect(() => {
    setAllCommentsByPostId(props.commentsByPostId)
  }, [props.commentsByPostId])

  useEffect(() => {
    setComment('')
    setAllCommentsByPostId(props.commentsByPostId)
    executeScroll()
  }, [props.changeListener])

  const onChangeHandler = (e) => {
    setComment(e.target.value)
  }

  const onSubmitHandler = () => {

    let payload = {
      postId: props.postId,
      id: 501,
      name: 'Mr Satan',
      email: 'mrsatan@gmail.com',
      body: comment
    }
    props.onAddCommentByPostId(props.postId, payload)
  }

  let commentList = null
  if (allCommentsByPostId && allCommentsByPostId.length > 0) {
    commentList = allCommentsByPostId.map((item, key) => {
      return (
        <div className={classes.Item} key={key} >
          <div className={classes.Left}>
            <div className={classes.Initial}>{item.email[0]}</div>
          </div>
          <div className={classes.Right}>
            <div className={classes.Name}>
              {item.email}
            </div>
            <div className={classes.Comment}>
              {item.body}
            </div>
          </div>
        </div>
      )
    })
  }
  return (
    <div className="modal fade" id="modalComments" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">All comment</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {commentList}
            <div ref={myRef}></div>
          </div>
          <div className="modal-footer">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                aria-label="asd"
                value={comment}
                onChange={(e) => onChangeHandler(e)} />
              <span className="input-group-text" onClick={() => onSubmitHandler()}>Add Comment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    commentsByPostId: state.CommentReducer.commentsByPostId,
    changeListener: state.CommentReducer.changeListener,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCommentByPostId: (postId, payload) => dispatch(commentAction.addCommentByPostId(postId, payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)