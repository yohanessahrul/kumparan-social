import React, { useEffect, useState } from 'react'
import classes from './HomeContainer.module.scss'
import { connect } from 'react-redux'
import * as postAction from '../../redux/post/PostAction'
import PostList from '../../components/PostList/PostList'
import CreatePost from '../../components/CreatePost/CreatePost'
import UserList from '../../components/UserList/UserList'

function HomeContainer(props) {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    props.onGetAllPost()
    // props.onGetDetail(1)
    // let payload = {
      //   title: 'foo',
      //   body: 'bar',
      //   userId: 1,
      // }
      // props.onCreatedPost(payload)
      // props.onUpdatedPost(payload, 100)
      // props.onDeletedPost(100)
      
      // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (props.commentsByPostId) {
      console.log(`aha`)
    }
  }, [props.commentsByPostId])

  useEffect(() => {
    if (props.posts) {
      setPosts(props.posts)
    }
  }, [props.posts])

  return (
    <div data-testid="container" className={classes.Wrapper}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className={classes.Header}>
              Kumparan Social
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <CreatePost />
            <PostList data={posts}/>
          </div>
          <div className='col-md-4'>
            <div className={classes.SideBar}>
              <div className={classes.Heading}>Orang yang mungkin anda kenal</div>
              <UserList />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.PostReducer.posts,
    commentsByPostId: state.CommentReducer.commentsByPostId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllPost: () => dispatch(postAction.getAllPosts()),
    // onGetDetail: (id) => dispatch(postAction.getDetailPost(id)),
    // onCreatedPost: (payload) => dispatch(postAction.createPost(payload)),
    // onUpdatedPost: (payload, id) => dispatch(postAction.updatePost(payload, id)),
    // onDeletedPost: (id) => dispatch(postAction.deletedPost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
// export default HomeContainer