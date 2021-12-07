import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as postAction from '../../redux/post/PostAction'
import PostList from '../../components/PostList/PostList'

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
    if (props.posts) {
      setPosts(props.posts)
    }
  }, [props.posts])

  return (
    <div data-testid="container">
      <PostList data={posts}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    posts: state.PostReducer.posts
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