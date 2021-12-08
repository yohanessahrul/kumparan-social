import React, { useState, useEffect } from 'react'
import classes from './Item.module.scss'
import { connect } from 'react-redux'
import Comments from '../../Modal/Comments/Comments'
import EditPost from '../../Modal/EditPost/EditPost'
import * as commentAction from '../../../redux/comment/CommentAction'
import * as postAction from '../../../redux/post/PostAction'
import Swal from 'sweetalert2'
import { getUserData } from '../../../helper/helper'

function Item(props) {
  const [activePostId, setActivePostId] = useState(null)

  useEffect(() => {
    if (props.setIsSuccessDeletePost) {
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Success delete',
        showConfirmButton: false,
        timer: 1500
      })
      props.onSetIsSuccessDeletePost()
    }
    // eslint-disable-next-line
  }, [props.setIsSuccessDeletePost])

  const displayComemmentsHandler = (postId) => {
    setActivePostId(postId)
    props.onGetCommentsByPostId(postId)
  }

  const getDetailPostForUpdate = (item) => {
    props.onSetDetailPostForUpdate(item)
  }

  const deletePostHandler = (id) => {
    Swal.fire({
      title: 'Do you want to delete post?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        props.onDeletedPost(id)
      }
    })
  }

  let itemList = null
  if (props.data && props.data.length > 0) {
    itemList = props.data.map((item, key) => {
      return (
        <div key={key} className={classes.Wrapper}>
          <div className={classes.Opsi}>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Opsi
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li className="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#editPostModal" onClick={() => getDetailPostForUpdate(item)}>Edit</li>
                <li className="dropdown-item" onClick={() => deletePostHandler(item.id)}>Delete</li>
              </ul>
            </div>
          </div>
          <div className={classes.Left}>
            <div className={classes.Initial}>{getUserData(item.userId, 'name', props.users)[0]}</div>
          </div>
          <div className={classes.Right}>
            <div className={classes.Name}>{getUserData(item.userId, 'name', props.users)}</div>
            <div className={classes.Date}>1 Januari 2021</div>
            <div className={classes.Content}>
              <div className={classes.Title}>{item.title}</div>
              <div className={classes.Body}>{item.body}</div>
            </div>
            <div
              className={classes.Comment}
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#modalComments"
              onClick={() => displayComemmentsHandler(item.id)}>
                See All Comment
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div data-testid="post-item">
      {itemList}
      <Comments postId={activePostId}/>
      <EditPost />
      
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    commentsByPostId: state.CommentReducer.commentsByPostId,
    posts: state.PostReducer.posts,
    changeListener: state.PostReducer.changeListener,
    setIsSuccessDeletePost: state.PostReducer.setIsSuccessDeletePost,
    users: state.UserReducer.users,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onSetDetailPostForUpdate: (item) => dispatch(postAction.setDetailPostForUpdate(item)),
    onGetCommentsByPostId: (postId) => dispatch(commentAction.getCommentsByPostId(postId)),
    onDeletedPost: (id) => dispatch(postAction.deletedPost(id)),
    onSetIsSuccessDeletePost: (id) => dispatch(postAction.setIsSuccessDeletePost(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item) 