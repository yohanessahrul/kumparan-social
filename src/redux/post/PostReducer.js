import { updateObject } from './../utility';

const initialState = {
  posts: [],
  isFetchPosts: false,
  isErrorFetchPosts: false,
  detailPost: null,
  changeListener: false
}

export const setPosts = (state, action) => {
  return updateObject(state, {posts: action.payload.data})
}

const setIsFetchPosts = (state, action) => {
  return updateObject(state, { isFetchPosts: action.payload.value })
}

const setIsErrorFetchPosts = (state, action) => {
  return updateObject(state, { isErrorFetchPosts: action.payload.value })
}

const setDetailPost = (state, action) => {
  return updateObject(state, {detailPost: action.payload.data})
}

const setNewPost = (state, action) => {
  console.log(`object`, action.payload.data)
  let postsCp = state.posts
  postsCp.unshift(action.payload.data)
  console.log(`postsCp`, postsCp)
  return updateObject(state, { posts: postsCp, changeListener: !state.changeListener })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS': return setPosts(state, action)
    case 'SET_IS_FETCH_POSTS': return setIsFetchPosts(state, action)
    case 'SET_IS_ERROR_FETCH_POSTS': return setIsErrorFetchPosts(state, action)
    case 'SET_DETAIL_POST': return setDetailPost(state, action)
    case 'SET_NEW_POST': return setNewPost(state, action)
    
    default: return state
  }
}

export default reducer