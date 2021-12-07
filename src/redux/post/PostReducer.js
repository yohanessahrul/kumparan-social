import { updateObject } from './../utility';

const initialState = {
  posts: [],
  isFetchPosts: false,
  isErrorFetchPosts: false,
  detailPost: null,
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS': return setPosts(state, action)
    case 'SET_IS_FETCH_POSTS': return setIsFetchPosts(state, action)
    case 'SET_IS_ERROR_FETCH_POSTS': return setIsErrorFetchPosts(state, action)
    case 'SET_DETAIL_POST': return setDetailPost(state, action)
    
    default: return state
  }
}

export default reducer