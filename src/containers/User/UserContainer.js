import React, { useState, useEffect } from 'react'
import classes from './UserContainer.module.scss'
import Header from '../../components/Header/Header'
import * as postAction from '../../redux/post/PostAction'
import * as userAction from '../../redux/user/UserAction'
import * as albumAction from '../../redux/album/AlbumAction'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import PostList from '../../components/PostList/PostList'
import AlbumList from '../../components/AlbumList/AlbumList'

function UserContainer(props) {
  let { id } = useParams()
  const [postsByUserId, setpostsByUserId] = useState(null)
  const [displayMode, setDisplayMode] = useState('posts')
  const [detailUser, setDetailUser] = useState(null)
  const [albumsByUserId, setAlbumsByUserId] = useState(null)

  const displayChangeHandler = (value) => {
    setDisplayMode(value)
  }

  useEffect(() => {
    props.onGetAllPostByUserId(id)
    props.onGetAllUsers()
    props.onGetDetailUser(id)
    props.onGetAlbumByUserId(id)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (props.detailUser) {
      setDetailUser(props.detailUser)
    }
  }, [props.detailUser])

  useEffect(() => {
    if (props.albums) {
      setAlbumsByUserId(props.albums)
    }
  }, [props.albums])

  useEffect(() => {
    if (props.posts) {
      setpostsByUserId(props.posts)
    }
  }, [props.posts])

  let profile = null
  if (detailUser) {
    profile = (
      <React.Fragment>
        <div className={classes.Initial}>{detailUser.name[0]}</div>
        <div className={classes.Name}>{detailUser.name}</div>
        <div className={classes.Email}>{detailUser.email}</div>
      </React.Fragment>
    )
  }

  return (
    <div data-testid="container" className={classes.Wrapper}>
      <div className='container'>
        <Header />
        <div className='row'>
          <div className='col-md-4'>
            <div className={classes.SideBar}>
              <div className={classes.Heading}>Profile</div>
              {profile}
            </div>
          </div>
          <div className='col-md-8'>
            <div className={classes.ContentTab}>

              <div className={classes.Tabs}>
                <ul className="nav nav-pills nav-fill">
                  <li className="nav-item">
                    <div className={displayMode === 'posts' ? 'nav-link active' : 'nav-link'} onClick={() => displayChangeHandler('posts')}>Posts</div>
                  </li>
                  <li className="nav-item">
                    <div className={displayMode === 'albums' ? 'nav-link active' : 'nav-link'} onClick={() => displayChangeHandler('albums')}>Albums</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.ContentBody}>
              {displayMode === 'posts' ? <PostList data={postsByUserId}/> : <AlbumList data={albumsByUserId} /> }
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
    detailUser: state.UserReducer.detailUser,
    albums: state.AlbumReducer.albums
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllPostByUserId: (userId) => dispatch(postAction.getAllPostsByUserId(userId)),
    onGetAllUsers: () => dispatch(userAction.getAllUsers()),
    onGetDetailUser: (userId) => dispatch(userAction.getDetailUser(userId)),
    onGetAlbumByUserId: (userId) => dispatch(albumAction.getAlbumsByUserId(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)