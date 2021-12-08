import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import classes from './AlbumContainer.module.scss'
import { useParams } from 'react-router-dom'
import * as userAction from '../../redux/user/UserAction'
import * as albumAction from '../../redux/album/AlbumAction'
import { connect } from 'react-redux'

function AlbumContainer(props) {
  let { id, albumid } = useParams()
  const [detailUser, setDetailUser] = useState(null)
  const [photosByAlbumId, setPhotosByAlbumId] = useState(null)

  useEffect(() => {
    props.onGetAllUsers()
    props.onGetDetailUser(id)
    props.onGetPhotosByAlbumId(albumid)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (props.detailUser) {
      setDetailUser(props.detailUser)
    }
  }, [props.detailUser])

  useEffect(() => {
    if (props.photosByAlbumId) {
      setPhotosByAlbumId(props.photosByAlbumId)
    }
  }, [props.photosByAlbumId])

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

  let photoList = null
  if (photosByAlbumId) {
    if (photosByAlbumId.length > 0) {
      photoList = photosByAlbumId.map((item, key) => {
        return (
          <div className={classes.Item} key={key}>
            <div className={classes.Image}>
              <img src={item.thumbnailUrl} alt={item.title}/>
            </div>
          </div>
        )
      })
    }
  }

  return (
    <div className={classes.Wrapper}>
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
            <div className={classes.CollectionImage}>
              {photoList}
              <div className={classes.Clear}></div>
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
    albums: state.AlbumReducer.albums,
    photosByAlbumId: state.AlbumReducer.photosByAlbumId,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllUsers: () => dispatch(userAction.getAllUsers()),
    onGetDetailUser: (userId) => dispatch(userAction.getDetailUser(userId)),
    onGetPhotosByAlbumId: (albumId) => dispatch(albumAction.getPhotosByAlbumId(albumId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumContainer)