import React, { useState } from 'react'
import classes from './Item.module.scss'
import { connect } from 'react-redux'
import Comments from '../../Modal/Comments/Comments'
import EditPost from '../../Modal/EditPost/EditPost'
import * as commentAction from '../../../redux/comment/CommentAction'

function Item(props) {
  const [activePostId, setActivePostId] = useState(null)

  const displayComemmentsHandler = (postId) => {
    setActivePostId(postId)
    props.onGetCommentsByPostId(postId)
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
                <li className="dropdown-item" type="button" data-bs-toggle="modal" data-bs-target="#editPostModal">Edit</li>
                <li className="dropdown-item">Delete</li>
              </ul>
            </div>
          </div>
          <div className={classes.Left}>
            <div className={classes.Initial}>Y</div>
          </div>
          <div className={classes.Right}>
            <div className={classes.Name}>Foo Bar</div>
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

  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // onGetAllPost: () => dispatch(postAction.getAllPosts()),
    onGetCommentsByPostId: (postId) => dispatch(commentAction.getCommentsByPostId(postId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item) 