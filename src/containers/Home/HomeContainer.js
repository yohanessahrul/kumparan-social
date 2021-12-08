import React, { useEffect, useState } from 'react'
import classes from './HomeContainer.module.scss'
import { connect } from 'react-redux'
import * as postAction from '../../redux/post/PostAction'
import * as userAction from '../../redux/user/UserAction'
import PostList from '../../components/PostList/PostList'
import UserList from '../../components/UserList/UserList'
import Header from '../../components/Header/Header'
import CreatePost from '../../components/CreatePost/CreatePost'

function HomeContainer(props) {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    props.onGetAllPost()
    props.onGetAllUsers()
      // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setPosts(props.posts)
  }, [props.posts])

  return (
    <div data-testid="container" className={classes.Wrapper}>
      <div className='container'>
        <Header />
        <div className='row'>
          <div className='col-md-8'>
            <CreatePost />
            <PostList data={posts}/>
          </div>
          <div className='col-md-4'>
            <div className={classes.SideBar}>
              <div className={classes.Heading}>User list</div>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllPost: () => dispatch(postAction.getAllPosts()),
    onGetAllUsers: () => dispatch(userAction.getAllUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)